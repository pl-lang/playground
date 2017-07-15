import ButtonBar from './components/ButtonBar'
import { Action, ActionKind } from './Actions'
import OutputPanel from './components/OutputPanel'
import EditorPanel from './components/EditorPanel'
import CodePanel from './components/CodePanel'
import PanelToggler from './components/PanelToggler'
import InspectionPanel from './components/InspectionPanel'
import { DragManager, Resizeable } from './DragManager'
import { Dispatcher } from './Controller'
import { Errors, Value, VarInfo, BoxedValue, VarState } from 'interprete-pl'
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
    private button_bar: ButtonBar
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

        this.container = $('<div id="app_container" class="flex-row"></div>')

        const columna = $('<div class="flex-col" style="width: 100%;"></div>')

        this.button_bar = new ButtonBar(this.container, this.options.debug)

        columna.append(this.button_bar.container)

        this.panel_container = $('<div id="panels" class="flex-row"></div>')

        columna.append(this.panel_container)

        this.toggler = new PanelToggler(this.container, this.dispatcher, this.options.debug)

        this.container.append(this.toggler.container)

        this.container.append(columna)

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
            this.toggler.add_panel(this.editor_panel, false, 'pencil', 'Mostrar/ocultar el panel de edicion')

            this.code_panel = new CodePanel(this.panel_container)

            this.add_panel(this.code_panel, 0)
            this.toggler.add_panel(this.code_panel, false, 'gear', 'Mostrar/ocultar el panel de codigo compilado')

            this.inspection_panel = new InspectionPanel(this.panel_container, this.dispatcher)

            this.add_panel(this.inspection_panel, 0)
            this.toggler.add_panel(this.inspection_panel, false, 'search', 'Mostrar/ocultar el panel de inspeccion')

            this.output_panel = new OutputPanel(this.panel_container, this.dispatcher)

            this.add_panel(this.output_panel, 0)
            this.toggler.add_panel(this.output_panel, false, 'terminal', 'Mostrar/ocultar el panel de salida')
        }
        else {
            // agregar panel de codigo
            this.add_panel(this.editor_panel, 0)
            this.toggler.add_panel(this.editor_panel, false, 'pencil', 'Mostrar/ocultar el panel de edicion')

            // cuando debug es falso el panel de codigo compilado no se muestra
            this.code_panel = null

            this.inspection_panel = new InspectionPanel(this.panel_container, this.dispatcher)

            this.add_panel(this.inspection_panel, 0)
            this.toggler.add_panel(this.inspection_panel, false, 'search', 'Mostrar/ocultar el panel de inspeccion')

            this.output_panel = new OutputPanel(this.panel_container, this.dispatcher)
            this.add_panel(this.output_panel, 0)
            this.toggler.add_panel(this.output_panel, false, 'terminal', 'Mostrar/ocultar el panel de salida')
        }

        this.toggler.add_link(`https://github.com/pl-lang/jsplint/wiki/Sintaxis/`, 'question', 'Abrir pestaña con ayuda sobre la sintaxis y el lenguaje')
        this.toggler.add_link(`https://github.com/pl-lang/playground/`, 'mark-github', 'Ir al repositorio en Github de esta aplicación')

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

        this.button_bar.registrarCallbackEjecutar(() => {
            this.dispatcher.dispatch({ kind: ActionKind.Execute, code: this.editor_panel.editor_contents })
        })

        this.button_bar.registrarCallbackEjecutarPaso(() => {
            this.dispatcher.dispatch({ kind: ActionKind.ExecuteBySteps, code: this.editor_panel.editor_contents })
        })

        this.button_bar.registrarCallbackCompilar(() => {
            this.dispatcher.dispatch({ kind: ActionKind.CompileAndShow, code: this.editor_panel.editor_contents })
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

    highlight_instruction(inst: number) {
        this.code_panel.highlight(inst)
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
        this.button_bar.desactivarBotones()
    }

    enable_buttons() {
        this.button_bar.activarBotones()
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

    change_var_state(name: string, state: VarState.DoesntExist | VarState.ExistsNotInit | VarState.ExistsOutOfScope) {
        this.inspection_panel.change_var_state(name, state)
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