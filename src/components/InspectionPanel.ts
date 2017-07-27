import * as $ from 'jquery'
import { Dispatcher } from '../Controller'
import { Action, ActionKind } from '../Actions'
import { Resizeable } from '../DragManager'
import Prompt from './Prompt'
import ExpresionInspeccionada from './ExpresionInspeccionada'
import InspectionMessage from './InspectionMessage'
import { TipoValorInspeccionado, ValorExpresionInspeccionada } from 'interprete-pl'

export default class InspectionPanel implements Resizeable {
    private dispatcher: Dispatcher
    private parent: JQuery
    private body: JQuery
    private prompt: Prompt
    private add_button: JQuery
    private var_elements: ExpresionInspeccionada[]
    container_index: number
    panel_index: number
    container: JQuery
    private expresionesInspeccionadas: string[]
    private ultimoId: number

    constructor(parent: JQuery, dispatcher: Dispatcher) {
        this.parent = parent
        this.dispatcher = dispatcher

        this.ultimoId = 0

        this.expresionesInspeccionadas = []

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

    agregarExpresion(expresion: string): number {
        const id = this.ultimoId

        this.expresionesInspeccionadas.push(expresion)

        const nuevaExpresion = new ExpresionInspeccionada(this.body, expresion, this.dispatcher, Number(this.ultimoId))

        this.var_elements.push(nuevaExpresion)

        this.ultimoId++

        return id
    }

    existe(cadena: string, arreglo: string[]): boolean {
        for (let c of arreglo) {
            if (cadena == c) {
                return true
            }
        }
        return false
    }

    actualizarValorInspeccion(indice: number, valor: ValorExpresionInspeccionada) {
        const elemento = this.var_elements[indice]

        if (valor.tipo == TipoValorInspeccionado.ESCALAR) {
            elemento.establecerValorEscalar(valor.valor)
        }
        else {
            elemento.establecerValorVectorial(valor.celdas)
        }
    }

    mostrarMensajeError(indice: number) {
        const elemento = this.var_elements[indice]

        elemento.mostrarMensajeError()
    }

    mostrarMensajeInicialInspeccion(indice: number) {
        const elemento = this.var_elements[indice]

        elemento.mostrarMensajeInicial()
    }

    private find(id: number): ExpresionInspeccionada {
        for (let i = 0; i < this.var_elements.length; i++) {
            const v_element = this.var_elements[i]
            if (v_element.id == id) {
                return v_element
            }
        }
    }

    remove_var(id: number) {
        const removed_var = this.find(id)
        this.var_elements = this.var_elements.filter(v => v.id != id)
        removed_var.container.empty()
        removed_var.container.remove()
    }
}