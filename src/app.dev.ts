import * as CodeMirror from 'codemirror'
import * as $ from 'jquery'
import {Parser, transform} from 'interprete-pl'
import StatusBar from './StatusBar'
import MessagePanel from './MessagePanel'
import Window from './Window'
import ir_writer from 'ir_writer'

// crear el panel de mensajes
// crear el editor
const editor = CodeMirror.fromTextArea(document.getElementById('editor') as HTMLTextAreaElement, {lineNumbers: true, firstLineNumber: 0})

const status_bar = new StatusBar($('#message_panel'))

const message_panel = new MessagePanel($('#message_panel'), editor)

const panel_compilado = $('ir-pre')

const pWindow = new Window($('#window'))

status_bar.error_count = 0

const ejecutar = document.getElementById('ejecutar') as HTMLButtonElement

let error_count = 0

const parser = new Parser()

/**
 * Falta asignar callbacks a los eventos de parser
 */

function ejecutar_codigo (): void {
    /**
     * Limpiar los restos de la ejecucion anterior...
     */
    status_bar.error_count = 0
    pWindow.clear()
    if (message_panel.dirty) {
        message_panel.reset()
    }
    else if (message_panel.collapsed == false) {
        message_panel.collapse()
    }

    const codigo = editor.getValue()
    ejecutar.disabled = true

    try {
        const parsed = parser.parse(codigo)

        if (parsed.error == false) {
            const transformed = transform(parsed.result)

            if (transformed.error == false) {
                /**
                 * mostrar el programa compilado
                 */
                panel_compilado.val(ir_writer(transformed.result))
                /**
                 * ejecutar el programa!
                 */
                pWindow.run(transformed.result)
            }
            else if (transformed.error) {
                /**
                 * Se encontraron errores durante la transformacion
                 * o el chequeo de tipos
                 */
                for (let error of transformed.result) {
                    error_count++
                    message_panel.add_message(error)
                }

                status_bar.error_count = error_count
            }
        }
        else {
            /**
             * Se encontraron errores lexicos o sintacticos
             */
            for (let error of parsed.result) {
                error_count++
                message_panel.add_message(error)
            }
            status_bar.error_count = error_count
        }
    } catch (error) {
        /**
         * En caso de que haya alguna excepcion...
         */
        console.log(error)
        ejecutar.disabled = false
        status_bar.error_count = 0
        error_count = 0
        message_panel.reset()
    }

    ejecutar.disabled = false
    error_count = 0
}

ejecutar.onclick = ejecutar_codigo