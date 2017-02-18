import {S3, Interpreter, Value} from 'interprete-pl'
import Emitter from './Emitter'
import Prompt from './Prompt'
import * as $ from 'jquery'

export default class Window extends Emitter {
    
    private interpreter: Interpreter

    constructor (readonly container: JQuery) {
        super(['evaluation-error'])
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

        this.interpreter.on('evaluation-error', (error_info) => {
            this.container.append($('<br>'))
            this.container.append($('<div class="line"><span>Programa finalizado debido a un error</span></div>'))
            this.emit('evaluation-error', error_info)
        })

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