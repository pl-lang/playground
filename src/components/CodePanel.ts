import * as $ from 'jquery'
import { Resizeable } from '../DragManager'

export default class CodePanel implements Resizeable {
    parent: JQuery
    container: JQuery
    private code: JQuery
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

        const pre_wrapper = $('<div style="overflow: auto;"></div>')

        this.code = $('<pre id="fr-pre"></pre>')

        pre_wrapper.append(this.code)

        this.container.append(pre_wrapper)
    }

    set contents(c: string) {
        this.code.text(c)
    }

    get contents(): string {
        return this.code.text()
    }
}