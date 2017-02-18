import * as $ from 'jquery'
import * as CodeMirror from 'codemirror'
import MessagePanel from './MessagePanel'
import StatusBar from './StatusBar'

export interface EditorOptions {
    debug?: boolean
}

export default class EditorPanel {
    run_button: JQuery
    compile_button: JQuery
    container: JQuery
    panel: JQuery
    editor: CodeMirror.EditorFromTextArea
    message_panel: MessagePanel
    status_bar: StatusBar
    options: EditorOptions

    constructor (container: JQuery, options: EditorOptions) {
        if (options) {
            this.options = options
        }
        else {
            this.options = { debug: false }
        }

        this.container = container

        this.panel = $('<div id="editor-div" class="flex-col">')

        this.container.append(this.panel)

        const title_bar = this.create_title_bar()

        this.panel.append(title_bar)

        // agregar textarea para codemirror
        this.panel.append($('<textarea id="editor"></textarea>'))

        this.editor = CodeMirror.fromTextArea(this.panel.children('#editor')[0] as HTMLTextAreaElement, { lineNumbers: true, firstLineNumber: 0 })

        const info_panel = $('<div id="info_panel"></div>')

        this.status_bar = new StatusBar(info_panel)

        this.message_panel = new MessagePanel(info_panel, this.editor)

        this.panel.append(info_panel)        
    }

    create_title_bar() {
        const bar = $('<div class="bar bar-bottom-border flex-row center-align"></div>')
        const icon = $('<span style="margin-left:10px" class="octicon octicon-pencil"></span>')
        const title = $('<span class="title">EDITOR</span>')
        const run_button = $('<button id="ejecutar" class="boton-ejecutar"><span class="button-label">Ejecutar programa</span><span></button>')
        const compile_button = $('<button id="compilar" class="boton-compilar"><span class="button-label">Compilar programa</span><span></button>')

        bar.append(icon).append(title).append(run_button)

        this.run_button = run_button

        if (this.options.debug) {
            bar.append(compile_button)
            this.compile_button = compile_button
        }
        else {
            this.compile_button = null   
        }

        return bar
    }

    get editor_contents(): string {
        return this.editor.getValue()
    }

    set editor_contents(contents: string) {
        this.editor.setValue(contents)
    }
}