import * as $ from 'jquery'
import Window from './Window'
import { Dispatcher } from '../app.dev'
import { Value } from 'interprete-pl'

export default class {
    parent: JQuery
    container: JQuery
    private output: Window
    private dispatcher: Dispatcher

    constructor(container: JQuery, d: Dispatcher) {
        this.parent = container
        this.dispatcher = d

        this.container = $('<div class="output_container"></div>')

        const bar = $('<div class="bar bar-bottom-border flex-row center-align">')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-terminal"></span>')
        const title = $('<span class="title">SALIDA</span>')

        bar.append(icon).append(title)

        const output_container = $('<div class="output"></div>')

        this.output = new Window(output_container, this.dispatcher)

        this.container.append(bar).append(output_container)
    }

    write(v: Value) {
        this.output.write(v)
    }

    read() {
        this.output.read()
    }

    clear() {
        this.output.clear()
    }
}