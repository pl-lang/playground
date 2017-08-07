import * as $ from 'jquery'
import { Dispatcher } from '../Controller'
import { Action, ActionKind } from '../Actions'
import { Resizeable } from '../DragManager'

export interface Toggleable extends Resizeable {
    hidden: boolean
}

export default class PanelToggler {
    private panels: Toggleable[]
    private debug: boolean
    private dispatcher: Dispatcher
    private parent: JQuery
    container: JQuery

    constructor(parent: JQuery, dispatcher: Dispatcher, debug: boolean) {
        this.parent = parent
        this.debug = debug
        this.dispatcher = dispatcher
        this.container = $('<div id="panel-toggler" class="flex-col big-v-bar center-align"></div>')
        this.panels = []
    }

    add_panel(panel: Resizeable, hidden: boolean, icon_class_name: string, title: string) {
        const new_panel: Toggleable = { hidden, container: panel.container, container_index: panel.container_index, panel_index: panel.panel_index }
        this.panels.push(new_panel)
        const button = $(`<button title="${title}" class="blue-button big-icon-button v-button"><span class="big-icon octicon octicon-${icon_class_name}"></span></button>`)
        button.click(() => {
            this.toggle_panel(panel.container_index, panel.panel_index)
        })
        this.container.append(button)
    }

    toggle_panel(container_index: number, panel_index: number) {
        const index = this.find_panel(container_index, panel_index)

        if (index != -1) {
            if (this.panels[index].hidden) {
                this.dispatcher.dispatch({ kind: ActionKind.ShowPanel, container_index, panel_index })
                this.panels[index].hidden = false
            }
            else {
                this.dispatcher.dispatch({ kind: ActionKind.HidePanel, container_index, panel_index })
                this.panels[index].hidden = true
            }

        }
        else {
            throw new Error(`No panel found. The panel you were looking for had indexes: { container_index: ${container_index}, panel_index: ${panel_index} }`)
        }
    }

    find_panel(container_index: number, panel_index: number): number {
        for (let index = 0; index < this.panels.length; index++) {
            const panel = this.panels[index]
            if (panel.container_index == container_index && panel.panel_index == panel_index) {
                return index
            }
        }
        return -1
    }

    add_link(url_string: string, icon_class_name: string, title: string) {
        // const anchor = $(`<button class="blue-button big-icon-button v-button"><a class="big-icon octicon octicon-${icon_class_name}" href="${url_string}"></a></button>`)
        const anchor = $(`<a title="${title}" class="blue-button big-icon-button v-button" href="${url_string}"><span class="big-icon octicon octicon-${icon_class_name}"></span></a>`)

        this.container.append(anchor)
    }
}