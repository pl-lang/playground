import * as $ from 'jquery'
import { Action, ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'

const ENTER = 13
const ESC = 27

export default class Prompt {
    private textarea: JQuery
    private distpatcher: Dispatcher
    private mode: 'varname' | 'input'

    constructor (readonly container: JQuery, d: Dispatcher, mode: 'varname' | 'input') {
        this.mode = mode

        this.textarea = $(`<textarea class="prompt${mode == 'varname' ? ' input-border' : ''}"></textarea>`)

        this.distpatcher = d

        if (mode == 'varname') {
            this.textarea.keydown(e => {
                console.log(e.which, e.keyCode)
                if (e.which == ENTER) {
                    const name = this.textarea.val()
                    this.close()
                    this.distpatcher.dispatch({ kind: ActionKind.SendVarName, name })
                }
                else if (e.which == ESC) {
                    this.close()
                }
            })
        }
        else {
            this.textarea.keydown(e => {
                if (e.which == ENTER) {
                    const input = this.textarea.val()
                    this.close()
                    this.distpatcher.dispatch({ kind: ActionKind.SendInput, input })
                }
            })
        }

        this.container.append(this.textarea)
        this.textarea.focus()
    }

    close () {
        if (this.mode == 'varname') {
            this.textarea.remove()
        }
        else {
            const new_line = $(`<div class="line"><span>&gt;${this.textarea.val()}</span></div>`)
            this.textarea.replaceWith(new_line)
            this.textarea = null
        }
    }
}