import * as $ from 'jquery'
import Window from './Window'
import { Dispatcher } from '../app.dev'
import { Action, ActionKind } from '../Actions'
import { Value } from 'interprete-pl'

export default class {
    parent: JQuery
    container: JQuery
    private output: Window
    private dispatcher: Dispatcher
    private bar: JQuery
    private step_button: JQuery
    private stop_button: JQuery

    constructor(container: JQuery, d: Dispatcher) {
        this.parent = container
        this.dispatcher = d

        this.container = $('<div class="output_container"></div>')

        const bar = this.create_title_bar()

        this.bar = bar

        this.step_button.click(() => { this.dispatcher.dispatch({ kind: ActionKind.Step }) })
        this.stop_button.click(() => { this.dispatcher.dispatch({ kind: ActionKind.StopExecutionUser }) })

        const output_container = $('<div class="output"></div>')

        this.output = new Window(output_container, this.dispatcher)

        this.container.append(bar).append(output_container)
    }

    create_title_bar() {
        const bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-terminal"></span>')
        const title = $('<span class="title">SALIDA</span>')

        this.step_button = $('<button class="green-button icon-button"><span class="button-icon octicon octicon-triangle-right"></span></button>')
        this.stop_button = $('<button class="red-button icon-button"><span class="button-icon octicon octicon-primitive-square"></span></button>')

        bar.append(icon, title, this.step_button, this.stop_button)

        this.hide_controls()
        
        return bar
    }

    show_controls() {
        this.step_button.show()
        this.stop_button.show()
    }

    hide_controls() {
        this.step_button.hide()
        this.stop_button.hide()
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