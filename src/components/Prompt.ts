import * as $ from 'jquery'
import { Action, ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'

export default class Prompt {
    private textarea: JQuery
    private distpatcher: Dispatcher

    constructor (readonly container: JQuery, d: Dispatcher) {
        this.textarea = $('<textarea id="prompt"></textarea>')
        this.distpatcher = d

        this.textarea.keydown(e => {
            if (e.keyCode == 13) {
                const input = this.textarea.val()
                this.close()
                this.distpatcher.dispatch({ kind: ActionKind.SendInput, input })
            }
        })

        this.container.append(this.textarea)
        this.textarea.focus()
    }

    close () {
        const new_line = $(`<div class="line"><span>&gt;${this.textarea.val()}</span></div>`)
        this.textarea.replaceWith(new_line)
        this.textarea = null
    }
}