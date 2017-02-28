import OutputPanel from './components/OutputPanel'
import EditorPanel from './components/EditorPanel'
import CodePanel from './components/CodePanel'
import { DragManager } from './DragManager'
import { Dispatcher } from './Controller'
import { Errors, Value } from 'interprete-pl'
import * as $ from 'jquery'

export interface AppOptions {
    debug?: boolean
}

const default_options: AppOptions = {
    debug: false
}

export default class AppUI {
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
        this.editor_panel = new EditorPanel(this.container, d, { debug: this.options.debug, links: !this.options.debug })

        if (this.options.debug) {
            this.add_panel(this.editor_panel.container, 0, { fixed: true, length: 50})

            this.code_panel = new CodePanel(this.container)

            this.add_panel(this.code_panel.container, 0)

            this.output_panel = new OutputPanel(this.container, this.dispatcher)

            this.add_panel(this.output_panel.container, 0)
        }
        else {
            // agregar panel de codigo
            this.add_panel(this.editor_panel.container, 0, { fixed: true, length: 60})

            // cuando debug es falso el panel de codigo compilado no se muestra
            this.code_panel = null

            this.output_panel = new OutputPanel(this.container, this.dispatcher)

            this.add_panel(this.output_panel.container, 0)
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

    add_panel(element: JQuery, container_index: number, options?: { fixed: boolean, length: number }) {
        if (this.dm.ui_panel_containers[container_index].panels.length >= 1) {
            const handle = $(`<div id="handle${this.handles.length + 1}" class="handle"></div>`)
            this.dm.add_handle(container_index, handle)
            this.handles.push(handle)
            this.container.append(handle)
        }

        this.dm.add_ui_panel(container_index, element, options)

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

    move_cursor(line: number, column: number) {
        this.editor_panel.move_cursor(line, column)
    }

    focus_editor() {
        this.editor_panel.focus_editor()
    }

    show_step_controls() {
        this.output_panel.show_controls()
    }

    hide_step_controls() {
        this.output_panel.hide_controls()
    }

    disable_buttons() {
        this.editor_panel.disable_buttons()
    }

    enable_buttons() {
        this.editor_panel.enable_buttons()
    }
}