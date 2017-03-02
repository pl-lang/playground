import * as $ from 'jquery'
import { Dispatcher } from "../Controller";
import { ActionKind } from "../Actions";

type Cell = { index: number, value: number | boolean | string }

export default class Vector {
    private parent: JQuery
    private cells_container: JQuery
    private cell_elements: { index_element: JQuery, value_element: JQuery }[]
    private cells: Cell[]
    private dispatcher: Dispatcher
    private message: JQuery
    container: JQuery
    name: string

    constructor(parent: JQuery, name: string, in_scope: boolean, init: boolean, dispatcher: Dispatcher) {
        this.parent = parent

        this.dispatcher = dispatcher

        this.name = name

        this.container = $('<div class="vector flex-col"></div>')

        this.cells_container = $('<div class="scalar flex-col"></div>')

        const name_element = $(`<span class="scalar-name">${name}:</span>`)

        const name_row = $(`<div class="vector flex-row"></div>`)

        const toggle_cells_button = $('<button class="simple-button-icon toggle-button octicon octicon-triangle-down"></button>')

        toggle_cells_button.click(() => {
            toggle_cells_button.toggleClass('octicon-triangle-down')
            toggle_cells_button.toggleClass('octicon-triangle-right')
            this.cells_container.toggle()
        })

        name_row.append(toggle_cells_button, name_element)

        const remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        remove_button.click(() => {
            this.dispatcher.dispatch({ kind: ActionKind.RemoveVarFromInspection, name: this.name })
        })

        this.cell_elements = []
        this.cells = []

        if (in_scope) {
            if (!init) {
                this.message = $(`<span class="value italic">Aun no ha sido inicializada</span>`)
                name_row.append(this.message, remove_button)
                this.container.append(name_row)
            }
        }
        else {
            this.message = $(`<span class="value italic">Esta variable no está en ámbito</span>`)
            name_row.append(this.message, remove_button)
            this.container.append(name_row)
        }

        this.container.append(this.cells_container)
        this.parent.append(this.container)
    }

    update_values(bv: { type: 'vector', cells: Cell[]}) {
        this.message.hide()
        
        if (bv.cells.length > this.cells.length) {
            const diff = bv.cells.length - this.cells.length

            for (let i = 0; i < diff; i++) {
                const { container, index_element, value_element } = this.create_cell_element(i + this.cells.length + 1, '')
                this.cell_elements.push({ index_element, value_element })
                this.cells_container.append(container)
            }

            this.cells = bv.cells
        }


        for (let i = 0; i < bv.cells.length; i++) {
            const cell = bv.cells[i]
            const cell_element = this.cell_elements[i]
            if (cell.index.toString() != cell_element.index_element.text()) {
                cell_element.index_element.text(`${cell.index + 1}:`)
            }

            if (cell.value.toString() != cell_element.value_element.text()) {
                cell_element.value_element.text(cell.value.toString())
            }
        }
    }

    create_cell_element(index: number, value: number | boolean | string): { container: JQuery, index_element: JQuery, value_element: JQuery } {
        const element_container = $('<pre class="vector-cell flex-row"></pre>')
        const index_element = $(`<span class="scalar-name">${index}:</span>`)
        const value_element = $(`<span class="value">${value}</span>`)

        element_container.append(index_element, value_element)

        return { container: element_container, index_element, value_element }
    }

    out_of_scope() {
        this.message.text('Esta variable no esta en ámbito')
        this.message.show()
        this.cells = []
        this.cells_container.empty()
        this.cell_elements = []
    }
}