import * as $ from 'jquery'
import { Dispatcher } from '../Controller'
import { Action, ActionKind } from '../Actions'

export default class ButtonBar {
    private run_button: JQuery
    private compile_button: JQuery
    private step_button: JQuery
    private micro_step_button: JQuery

    private parent: JQuery

    container: JQuery

    constructor(parent: JQuery, debug: boolean) {
        this.parent = parent

        this.container = $('<div style="width: 100%;"></div>')

        const bar = $('<div class="bar bar-bottom-border bar-left-border flex-row center-align"></div>')

        // const icon = $('<span style="margin-left:10px" class="octicon octicon-pencil"></span>')

        // const title = $('<span class="title">EDITOR</span>')

        this.run_button = $('<button class="green-button"><span class="button-label bold">Compilar y ejecutar</span><span></button>')
    
        bar.append(this.run_button)

        if (debug) {
            this.compile_button = $('<button id="compilar" class="blue-button"><span class="button-label">Compilar</span><span></button>')

            bar.append(this.compile_button)
        }
        else {
            this.compile_button = null
        }

        this.step_button = $('<button class="green-button"><span class="button-label bold">Ejecutar paso a paso</span><span></button>')

        bar.append(this.step_button)

        if (debug) {
            const etiqueta = 'Ejecutar instruccion a instruccion'

            this.micro_step_button = $(`<button class="green-button"><span class="button-label bold">${etiqueta}</span><span></button>`)

            bar.append(this.micro_step_button)
        }
        else {
            this.micro_step_button = null
        }

        this.container.append(bar)
    }

    registrarCallbackEjecutar(f:  () => void) {
        this.run_button.click(f)
    }

    registrarCallbackEjecutarPaso(f: () => void) {
        this.step_button.click(f)
    }

    registrarCallbackCompilar(f: () => void) {
        if (this.compile_button != null) {
            this.compile_button.click(f)
        }
    }

    registrarCallbackMicroPaso(f: () => void) {
        if (this.micro_step_button != null) {
            this.micro_step_button.click(f)
        }
    }

    desactivarBotones() {
        this.run_button.prop('disabled', true)
        this.step_button.prop('disabled', true)

        if (this.compile_button) {
            this.compile_button.prop('disabled', true)
            this.micro_step_button.prop('disabled', true)
        }
    }

    activarBotones() {
        this.run_button.prop('disabled', false)
        this.step_button.prop('disabled', false)

        if (this.compile_button) {
            this.compile_button.prop('disabled', false)
            this.micro_step_button.prop('disabled', false)
        }
    }
} 