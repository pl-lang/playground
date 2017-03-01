import * as $ from 'jquery'
import { Dispatcher } from '../Controller'
import { Action, ActionKind } from '../Actions'
import { Resizeable } from '../DragManager'
import Prompt from './Prompt'
import Scalar from './Scalar'
import Vector from './Vector'

type Cell = { index: number, value: number | boolean | string }

export default class InspectionPanel implements Resizeable {
    private dispatcher: Dispatcher
    private parent: JQuery
    private body: JQuery
    private prompt: Prompt
    private add_button: JQuery
    private var_elements: (Scalar | Vector)[]
    container_index: number
    panel_index: number
    container: JQuery

    constructor(parent: JQuery, dispatcher: Dispatcher) {
        this.parent = parent
        this.dispatcher = dispatcher

        this.var_elements = []

        this.container = $('<div id="inspection-panel" class="flex-col"></div>')

        const bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-search">')
        const title = $('<span class="title">VARIABLES</span>')
        const add_button = $('<button class="blue-button icon-button"><span class="button-icon octicon octicon-plus"></span></button>')

        add_button.click(() => {
            this.prompt = new Prompt(this.body, this.dispatcher, 'varname')
        })

        this.add_button = add_button

        add_button.hide()

        bar.append(icon).append(title).append(add_button)

        this.container.append(bar)

        this.body = $('<div id="inspection-panel-body" class="flex-col"></div>')

        this.container.append(this.body)
    }

    clear() {
        this.body.empty()
        this.var_elements = []
    }

    hide_button() {
        this.add_button.hide()
    }

    show_button() {
        this.add_button.show()
    }

    add_var(name: string, boxed_value: { type: 'scalar', value: number | string | boolean } | { type: 'vector', cells: Cell[] }, found: boolean) {
        if (boxed_value.type == 'scalar') {
            const new_var = new Scalar(this.body, name, boxed_value.value, found)
            this.var_elements.push(new_var)
        }
        else {
            const new_var = new Vector(this.body, name, boxed_value.cells, found)
            this.var_elements.push(new_var)
        }
    }

    /**
     * get_var_names
     * retorna una lista de los nombres de las variables que estan siendo inspeccion
     */
    get_var_names(): string[] {
        return this.var_elements.map(s => s.name)
    }

    update_var(name: string, boxed_value: { type: 'scalar', value: number | string | boolean } | { type: 'vector', cells: Cell[] }) {
        const variable = this.find(name)

        if (variable instanceof Scalar) {
            variable.set_value(boxed_value as { type: 'scalar', value: number | string | boolean })
        }
        else {
            variable.update_values(boxed_value as { type: 'vector', cells: Cell[] })
        }
    }

    private find(name: string): Scalar | Vector {
        for (let i = 0; i < this.var_elements.length; i++) {
            if (this.var_elements[i].name == name) {
                return this.var_elements[i]
            }
        }
    }
}