import * as $ from 'jquery'
import { Dispatcher } from '../Controller'
import { Action, ActionKind } from '../Actions'
import { Resizeable } from '../DragManager'

export default class PanelToggler implements Resizeable {
    private dispatcher: Dispatcher
    private parent: JQuery
    private body: JQuery
    container_index: number
    panel_index: number
    container: JQuery

    constructor(parent: JQuery, dispatcher: Dispatcher) {
        this.parent = parent

        this.container = $('<div id="inspection-panel" class="flex-col"></div>')

        const bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-search">')
        const title = $('<span class="title">VARIABLES</span>')

        bar.append(icon).append(title)

        this.container.append(bar)

        this.body = $('<div id="inspection-panel-body" class="flex-col"></div>')

        this.container.append(this.body)
    }
}