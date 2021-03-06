import { Dispatcher } from '../Controller'
import { Value } from 'interprete-pl'
import Emitter from './Emitter'
import Prompt from './Prompt'
import * as $ from 'jquery'

export default class Window extends Emitter {
    private dispatcher: Dispatcher

    constructor (readonly container: JQuery, d: Dispatcher) {
        super(['evaluation-error'])
        this.container.append($('<div class="line"></div>'))
        this.dispatcher = d
    }

    write (v: Value) {
        this.container.append($(`<div class="line"><span>${v}</span></div>`))
    }

    read () {
        // hace falta almacenar Prompt en p?
        const p = new Prompt(this.container, this.dispatcher, 'input')
    }

    clear () {
        this.container.empty()
    }
}