import * as $ from 'jquery'

export default class DragManager {
    private panels: JQuery[]
    private width: number[]
    handles: JQuery[]
    private panel_container: JQuery
    /**
     * indicates whether a handle is grabbed or not
     */
    is_grabbed: boolean
    grabbed_handle: number

    constructor(panels: JQuery[], width: number[], handles: JQuery[], container: JQuery) {
        if (panels.length == width.length) {
            this.panels = panels
            this.width = width
        }
        else {
            throw new Error('panels.length =/= widths.length')
        }

        this.handles = handles
        this.is_grabbed = false
        this.grabbed_handle = 0
        this.panel_container = container

        this.bind_handles()
    }

    bind_handles() {
        for (let i = 0; i < this.handles.length; i++) {
            this.handles[i].mousedown(ev => {
                this.is_grabbed = true
                this.grabbed_handle = i
            })

            this.handles[i].mouseup(ev => {
                this.is_grabbed = false
            })

            this.handles[i].mousemove(ev => {
                if (this.is_grabbed && i == this.grabbed_handle) {
                    const pos = this.handles[i].position()
                    if (Math.abs(ev.pageX - pos.left) > 30) {
                        this.drag(i, { x: pos.left, y: pos.top }, { x: ev.pageX, y: ev.pageY })
                    }
                }
            })
        }
    }

    drag(handle_index: number, starting_pos: { x: number, y: number }, final_pos: { x: number, y: number }) {
        const width = this.panel_container.width()
        const height = this.panel_container.height()
        const handle = this.handles[handle_index]

        if (final_pos.x < 0) {
            final_pos.x = 0
        }
        else if (final_pos.x > width) {
            final_pos.x = width
        }

        if (final_pos.y < 0) {
            final_pos.y = 0
        }
        else if (final_pos.y > height) {
            final_pos.y = height
        }

        const delta_percentage = Number((((final_pos.x - starting_pos.x) / width) * 100).toPrecision(3))

        let left_panel_index = handle_index

        if (this.width[left_panel_index] == 0) {
            if (delta_percentage < 0) {
                while (this.width[left_panel_index] == 0) {
                    left_panel_index--
                }
            }
        }

        let right_panel_index: number = handle_index + 1

        if (this.width[right_panel_index] == 0) {
            if (delta_percentage > 0) {
                while (this.width[right_panel_index] == 0) {
                    right_panel_index++
                }
            }
        }

        let left_width = Math.abs(Number((this.width[left_panel_index] + delta_percentage).toPrecision(3)))
        // let right_width = Math.abs(Number((this.width[right_panel_index] - delta_percentage).toPrecision(3)))

        left_width = -(0 - left_width) < 0.1 ? 0 : left_width

        let right_width = (this.width[left_panel_index] - left_width) + this.width[right_panel_index]

        right_width = -(0 - right_width) < 0.1 ? 0 : right_width

        this.width[left_panel_index] = left_width
        this.width[right_panel_index] = right_width

        const total_width = this.width.reduce((total, current) => total + current)

        if (total_width > 100) {
            const delta = (total_width - 100) / this.width.length
            this.width = this.width.map(w => w - delta)
        }

        for (let i = 0; i < this.panels.length; i++) {
            this.panels[i].attr('style', `width: ${this.width[i]}%;`)
        }
    }
}