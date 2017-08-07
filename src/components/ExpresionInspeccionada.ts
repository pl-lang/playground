import * as $ from 'jquery'
import { ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'
import { ValorCeldaArreglo } from 'interprete-pl'

export default class ExpresionInspeccionada {
    private parent: JQuery
    private remove_button: JQuery
    private value_element: JQuery
    private cells_container: JQuery
    private cell_togler: JQuery
    private cells_displayed: boolean
    private dispatcher: Dispatcher
    container: JQuery
    id: number

    constructor(parent: JQuery, expresion: string, dispatcher: Dispatcher, id: number) {
        this.parent = parent

        this.id = id

        this.dispatcher = dispatcher

        this.container = $('<pre class="scalar flex-column"></pre>')

        const name_row = $('<div class="flex-row"></div>')

        this.cell_togler = $('<button class="simple-button-icon toggle-button octicon octicon-triangle-down"></button>')

        this.cells_container = $('<div class="scalar flex-col"></div>')

        this.cell_togler.click(() => {
            this.cell_togler.toggleClass('octicon-triangle-down')
            this.cell_togler.toggleClass('octicon-triangle-right')
            this.cells_container.toggle()
            this.cells_displayed = !this.cells_displayed
        })

        this.cells_displayed = true

        this.cell_togler.hide()

        const name_element = $(`<span class="scalar-name">${expresion}:</span>`)

        this.value_element = $(`<span class="value italic">Esta expresion aún no ha sido evaluada</span>`)

        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        this.remove_button.click(() => {
            this.dispatcher.dispatch({ kind: ActionKind.RemoveVarFromInspection, id: this.id })
        })

        name_row.append(this.cell_togler, name_element, this.value_element, this.remove_button)

        this.container.append(name_row, this.cells_container)

        this.parent.append(this.container)
    }

    establecerValorEscalar(valor: number | string | boolean) {
        this.value_element.text(valor)
        this.value_element.removeClass('italic')
    }

    establecerValorVectorial(celdas: ValorCeldaArreglo[]) {
        this.value_element.text('')

        this.cell_togler.show()

        this.cells_container.empty()

        for (let celda of celdas) {
            this.cells_container.append(this.crearElementoCelda(celda))
        }
    }

    crearElementoCelda(celda: ValorCeldaArreglo): JQuery {
        const element_container = $('<pre class="vector-cell flex-row"></pre>')
        const index_element = $(`<span class="scalar-name">${this.aCadena(celda.indice)}:</span>`)
        const value_element = $(`<span class="value">${celda.valor}</span>`)

        element_container.append(index_element, value_element)

        return element_container
    }

    aCadena(arr: number[]) {
        let cadena = '['
        for (let i = 0, l = arr.length; i < l; i++) {
            cadena += arr[i].toString()

            if (i == l - 1) {
                cadena += ']'
            }
            else {
                cadena += ', '
            }
        }

        return cadena
    }

    mostrarMensajeError() {
        this.value_element.addClass('italic')
        this.value_element.text('Hubo un error al inspeccionar esta expresión')
        if (this.cells_displayed) {
            this.cell_togler.click()
        }
        this.cell_togler.hide()
        this.cells_container.empty()
    }

    mostrarMensajeInicial() {
        this.value_element.addClass('italic')
        this.value_element.text('Esta expresion aún no ha sido evaluada')
        if (this.cells_displayed) {
            this.cell_togler.click()
        }
        this.cell_togler.hide()
        this.cells_container.empty()
    }
}