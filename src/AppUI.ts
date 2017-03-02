import OutputPanel from './components/OutputPanel'
import EditorPanel from './components/EditorPanel'
import CodePanel from './components/CodePanel'
import PanelToggler from './components/PanelToggler'
import InspectionPanel from './components/InspectionPanel'
import { DragManager, Resizeable } from './DragManager'
import { Dispatcher } from './Controller'
import { Errors, Value, VarInfo, BoxedValue } from 'interprete-pl'
import * as $ from 'jquery'

export interface AppOptions {
    debug?: boolean
}

const default_options: AppOptions = {
    debug: false
}

type Cell = { index: number, value: number | boolean | string }

export default class AppUI {
    container: JQuery
    panel_container: JQuery
    parent: JQuery
    private editor_panel: EditorPanel
    private output_panel: OutputPanel
    private inspection_panel: InspectionPanel
    private dispatcher: Dispatcher
    code_panel: CodePanel
    private toggler: PanelToggler
    options: AppOptions
    dm: DragManager
    handles: JQuery[]

    constructor(parent: JQuery, container: JQuery, d: Dispatcher, options?: AppOptions) {
        // aplicar la configuracion

        if (options) {
            this.options = { ...default_options, ...options }
        }
        else {
            this.options = default_options
        }

        this.parent = parent

        this.dispatcher = d

        this.handles = []

        this.container = $('<div id="app_container" class="flex-col"></div>')

        this.panel_container = $('<div id="panels" class="flex-row"></div>')

        this.toggler = new PanelToggler(this.container, this.dispatcher, this.options.debug)

        this.container.append(this.toggler.container)

        this.container.append(this.panel_container)

        this.parent.append(this.container)

        this.dm = new DragManager()

        this.dm.add_ui_container(this.panel_container, 'horizontal')

        this.panel_container.resize(() => {
            this.dm.set_container_dimensions(0, this.panel_container.width(), this.panel_container.height())
        })

        // crear los paneles necesarios
        this.editor_panel = new EditorPanel(this.panel_container, d, { debug: this.options.debug })

        if (this.options.debug) {
            this.add_panel(this.editor_panel, 0)
            this.toggler.add_panel(this.editor_panel, false, 'pencil')

            this.code_panel = new CodePanel(this.panel_container)

            this.add_panel(this.code_panel, 0)
            this.toggler.add_panel(this.code_panel, false, 'gear')

            this.inspection_panel = new InspectionPanel(this.panel_container, this.dispatcher)

            this.add_panel(this.inspection_panel, 0)
            this.toggler.add_panel(this.inspection_panel, false, 'search')

            this.output_panel = new OutputPanel(this.panel_container, this.dispatcher)

            this.add_panel(this.output_panel, 0)
            this.toggler.add_panel(this.output_panel, false, 'terminal')
        }
        else {
            // agregar panel de codigo
            this.add_panel(this.editor_panel, 0)
            this.toggler.add_panel(this.editor_panel, false, 'pencil')

            // cuando debug es falso el panel de codigo compilado no se muestra
            this.code_panel = null

            this.inspection_panel = new InspectionPanel(this.panel_container, this.dispatcher)

            this.add_panel(this.inspection_panel, 0)
            this.toggler.add_panel(this.inspection_panel, false, 'search')

            this.output_panel = new OutputPanel(this.panel_container, this.dispatcher)
            this.add_panel(this.output_panel, 0)
            this.toggler.add_panel(this.output_panel, false, 'terminal')
        }

        this.toggler.add_link(`https://github.com/pl-lang/jsplint/wiki/Sintaxis/`, 'question')
        this.toggler.add_link(`https://github.com/pl-lang/playground/`, 'mark-github')

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

    add_panel(element: Resizeable, container_index: number, options?: { fixed: boolean, length: number }) {
        if (this.dm.ui_panel_containers[container_index].panels.length >= 1) {
            // const handle = $(`<div id="handle${this.handles.length + 1}" class="handle"></div>`)
            // this.dm.add_handle(container_index, handle)
            // this.handles.push(handle)
            // this.panel_container.append(handle)
        }

        this.dm.add_ui_panel(container_index, element, options)

        this.panel_container.append(element.container)
    }

    toggle_panel(container_index: number,  panel_index: number) {
        this.dm.toggle_ui_panel(container_index, panel_index)
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
        this.inspection_panel.show_button()
    }

    hide_step_controls() {
        this.output_panel.hide_controls()
        this.inspection_panel.hide_button()
    }

    disable_buttons() {
        this.editor_panel.disable_buttons()
    }

    enable_buttons() {
        this.editor_panel.enable_buttons()
    }

    add_var(name: string, in_scope: boolean, init: boolean, var_info: VarInfo, value: BoxedValue) {
        this.inspection_panel.add_var(name, in_scope, init, var_info, value)
    }

    get_var_names(): string[] {
        return this.inspection_panel.get_var_names()
    }

    update_var(name: string, values: BoxedValue) {
        return this.inspection_panel.update_var(name, values)
    }

    clear_vars() {
        this.inspection_panel.clear()
    }

    remove_var(name: string) {
        this.inspection_panel.remove_var(name)
    }

    add_inspection_message(name: string) {
        this.inspection_panel.add_message(name)
    }

    remove_msg(name: string) {
        this.inspection_panel.remove_msg(name)
    }
}