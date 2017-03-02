import { ReservedKind, Parser, Interpreter, transform, fr_writer, Errors, Value, Failure, Success, S3, InterpreterRead, InterpreterStatementInfo, InterpreterWrite, InterpreterDone, VarState } from 'interprete-pl'
import { Action, ActionKind } from './Actions'
import AppUI from './AppUI'
import * as $ from 'jquery'

export class Dispatcher {
    controller: Controller

    constructor(c: Controller) {
        this.controller = c
    }

    dispatch(a: Action) {
        this.controller.do(a)
    }
}

export class Controller {
    private app_ui: AppUI
    private interpreter: Interpreter
    private parser: Parser
    private program_running: boolean
    private by_steps: boolean
    private debug: boolean

    constructor(container: JQuery, debug: boolean) {
        const action_dispatcher = new Dispatcher(this)

        this.debug = debug

        this.program_running = false
        this.by_steps = false

        this.app_ui = new AppUI($('body'), container, action_dispatcher, { debug: debug })

        this.interpreter = new Interpreter()

        this.parser = new Parser()
    }

    do(a: Action) {
        switch (a.kind) {
            case ActionKind.Execute:
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })
                if (!this.program_running) {
                    this.by_steps = false
                    const compiled_program_maybe = this.compile(a.code)
                    if (!compiled_program_maybe.error) {
                        this.app_ui.clear_vars()
                        this.program_running = true
                        const program = compiled_program_maybe.result
                        this.do({ kind: ActionKind.SetUpInterpreter, program: program })
                        if (this.debug) {
                            this.do({ kind: ActionKind.ShowCompiledCode, code: fr_writer(program) })
                        }
                        this.do({ kind: ActionKind.DisableButtons })
                        this.execute()
                    }
                }
                break
            case ActionKind.Step:
                this.step()
                this.do({ kind: ActionKind.UpdateVars })
                break
            case ActionKind.FocusEditor:
                this.app_ui.focus_editor()
                break
            case ActionKind.MoveCursor:
                this.move_cursor(a.line, a.column)
                break
            case ActionKind.DragHandle:
                break
            case ActionKind.ShowMessage:
                this.show_message(a.message)
                break
            case ActionKind.ClearMessages:
                this.clear_messages()
                break
            case ActionKind.SendInput:
                this.send_input(a.input)
                this.resume_program()
                break
            case ActionKind.Write:
                this.write(a.value)
                break
            case ActionKind.ClearOutput:
                this.clear_output()
                break
            case ActionKind.ShowCompiledCode:
                this.show_compiled_code(a.code)
                break
            case ActionKind.SetUpInterpreter:
                this.set_up_interpreter(a.program)
                break
            case ActionKind.ExecuteBySteps:
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })
                if (!this.program_running) {
                    this.by_steps = true
                    const compiled_program_maybe = this.compile(a.code)
                    if (!compiled_program_maybe.error) {
                        this.app_ui.clear_vars()
                        this.app_ui.show_step_controls()
                        this.program_running = true
                        const program = compiled_program_maybe.result
                        this.do({ kind: ActionKind.SetUpInterpreter, program: program })
                        if (this.debug) {
                            this.do({ kind: ActionKind.ShowCompiledCode, code: fr_writer(program) })
                        }
                        this.do({ kind: ActionKind.DisableButtons })
                        this.do({ kind: ActionKind.Step })
                    }
                }
                break
            case ActionKind.StopExecution:
                this.program_running = false
                this.app_ui.hide_step_controls()
                this.app_ui.write('Programa finalizado correctamente.')
                this.do({ kind: ActionKind.EnableButtons })
                break
            case ActionKind.StopExecutionWithError:
                this.program_running = false
                this.app_ui.hide_step_controls()
                this.app_ui.write('Programa finalizado con un error.')
                this.do({ kind: ActionKind.EnableButtons })
                break
            case ActionKind.StopExecutionUser:
                this.program_running = false
                this.app_ui.hide_step_controls()
                this.app_ui.write('Programa finalizado por el usuario.')
                this.do({ kind: ActionKind.EnableButtons })
                break
            case ActionKind.CompileAndShow:
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })
                const { result } = this.compile(a.code)
                if (result != null) {
                    this.do({ kind: ActionKind.ShowCompiledCode, code: fr_writer(result) })
                }
                break
            case ActionKind.DisableButtons:
                this.app_ui.disable_buttons()
                break
            case ActionKind.EnableButtons:
                this.app_ui.enable_buttons()
                break
            case ActionKind.HidePanel:
            case ActionKind.ShowPanel:
                this.app_ui.toggle_panel(a.container_index, a.panel_index)
                break
            case ActionKind.SendVarName:
                this.add_var(a.name)
                break
            case ActionKind.UpdateVars:
                this.update_vars()
                break
            case ActionKind.RemoveVarFromInspection:
                this.remove_var(a.name)
                break
            case ActionKind.RemoveMsgFromInspection:
                this.remove_msg(a.name)
                break
        }
    }

    remove_msg(name: string) {
        this.app_ui.remove_msg(name)
    }

    remove_var(name: string) {
        this.app_ui.remove_var(name)
    }

    update_vars() {
        const var_names = this.app_ui.get_var_names()

        for (let name of var_names) {
            this.update_var(name)
        }
    }

    update_var(name: string) {
        const var_state = this.interpreter.search_var(name)

        if (var_state == VarState.ExistsInit) {
            const bv = this.interpreter.export_var(name)
            this.app_ui.update_var(name, bv)
        }
    }

    add_var(name: string) {
        const var_state = this.interpreter.search_var(name)
        if (var_state == VarState.ExistsInit || var_state == VarState.ExistsNotInit) {
            const bv = this.interpreter.export_var(name)
            if (var_state == VarState.ExistsInit) {
                if (bv.type == 'scalar') {
                    this.app_ui.add_var(name, true, true, bv)
                }
                else {
                    this.app_ui.add_var(name, true, true, bv)
                }
            }
            else {
                if (bv.type == 'scalar') {
                    this.app_ui.add_var(name, true, false, bv)
                }
                else {
                    this.app_ui.add_var(name, true, false, bv)
                }
            }
        }
        else if (var_state == VarState.ExistsOutOfScope) {
            // por ahora, mostrar un mensaje diciendo que esta fuera de ambito
            this.app_ui.add_inspection_message(name)
        }
        else {
            this.app_ui.add_inspection_message(name)
        }
    }

    interpreter_action(a: InterpreterStatementInfo | InterpreterRead | InterpreterWrite) {
        switch (a.kind) {
            case 'action':
                switch (a.action) {
                    case 'read':
                        this.read()
                        break
                    case 'write':
                        this.write(a.value)
                        break
                }
                break
            case 'info':
                this.move_cursor(a.pos.line, a.pos.column)
                break
        }
    }

    resume_program() {
        if (this.by_steps) {
            this.step()
        }
        else {
            this.execute()
        }
    }

    step() {
        if (!this.interpreter.is_done()) {
            const output = this.interpreter.step()

            if (output.error == false) {
                this.interpreter_action(output.result)
            }
            else {
                this.do({ kind: ActionKind.StopExecutionWithError })
                this.do({ kind: ActionKind.ShowMessage, message: output.result })
            }
        }
        else {
            this.do({ kind: ActionKind.StopExecution })
        }
    }

    set_up_interpreter(program: S3.Program) {
        if (program != null) {
            this.interpreter.program = program
        }
    }

    move_cursor(line: number, column: number) {
        this.app_ui.move_cursor(line, column)
    }

    show_compiled_code(code: string) {
        if (code != null) {
            this.app_ui.code_panel.contents = code
        }
    }

    clear_output() {
        this.app_ui.clear_output()
    }

    clear_messages() {
        this.app_ui.clear_messages()
    }

    show_message(m: Errors.Base) {
        this.app_ui.show_message(m)
    }

    execute() {
        if (!this.interpreter.is_done()) {
            let output = this.interpreter.run()

            let done = false

            while (!done && output.error == false) {
                let action: InterpreterRead | InterpreterWrite;

                if (output.result.kind == 'action') {
                    action = output.result
                    this.interpreter_action(action)
                }

                if (!this.interpreter.is_done()) {
                    output = this.interpreter.run()
                }
                else {
                    done = true
                }
            }

            if (output.error == true) {
                this.do({ kind: ActionKind.ShowMessage, message: output.result })
                this.do({ kind: ActionKind.StopExecutionWithError })
            }
            else {
                this.do({ kind: ActionKind.StopExecution })
            }
        }
        else {
            this.do({ kind: ActionKind.StopExecution })
        }
    }

    compile(code: string): Failure<null> | Success<S3.Program> {
        const parsed_program = this.parser.parse(code)

        if (parsed_program.error == false) {
            const transformed_program = transform(parsed_program.result)

            if (transformed_program.error == false) {
                return transformed_program
            }
            else {
                const errors = transformed_program.result

                for (let error of errors) {
                    this.do({ kind: ActionKind.ShowMessage, message: error })
                }

                return { error: true, result: null }
            }
        }
        else {
            const errors = parsed_program.result

            for (let error of errors) {
                this.do({ kind: ActionKind.ShowMessage, message: error })
            }

            return { error: true, result: null }
        }
    }

    send_input(input: string) {
        this.interpreter.send(input)
    }

    write(v: Value) {
        this.app_ui.write(v)
    }

    read() {
        this.app_ui.read()
    }
}