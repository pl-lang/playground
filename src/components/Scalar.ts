import * as $ from 'jquery'
import { Action, ActionKind } from '../Actions'

export default class Scalar {
    private parent: JQuery
    private remove_button: JQuery
    private container: JQuery
    private value_element: JQuery
    private value: number | boolean | string
    name: string

    constructor(parent: JQuery, name: string, value: number | boolean | string, var_found: boolean) {
        this.parent = parent

        this.name = name

        this.container = $('<pre class="scalar flex-row"></pre>')

        const name_element = $(`<span class="scalar-name">${name}:</span>`)

        if (!var_found) {
            this.value_element = $(`<span class="value italic">No existe o no esta en ámbito</span>`)
            this.value = null
        }
        else if (value) {
            this.value_element = $(`<span class="value">${value}</span>`)
            this.value = value
        }
        else {
            this.value_element = $(`<span class="value italic">Aun no ha sido inicializada</span>`)
            this.value = null
        }

        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        this.remove_button.click(() => {
            this.container.remove()
        })

        this.container.append(name_element, this.value_element, this.remove_button)

        this.parent.append(this.container)
    }

    set_value(vb: { type: 'scalar', value: number | string | boolean }) {
        if (vb.value != this.value) {
            this.value_element.text(vb.value)
            this.value = vb.value
            this.value_element.removeClass('italic')
        }
    }
}