import * as $ from 'jquery'

export default class StatusBar {
    element: JQuery
    status_msg: JQuery
    private _error_count: number

    constructor (readonly container: JQuery) {
        const htmlstring = `
        <div id="status_bar" class="bar bar-left-border ar-top-border bar-bottom-border flex-row center-align">
            <span id="status_msg" class="title small-title"></span>
        </div>
        `

        this.element = this.container.append(htmlstring)
        this.status_msg = this.element.find('#status_msg')
        this.error_count = 0
    }

    set title(s: string) {
        this.status_msg.text(s)
    }

    get title(): string {
        return this.status_msg.text()
    }

    set error_count (error_count: number) {
        this._error_count = error_count

        this.status_msg.empty()

        if (error_count === 0) {
            this.status_msg.text('Listo')
        }
        else {
            if (error_count >= 1) {
                let icon = '<span class="octicon octicon-alert"></span>'

                if (error_count === 1) {
                    this.status_msg.html(`${icon} Se ha encontrado un error en tu programa.`)
                }
                else {
                    this.status_msg.html(`${icon} Se han encontrado ${error_count} errores en tu programa.`)
                }
            }
        }
    }

    get error_count(): number {
        return this._error_count
    }
}