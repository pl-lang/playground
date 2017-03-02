import * as $ from 'jquery'
import { ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'
import { VarState } from 'interprete-pl'

export default class Scalar {
    private parent: JQuery
    private remove_button: JQuery
    private value_element: JQuery
    private value: number | boolean | string
    private dispatcher: Dispatcher
    container: JQuery
    name: string

    constructor(parent: JQuery, name: string, in_scope: boolean, init: boolean, dispatcher: Dispatcher) {
        this.parent = parent

        this.dispatcher = dispatcher

        this.name = name

        this.container = $('<pre class="scalar flex-row"></pre>')

        const name_element = $(`<span class="scalar-name">${name}:</span>`)

        if (in_scope) {
            if (!init) {
                this.value = null
                this.value_element = $(`<span class="value italic">Aun no ha sido inicializada</span>`)
            }
        }
        else {
            this.value_element = $(`<span class="value italic">Esta variable no está en ámbito</span>`)
        }

        this.remove_button = $('<button class="simple-button-icon octicon octicon-x pull-right"></button>')

        this.remove_button.click(() => {
            this.dispatcher.dispatch({ kind: ActionKind.RemoveVarFromInspection, name: this.name })
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

    change_state(state: VarState.DoesntExist | VarState.ExistsNotInit | VarState.ExistsOutOfScope) {
        this.value_element.addClass('italic')
        this.value = null
        switch (state) {
            case VarState.DoesntExist:
                this.value_element.text('Esta variable no existe')
            break
            case VarState.ExistsNotInit:
                this.value_element.addClass('italic')
                this.value_element.text('Aun no ha sido inicializada')
            break
            case VarState.ExistsOutOfScope:
                this.value_element.addClass('italic')
                this.value_element.text('Esta variable no esta en ámbito')
            break
        }
    }
}