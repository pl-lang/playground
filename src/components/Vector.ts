import * as $ from 'jquery'

type Cell = { index: number, value: number | boolean | string }

export default class Vector {
    private parent: JQuery
    private container: JQuery
    private cells_container: JQuery
    private cell_elements: { index_element: JQuery, value_element: JQuery }[]
    private cells: Cell[]
    name: string

    constructor(parent: JQuery, name: string, cells: Cell[], var_found: boolean) {
        this.parent = parent

        this.name = name

        this.container = $('<div class="scalar flex-col"></div>')

        const name_element = $(`<div class="vector flex-row"><span class="scalar-name">${name}:</span></div>`)

        const remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        remove_button.click(() => {
            this.container.remove()
        })

        
        this.cells_container = $('<div class="scalar flex-col"></div>')
        this.cell_elements = []
        this.cells = []

        if (!var_found) {
            const message = $(`<span class="value italic">No existe o no esta en ámbito</span>`)
            name_element.append(message, remove_button)
            this.container.append(name_element)
        }
        else if (cells && cells.length > 0) {
            name_element.append(remove_button)
            this.container.append(name_element)
            this.init_cells(cells)
        }
        else {
            const message = $(`<span class="value italic">Aun no ha sido inicializada</span>`)
            name_element.append(message, remove_button)
            this.container.append(name_element)
        }

        this.container.append(this.cells_container)
        this.parent.append(this.container)
    }

    init_cells(cells: Cell[]) {
        this.cell_elements = []

        for (let cell of cells) {
            const { container, index_element, value_element } = this.create_cell_element(cell.index + 1, cell.value)

            this.cell_elements.push({ index_element, value_element })

            this.cells_container.append(container)
        }

        this.cells = cells

        this.container.append(this.cells_container)
    }

    update_values(bv: { type: 'vector', cells: Cell[]}) {
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
}