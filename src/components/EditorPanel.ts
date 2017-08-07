import * as $ from 'jquery'
import * as CodeMirror from 'codemirror'
import MessagePanel from './MessagePanel'
import { Action, ActionKind } from '../Actions'
import { Dispatcher } from '../Controller'
import { Resizeable } from '../DragManager'
import 'codemirror/addon/selection/active-line'

declare module "codemirror" {
    interface EditorConfiguration {
        //  when set to true, adds 'CodeMirror-activeline' and 'CodeMirror-activeline-background' to the current line
        styleActiveLine?: boolean;
    }
}

export interface EditorOptions {
    debug?: boolean
}

const defaults: EditorOptions = {
    debug: false,
}

export default class EditorPanel implements Resizeable {
    private parent: JQuery
    container: JQuery
    private editor: CodeMirror.EditorFromTextArea
    private options: EditorOptions
    private dispatcher: Dispatcher
    container_index: number
    panel_index: number

    constructor(parent: JQuery, d: Dispatcher, options: EditorOptions) {
        if (options) {
            this.options = { ...defaults, ...options }
        }
        else {
            this.options = defaults
        }

        this.parent = parent

        this.dispatcher = d

        this.container = $('<div id="editor-div" class="flex-col">')

        const title_bar = this.create_title_bar()

        this.container.append(title_bar)

        // agregar textarea para codemirror
        this.container.append($('<textarea id="editor"></textarea>'))

        this.editor = CodeMirror.fromTextArea(this.container.children('#editor')[0] as HTMLTextAreaElement, { lineNumbers: true, firstLineNumber: 0, styleActiveLine: true })
    }

    create_title_bar() {
        const bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-pencil"></span>')
        const title = $('<span class="title">EDITOR</span>')

        bar.append(icon).append(title)

        return bar
    }

    get editor_contents(): string {
        return this.editor.getValue()
    }

    set editor_contents(contents: string) {
        this.editor.setValue(contents)
    }

    refresh() {
        this.editor.refresh()
    }

    focus_editor() {
        this.editor.focus()
    }

    move_cursor(line: number, column: number) {
        this.editor.getDoc().setCursor({ line, ch: column })
    }
}