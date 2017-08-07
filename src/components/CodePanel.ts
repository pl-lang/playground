import * as $ from 'jquery'
import { Resizeable } from '../DragManager'

export default class CodePanel implements Resizeable {
    parent: JQuery
    container: JQuery
    private code: string
    private pre_wrapper: JQuery
    container_index: number
    panel_index: number

    constructor(parent: JQuery) {
        this.parent = parent

        this.container = $('<div id="fr-panel" class="flex-col"></div>')

        const bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-gear">')
        const title = $('<span class="title">PROGRAMA COMPILADO</span>')

        bar.append(icon).append(title)

        this.container.append(bar)

        this.pre_wrapper = $('<div style="overflow: auto;"></div>')

        this.container.append(this.pre_wrapper)
    }

    set contents(c: string) {
        this.pre_wrapper.empty()

        const lineas = c.split('\n')

        let resaltarPrimerLinea = true
        
        for (let linea of lineas) {
            if (linea.length > 0) {
                const elementoLinea = $(`<div><pre class="lineaCodigoCompilado">${linea}</pre></div>`)
                if (resaltarPrimerLinea) {
                    elementoLinea.addClass("highlighted")
                    resaltarPrimerLinea = false
                }
                this.pre_wrapper.append(elementoLinea)
            }
        }

        this.code = c
    }

    get contents(): string {
        return this.code
    }

    highlight(n: number) {
        this.pre_wrapper.children("div.highlighted").removeClass("highlighted")
        /**
         * El n + 1 se debe al funcionamiento del selector nth-child de CSS
         */
        this.pre_wrapper.children(`:nth-child(${n + 1})`).addClass("highlighted")
    }
}