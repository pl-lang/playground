import * as CodeMirror from 'codemirror'
import * as $ from 'jquery'
import { Parser, Interpreter, transform, fr_writer, Errors, Value, Failure, Success, S3 } from 'interprete-pl'
import OutputPanel from './components/OutputPanel'
import EditorPanel from './components/EditorPanel'
import CodePanel from './components/CodePanel'
import { DragManager } from './DragManager'
import { Action, ActionKind } from './Actions'

export class Dispatcher {
    controller: Controller

    constructor(c: Controller) {
        this.controller = c
    }

    dispatch(a: Action) {
        this.controller.do(a)
    }
}

export interface AppOptions {
    debug?: boolean
}

const default_options: AppOptions = {
    debug: false
}

class AppUI {
    container: JQuery
    parent: JQuery
    private editor_panel: EditorPanel
    private output_panel: OutputPanel
    private dispatcher: Dispatcher
    code_panel: CodePanel
    options: AppOptions
    dm: DragManager
    handles: JQuery[]

    constructor(parent: JQuery, container: JQuery, d: Dispatcher, options?: AppOptions) {
        this.parent = parent

        this.dispatcher = d

        this.handles = []

        this.container = $('<div id="app" class="flex-row"></div>')

        this.parent.append(this.container)

        // aplicar la configuracion

        if (options) {
            this.options = { ...default_options, ...options }
        }
        else {
            this.options = default_options
        }

        this.dm = new DragManager()

        this.dm.add_ui_container(this.container, 'horizontal')

        // crear los paneles necesarios
        this.editor_panel = new EditorPanel(this.container, d, { debug: this.options.debug, links: false })

        if (this.options.debug) {
            this.add_panel(this.editor_panel.container, 0, 0, 50)

            this.code_panel = new CodePanel(this.container)

            this.add_panel(this.code_panel.container, 0, 1, 25)

            this.output_panel = new OutputPanel(this.container, this.dispatcher)

            this.add_panel(this.output_panel.container, 0, 2, 25)
        }
        else {
            this.code_panel = null

            // agregar panel de codigo
            this.add_panel(this.editor_panel.container, 0, 0, 60)

            this.output_panel = new OutputPanel(this.container, this.dispatcher)

            this.add_panel(this.output_panel.container, 0, 2, 40)
        }

        $(document).mouseup(() => {
            if (this.dm.is_grabbed) {
                this.dm.is_grabbed = false
                this.dm.grabbed_handle = null
            }
        })

        $(document).mousemove(m => {
            if (this.dm.is_grabbed) {
                const pos = this.dm.grabbed_handle.element.position()

                this.dm.drag_handle(this.dm.grabbed_handle, { x: pos.left, y: pos.top }, { x: m.pageX, y: m.pageY })
            }
        })

        this.editor_panel.refresh()
    }

    add_panel(element: JQuery, container_index: number, panel_index: number, panel_width: number) {
        if (this.dm.ui_panel_containers[container_index].panels.length >= 1) {
            const handle = $(`<div id="handle${this.handles.length + 1}" class="handle"></div>`)
            this.dm.add_handle(container_index, handle)
            this.handles.push(handle)
            this.container.append(handle)
        }
        
        this.dm.add_ui_panel(container_index, panel_index, panel_width, element)

        this.container.append(element)
    }

    clear_messages() {
        this.editor_panel.message_panel.clear()
        this.editor_panel.status_bar.error_count = 0
    }

    show_message(message: Errors.Base) {
        this.editor_panel.message_panel.add_message(message)
        this.editor_panel.status_bar.error_count += 1
    }

    get_editor_contents(): string {
        return this.editor_panel.editor_contents
    }

    write(v: Value) {
        this.output_panel.write(v)
    }

    read() {
        this.output_panel.read()
    }

    clear_output() {
        this.output_panel.clear()
    }

    move_cursor(line: number, column: number, focus?: boolean) {
        if (focus) {
            this.editor_panel.focus_editor()
        }

        this.editor_panel.move_cursor(line, column)
    }
}

export class Controller {
    private app_ui: AppUI
    private interpreter: Interpreter
    private parser: Parser
    private program_running: boolean

    constructor(container: JQuery, debug: boolean) {
        const action_dispatcher = new Dispatcher(this)

        this.program_running = false

        this.app_ui = new AppUI($('body'), container, action_dispatcher, { debug: debug })

        this.interpreter = new Interpreter()

        this.interpreter.on('write', v => this.write(v))
        this.interpreter.on('read', () => { this.read() })
        this.interpreter.on('program-started', () => { this.program_running = true })
        this.interpreter.on('program-finished', () => { this.program_running = false })

        this.parser = new Parser()
    }

    do(a: Action) {
        switch (a.kind) {
            case ActionKind.Execute:
                this.do({ kind: ActionKind.ClearMessages })
                if (!this.program_running) {
                    const { result } = this.compile(a.code)
                    this.do({ kind: ActionKind.SetUpInterpreter, program: result })
                    if (result != null) {
                        this.do({ kind: ActionKind.ShowCompiledCode, code: fr_writer(result) })
                    }
                }
                this.execute()
                break
            case ActionKind.Step:
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
                break
            case ActionKind.Write:
                this.write(a.value)
                break
            case ActionKind.ClearOutput:
                this.clear_output()
                break
            case ActionKind.ShowCompiledCode:
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })
                {
                    const { result } = this.compile(a.code)
                    if (result != null) {
                        this.show_compiled_code(fr_writer(result))
                    }
                }
                break
            case ActionKind.SetUpInterpreter:
                this.set_up_interpreter(a.program)
                break
        }
    }

    set_up_interpreter(program: S3.Program) {
        if (program != null) {
            this.interpreter.program = program
        }
    }

    move_cursor(line: number, column: number) {
        this.app_ui.move_cursor(line, column, true)
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
        // si esto es verdadero...
        if (this.program_running) {
            // ...se esta resumiendo un programa que fue pausado para leer algo
            this.interpreter.run()
        }
        else {
            // ...y si no, se esta por ejecutar un programa por primera vez
            this.do({ kind: ActionKind.ClearOutput })
            this.interpreter.run()
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
        this.do({ kind: ActionKind.Execute, code: '' })
    }

    write(v: Value) {
        this.app_ui.write(v)
    }

    read() {
        this.app_ui.read()
    }
}

const app = new Controller($('body'), true)