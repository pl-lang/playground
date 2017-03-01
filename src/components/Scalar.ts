import * as $ from 'jquery'
import { Action, ActionKind } from '../Actions'

export default class PanelToggler {
    private parent: JQuery
    private remove_button: JQuery
    private container: JQuery

    constructor(parent: JQuery, name: string, value: number | string) {
        this.parent = parent

        this.container = $('<pre class="scalar flex-row"></pre>')

        const name_element = $(`<span class="scalar-name">${name}:</span>`)

        const value_element = $(`<span class="value">${value}</span>`)

        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        this.remove_button.click(() => {
            this.container.remove()
        })

        this.container.append(name_element, value_element, this.remove_button)

        this.parent.append(this.container)
    }
}