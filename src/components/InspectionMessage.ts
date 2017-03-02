import * as $ from 'jquery'
import { ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'

export default class InspectionMessage {
    private parent: JQuery
    private remove_button: JQuery
    private dispatcher: Dispatcher
    container: JQuery
    name: string

    constructor(parent: JQuery, name: string, dispatcher: Dispatcher) {
        this.parent = parent

        this.dispatcher = dispatcher

        this.name = name

        this.container = $('<pre class="scalar flex-row"></pre>')

        const name_element = $(`<span class="scalar-name">${name}:<span class="value italic">Esta variable no existe</span></span>`)

        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        this.remove_button.click(() => {
            this.dispatcher.dispatch({ kind: ActionKind.RemoveMsgFromInspection, name: this.name })
        })

        this.container.append(name_element, this.remove_button)

        this.parent.append(this.container)
    }
}