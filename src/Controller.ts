import { Interprete, programaCompiladoACadena, Accion, Errors, Value, Failure, Success, VarState } from 'interprete-pl'
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
    private interprete: Interprete
    private program_running: boolean
    private porPasos: boolean
    private debug: boolean

    constructor(container: JQuery, debug: boolean) {
        const action_dispatcher = new Dispatcher(this)

        this.debug = debug

        this.program_running = false
        this.porPasos = false

        this.app_ui = new AppUI($('body'), container, action_dispatcher, { debug: debug })

        this.interprete = new Interprete()
    }

    do(a: Action) {
        switch (a.kind) {
            case ActionKind.Execute:
                /**
                 * Limpiar interfaz
                 */
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })

                /**
                 * Si no hay ningun programa corriendo:
                 *  -   "Cargar" el programa en el interprete
                 *  -   Si hay errores mostrarlos.
                 *  -   Si no hay errores y si el modo debug esta activado mostrar el programa compilado
                 *  -   Si no hay errores desactivar los botones y ejecutar el programa.
                 */
                if (!this.program_running) {
                    this.porPasos = false
                    const reporteCompilacion = this.interprete.cargarPrograma(a.code)

                    if (reporteCompilacion.error == false) {
                        this.app_ui.clear_vars()
                        this.program_running = true

                        if (this.debug) {
                            this.do({ kind: ActionKind.ShowCompiledCode, code: programaCompiladoACadena(reporteCompilacion.result) })
                        }

                        this.do({ kind: ActionKind.DisableButtons })
                        this.execute()
                    }
                    else {
                        const errors = reporteCompilacion.result

                        for (let error of errors) {
                            this.do({ kind: ActionKind.ShowMessage, message: error })
                        }
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
            case ActionKind.CompileAndShow:
                {
                    this.do({ kind: ActionKind.ClearMessages })
                    this.do({ kind: ActionKind.ClearOutput })
                    const reporteCompilacion = this.interprete.cargarPrograma(a.code)
                    if (reporteCompilacion.error == false) {
                        this.do({ kind: ActionKind.ShowCompiledCode, code: programaCompiladoACadena(reporteCompilacion.result) })
                    }
                    else {
                        const errors = reporteCompilacion.result

                        for (let error of errors) {
                            this.do({ kind: ActionKind.ShowMessage, message: error })
                        }
                    }
                }
                break
            case ActionKind.ExecuteBySteps:
                // this.do({ kind: ActionKind.ClearMessages })
                // this.do({ kind: ActionKind.ClearOutput })
                // if (!this.program_running) {
                //     this.porPasos = true
                //     const compiled_program_maybe = this.compile(a.code)
                //     if (!compiled_program_maybe.error) {
                //         this.app_ui.show_step_controls()
                //         this.program_running = true
                //         const program = compiled_program_maybe.result
                //         this.do({ kind: ActionKind.SetUpInterpreter, program: program })
                //         if (this.debug) {
                //             this.do({ kind: ActionKind.ShowCompiledCode, code: fr_writer(program) })
                //         }
                //         this.do({ kind: ActionKind.DisableButtons })
                //         this.do({ kind: ActionKind.Step })
                //     }
                // }
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
        // const var_info = this.interprete.search_var(name)

        // if (var_info.state == VarState.ExistsInit) {
        //     const bv = this.interprete.export_var(name)
        //     this.app_ui.update_var(name, bv)
        // }
        // else {
        //     this.app_ui.change_var_state(name, var_info.state)
        // }
    }

    add_var(name: string) {
        // const var_info = this.interprete.search_var(name)
        // if (var_info.state == VarState.ExistsInit || var_info.state == VarState.ExistsNotInit) {
        //     const bv = this.interprete.export_var(name)
        //     if (var_info.state == VarState.ExistsInit) {
        //         this.app_ui.add_var(name, true, true, var_info, bv)
        //     }
        //     else {
        //         this.app_ui.add_var(name, true, false, var_info, bv)
        //     }
        // }
        // else if (var_info.state == VarState.ExistsOutOfScope) {
        //     this.app_ui.add_var(name, false, false, var_info, null)
        // }
        // else {
        //     this.app_ui.add_inspection_message(name)
        // }
    }

    resume_program() {
        if (this.porPasos) {
            this.step()
        }
        else {
            this.execute()
        }
    }

    step() {
        // if (!this.interprete.is_done()) {
        //     const output = this.interprete.step()

        //     if (output.error == false) {
        //         this.interpreter_action(output.result)
        //     }
        //     else {
        //         this.do({ kind: ActionKind.StopExecutionWithError })
        //         this.do({ kind: ActionKind.ShowMessage, message: output.result })
        //     }
        // }
        // else {
        //     this.do({ kind: ActionKind.StopExecution })
        // }
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
        if (!this.interprete.programaFinalizado()) {
            /**
             * Reporte de ejecucion.
             */
            let reporte = this.interprete.ejecutarHastaElFinal()

            let programaFinalizado = false

            while (!programaFinalizado && reporte.error == false) {
                let { accion, numeroLineaFuente, numeroInstruccion } = reporte.result

                switch (accion) {
                    case Accion.ESCRIBIR:
                        this.write(this.interprete.obtenerEscrituraPendiente())
                        break
                    case Accion.LEER:
                    case Accion.NADA:
                    break
                }

                this.move_cursor(numeroLineaFuente, 0)

                if (!this.interprete.programaFinalizado()) {
                    reporte = this.interprete.ejecutarHastaElFinal()
                }
                else {
                    programaFinalizado = true
                }
            }

            if (reporte.error == true) {
                this.do({ kind: ActionKind.ShowMessage, message: reporte.result })
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

    send_input(input: string) {
        this.interprete.enviarLectura(input)
    }

    write(v: Value) {
        this.app_ui.write(v)
    }

    read() {
        this.app_ui.read()
    }
}