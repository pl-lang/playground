import * as $ from 'jquery'
import Window from './Window'

export default class {
    output: Window
    parent: JQuery
    container: JQuery

    constructor(container: JQuery) {
        this.parent = container

        this.container = $('<div class="output_container"></div>')

        const bar = $('<div class="bar bar-bottom-border flex-row center-align">')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-terminal"></span>')
        const title = $('<span class="title">SALIDA</span>')

        bar.append(icon).append(title)

        const output_container = $('<div class="output"></div>')

        this.output = new Window(output_container)

        this.container.append(bar).append(output_container)

        this.parent.append(this.container)
    }
}