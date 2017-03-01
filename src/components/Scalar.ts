import * as $ from 'jquery'
import { Action, ActionKind } from '../Actions'

export default class PanelToggler {
    private parent: JQuery
    private remove_button: JQuery
    private container: JQuery
    private value_element: JQuery
    name: string

    constructor(parent: JQuery, name: string, value: number | string) {
        this.parent = parent

        this.name = name

        this.container = $('<pre class="scalar flex-row"></pre>')

        const name_element = $(`<span class="scalar-name">${name}:</span>`)

        this.value_element = $(`<span class="value">${value}</span>`)

        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        this.remove_button.click(() => {
            this.container.remove()
        })

        this.container.append(name_element, this.value_element, this.remove_button)

        this.parent.append(this.container)
    }

    set_value(v: number | string) {
        this.value_element.replaceWith($(`<span class="value">${v}</span>`))
    }
}