import * as $ from 'jquery'

interface Container {
    width: number
    height: number
    panel_length: number[]
    mode: 'vertical' | 'horizontal'
}

export class DragLogic {
    private containers: Container[]

    constructor() {
        this.containers = []
    }

    add_panel(container_index: number, index: number, new_panel_width: number) {
        if (container_index >= 0 && container_index < this.containers.length) {
            const new_width: number[] = []
            const panel_width = this.containers[container_index].panel_length
            for (let i = 0; i <= panel_width.length; i++) {
                if (i == index) {
                    new_width[i] = new_panel_width
                }
                else {
                    new_width[i] = panel_width[i]
                }
            }
            this.containers[container_index].panel_length = new_width
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    add_container(width: number, height: number, mode: 'vertical' | 'horizontal') {
        this.containers.push({ width, height, mode, panel_length: [] })
    }

    remove_container(container_index: number): Container {
        if (container_index < 0 || container_index >= this.containers.length) {
            throw new Error(`Invalid container_index (${container_index})`)
        }
        else {
            const container = this.containers.filter((c, i) => i == container_index).pop()

            // remover el contenedor
            this.containers = this.containers.filter((c, i) => i != container_index)

            return container
        }
    }

    get_container(container_index: number): Container {
        if (container_index < 0 || container_index >= this.containers.length) {
            throw new Error(`Invalid container_index (${container_index})`)
        }
        else {
            return this.containers[container_index]
        }
    }

    drag(container_index: number, handle_index: number, from: { x: number, y: number}, to: { x: number, y: number }): number[] {
        if (container_index >= 0 && container_index < this.containers.length) {
            if (handle_index >= 0 && handle_index < this.containers[container_index].panel_length.length - 1) {
                const container = this.containers[container_index]

                const total_panel_length = container.mode == 'vertical' ? container.height : container.width
                
                // con esto me aseguro de que la posicion final este dentro del panel
                to = this.clamp(container_index, to)

                const delta = this.substract(to, from)

                const positive_direction = container.mode == 'vertical' ? delta.y > 0 : delta.x > 0

                const delta_percentage = this.map(delta, i => Math.abs((i / total_panel_length) * 100))

                // determinar que panel se achica en funcion de la direccion del movimiento de la manija
                if (positive_direction) {
                    if (container.panel_length[handle_index + 1] == 0) {
                        // si la longitud del panel que se va a encoger ya es sero, no hay que modificarla
                        return container.panel_length
                    }
                    else {
                        // calcular la nueva longitud de los paneles adyacentes a la "manija"
                        const shrinking_panel_length = container.panel_length[handle_index + 1] - (container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x)

                        const growinng_panel_length = container.panel_length[handle_index] + (container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x)

                        // aplicar las nuevas longitudes
                        const new_length = container.panel_length.map((l, i) => {
                            if (i == handle_index + 1) {
                                return shrinking_panel_length
                            }
                            else if (i == handle_index) {
                                return growinng_panel_length
                            }
                            else {
                                return l
                            }
                        })

                        // actualizar la longitud de los paneles
                        this.containers[container_index].panel_length = new_length

                        return new_length
                    }
                }
                else {
                    if (container.panel_length[handle_index] == 0) {
                        // si la longitud del panel que se va a encoger ya es sero, no hay que modificarla
                        return container.panel_length
                    }
                    else {
                        // calcular la nueva longitud de los paneles adyacentes a la "manija"
                        const shrinking_panel_length = container.panel_length[handle_index] - (container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x)

                        const growinng_panel_length = container.panel_length[handle_index + 1] + (container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x)

                        // aplicar las nuevas longitudes
                        const new_length = container.panel_length.map((l, i) => {
                            if (i == handle_index) {
                                return shrinking_panel_length
                            }
                            else if (i == handle_index + 1) {
                                return growinng_panel_length
                            }
                            else {
                                return l
                            }
                        })

                        // actualizar la longitud de los paneles
                        this.containers[container_index].panel_length = new_length

                        return new_length
                    }
                }
            }
            else {
                throw new Error(`Invalid handle_index (${handle_index}) for container with index ${container_index}`)
            }
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    private clamp(container_index: number, vector: { x: number, y: number }): { x: number, y: number } {
        const container = this.containers[container_index]

        let { x, y } = vector

        x = x < 0 ? 0 : x
        x = x > container.width ? container.width : x
        y = y < 0 ? 0 : y
        y = y > container.width ? container.height : y

        return { x, y }
    }

    private substract(a: { x: number, y: number }, b: { x: number, y: number }): { x: number, y: number } {
        return { x: a.x - b.x, y: a.y - b.y }
    }

    private map(a: { x: number, y: number }, f: (i: number) => number): { x: number, y: number } {
        const { x, y } = a
        return { x: f(x), y: f(y) }
    }
}

export class DragManager {
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