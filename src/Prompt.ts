import * as $ from 'jquery'
import {Interpreter, Value} from 'interprete-pl'

export default class Prompt {
    private textarea: JQuery
    private interpreter: Interpreter

    constructor (readonly container: JQuery, i: Interpreter) {
        this.textarea = $('<textarea id="prompt"></textarea>')
        this.interpreter = i

        this.textarea.keydown(e => {
            if (e.keyCode == 13) {
                this.close()
                this.interpreter.send(this.textarea.val() as Value)
                this.interpreter.run()
            }
        })

        this.container.append(this.textarea)
        this.textarea.focus()
    }

    close () {
        const new_line = $(`<div class="line"><span>&gt; ${this.textarea.val()}</span></div>`)
        this.textarea.replaceWith(new_line)
    }
}