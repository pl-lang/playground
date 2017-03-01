import * as $ from 'jquery'
import { Dispatcher } from '../Controller'
import { Action, ActionKind } from '../Actions'
import { Resizeable } from '../DragManager'
import Prompt from './Prompt'

export default class PanelToggler implements Resizeable {
    private dispatcher: Dispatcher
    private parent: JQuery
    private body: JQuery
    private prompt: Prompt
    private add_button: JQuery
    container_index: number
    panel_index: number
    container: JQuery

    constructor(parent: JQuery, dispatcher: Dispatcher) {
        this.parent = parent
        this.dispatcher = dispatcher

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
    }

    hide_button() {
        this.add_button.hide()
    }

    show_button() {
        this.add_button.show()
    }
}