import * as CodeMirror from 'codemirror'
import * as $ from 'jquery'
import {Parser, transform, fr_writer, Errors} from 'interprete-pl'
import OutputPanel from './components/OutputPanel'
import EditorPanel from './components/EditorPanel'
import CodePanel from './components/CodePanel'
import { DragManager } from './DragManager'

function create_handle(i: number) {
    const elem = document.createElement('div')
    elem.className = 'handle'
    elem.id = `handle${i}`
    return elem
}

const app_container = document.getElementById('app')

const editor_panel = new EditorPanel($('#app'), { debug: true, links: false })

const handle_1 = create_handle(0)
app_container.appendChild(handle_1)

const code_panel = new CodePanel($('#app'))

const handle_2 = create_handle(1)
app_container.appendChild(handle_2)

const output_panel = new OutputPanel($('#app'))

editor_panel.status_bar.error_count = 0

const ejecutar = document.getElementById('ejecutar') as HTMLButtonElement

const compilar = document.getElementById('compilar') as HTMLButtonElement

let error_count = 0

const parser = new Parser()

const dragger = new DragManager([editor_panel.panel, code_panel.container, output_panel.container], [50, 25, 25], [$('#handle0'), $('#handle1')], $('#app'))

$(document).mouseup(() => {
    if (dragger.is_grabbed) {
        dragger.is_grabbed = false
    }
})

$(document).mousemove(m => {
    if (dragger.is_grabbed) {
        const pos = dragger.handles[dragger.grabbed_handle].position()

        dragger.drag(dragger.grabbed_handle, { x: pos.left, y: pos.top }, { x: m.pageX, y: m.pageY })
    }
})

output_panel.output.on('evaluation-error', (error: Errors.Base) => {
    error_count++
    editor_panel.status_bar.error_count = error_count
    editor_panel.message_panel.add_message(error)
})

/**
 * Falta asignar callbacks a los eventos de parser
 */

function ejecutar_codigo (): void {
    /**
     * Limpiar los restos de la ejecucion anterior...
     */
    editor_panel.status_bar.error_count = 0
    output_panel.output.clear()
    if (editor_panel.message_panel.dirty) {
        editor_panel.message_panel.reset()
    }
    else if (editor_panel.message_panel.collapsed == false) {
        editor_panel.message_panel.collapse()
    }

    const codigo = editor_panel.editor.getValue()
    ejecutar.disabled = true
    compilar.disabled = true

    try {
        const parsed = parser.parse(codigo)

        if (parsed.error == false) {
            const transformed = transform(parsed.result)

            if (transformed.error == false) {
                /**
                 * mostrar el programa compilado
                 */
                code_panel.contents = fr_writer(transformed.result)
                /**
                 * ejecutar el programa!
                 */
                output_panel.output.run(transformed.result)
            }
            else if (transformed.error) {
                /**
                 * Se encontraron errores durante la transformacion
                 * o el chequeo de tipos
                 */
                for (let error of transformed.result) {
                    error_count++
                    editor_panel.message_panel.add_message(error)
                }

                editor_panel.status_bar.error_count = error_count
            }
        }
        else {
            /**
             * Se encontraron errores lexicos o sintacticos
             */
            for (let error of parsed.result) {
                error_count++
                editor_panel.message_panel.add_message(error)
            }
            editor_panel.status_bar.error_count = error_count
        }
    } catch (error) {
        /**
         * En caso de que haya alguna excepcion...
         */
        console.log(error)
        ejecutar.disabled = false
        compilar.disabled = false
        editor_panel.status_bar.error_count = 0
        error_count = 0
        editor_panel.message_panel.reset()
    }

    compilar.disabled = false
    ejecutar.disabled = false
    error_count = 0
}

function compilar_codigo (): void {
    /**
     * Limpiar los restos de la ejecucion anterior...
     */
    code_panel.contents = ''
    editor_panel.status_bar.error_count = 0
    output_panel.output.clear()
    if (editor_panel.message_panel.dirty) {
        editor_panel.message_panel.reset()
    }
    else if (editor_panel.message_panel.collapsed == false) {
        editor_panel.message_panel.collapse()
    }

    const codigo = editor_panel.editor.getValue()
    ejecutar.disabled = true
    compilar.disabled = true

    try {
        const parsed = parser.parse(codigo)

        if (parsed.error == false) {
            const transformed = transform(parsed.result)

            if (transformed.error == false) {
                /**
                 * mostrar el programa compilado
                 */
                code_panel.contents = fr_writer(transformed.result)
            }
            else if (transformed.error) {
                /**
                 * Se encontraron errores durante la transformacion
                 * o el chequeo de tipos
                 */
                for (let error of transformed.result) {
                    error_count++
                    editor_panel.message_panel.add_message(error)
                }

                editor_panel.status_bar.error_count = error_count
            }
        }
        else {
            /**
             * Se encontraron errores lexicos o sintacticos
             */
            for (let error of parsed.result) {
                error_count++
                editor_panel.message_panel.add_message(error)
            }
            editor_panel.status_bar.error_count = error_count
        }
    } catch (error) {
        /**
         * En caso de que haya alguna excepcion...
         */
        console.log(error)
        ejecutar.disabled = false
        compilar.disabled = false
        editor_panel.status_bar.error_count = 0
        error_count = 0
        editor_panel.message_panel.reset()
    }

    ejecutar.disabled = false
    compilar.disabled = false
    error_count = 0
}

editor_panel.run_button.click(ejecutar_codigo)
editor_panel.compile_button.click(compilar_codigo)