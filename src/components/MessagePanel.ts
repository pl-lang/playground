import * as $ from 'jquery'
import { Errors } from 'interprete-pl'
import get_template from './Templates'
import { Action, ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'

export default class MessagePanel {
    private message_list: JQuery
    private collapsed: boolean
    private dirty: boolean
    private dispatcher: Dispatcher

    constructor (readonly container: JQuery, d: Dispatcher) {
        this.message_list = $('<div id="message_list" class="flex-col msg_list-collapsed"></div>')
        this.container.append(this.message_list)
        this.collapsed = true
        this.dirty = false
        this.dispatcher = d
    }

    add_message (data: Errors.Base) {
        this.dirty = true

        const message = $('<div class="error-msg-container"></div>')

        message.on('click', (ev)=>{ev.stopPropagation()})

        const title_bar = $(`<div class="bar flex-row space-between center-align error-bar"></div>`)

        const template = get_template(data)
        
        const title = $(`<div class="title small-title error-title">${template.title}</div>`)

        title_bar.append(title)

        message.append(title_bar)

        if ('description' in template || 'suggestion' in template) {
            /**
             * Agregar botoncito para mostrar/ocultar la descripcion y/o sugerencia
             */

            const expand_button = $('<span class="octicon octicon-chevron-up"></span>')

            expand_button.attr('title', 'Mostrar/ocultar informacion sobre este error')

            expand_button.on('click', (event) => {
                extra_info_container.toggleClass('expanded')
                expand_button.toggleClass('chevron-restored')
                event.stopPropagation()
            })

            title_bar.append(expand_button)

            const extra_info_container = $('<div id="extra_info" class="collapsable"></div>')

            extra_info_container.on('click', e => {e.stopPropagation()})

            if ('description' in template) {
                extra_info_container.append($(`<p>${template.description}</p>`))
            }

            if ('suggestion' in template) {
                extra_info_container.append($(`<p>${template.suggestion}</p>`))
            }

            message.append(extra_info_container)
        }

        if ('pos' in data) {
            /**
             * Hacer que aparezca la manito al pasar el mouse sobre la barra
             * del titulo
             */
            title_bar.addClass('pointer')

            message.on('click', () => {
                this.dispatcher.dispatch({ kind: ActionKind.MoveCursor, line: data.pos.line, column: data.pos.column })
                this.dispatcher.dispatch({ kind: ActionKind.FocusEditor })
            })
        }

        if (this.collapsed) {
            this.message_list.toggleClass('msg_list-expanded')
            this.collapsed = false
        }

        this.message_list.append(message)
    }

    clear () {
        if (this.dirty) {
            this.collapsed = true
            this.message_list.toggleClass('msg_list-expanded')
            this.message_list.empty()
            this.dirty = false
        }
    }

    collapse () {
        this.collapsed = true
        this.message_list.toggleClass('msg_list-expanded')
    }
}