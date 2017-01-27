import {S3, Interpreter, Value} from 'interprete-pl'
import Prompt from './Prompt'
import * as $ from 'jquery'

export default class Window {
    private interpreter: Interpreter

    constructor (readonly container: JQuery) {
        this.container.append($('<div class="line"></div>'))
    }

    write (v: Value) {
        this.container.append($(`<div class="line"><span>${v}</span></div>`))
    }

    read () {
        const p = new Prompt(this.container, this.interpreter)
    }

    run (p: S3.Program) {
        this.interpreter = new Interpreter(p)

        this.interpreter.on('write', v => this.write(v))

        this.interpreter.on('read', () => {this.read()})

        this.interpreter.on('program-finished', () => {
            this.container.append($('<br>'))
            this.container.append($('<div class="line"><span>Programa finalizado</span></div>'))
        })

        this.interpreter.run()
    }

    clear () {
        this.container.empty()
    }
}