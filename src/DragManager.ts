import * as $ from 'jquery'

export interface Container {
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

    protected add_panel(container_index: number, index: number, new_panel_length: number) {
        if (container_index >= 0 && container_index < this.containers.length) {
            const new_length: number[] = []
            const panel_length = this.containers[container_index].panel_length
            for (let i = 0; i <= panel_length.length; i++) {
                if (i == index) {
                    new_length[i] = new_panel_length
                }
                else {
                    new_length[i] = panel_length[i]
                }
            }
            this.containers[container_index].panel_length = new_length
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    protected add_container(width: number, height: number, mode: 'vertical' | 'horizontal') {
        this.containers.push({ width, height, mode, panel_length: [] })
    }

    protected remove_container(container_index: number): Container {
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

    protected get_container(container_index: number): Container {
        if (container_index < 0 || container_index >= this.containers.length) {
            throw new Error(`Invalid container_index (${container_index})`)
        }
        else {
            return this.containers[container_index]
        }
    }

    protected set_container_dimensions(container_index: number, width: number, height: number) {
        if (container_index >= 0 && container_index < this.containers.length) {
            this.containers[container_index].height = height
            this.containers[container_index].width = width
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    protected drag(container_index: number, handle_index: number, from: { x: number, y: number}, to: { x: number, y: number }): number[] {
        if (container_index >= 0 && container_index < this.containers.length) {
            if (handle_index >= 0 && handle_index < this.containers[container_index].panel_length.length - 1) {
                const container = this.containers[container_index]

                const total_panel_length = container.mode == 'vertical' ? container.height : container.width
                
                // con esto me aseguro de que la posicion final este dentro del panel
                from = this.clamp(container_index, from)
                to = this.clamp(container_index, to)

                const delta = this.substract(to, from)

                const positive_direction = container.mode == 'vertical' ? delta.y > 0 : delta.x > 0

                const delta_percentage = this.map(delta, i => Math.abs((i / total_panel_length) * 100))

                // determinar que panel se achica en funcion de la direccion del movimiento de la manija
                if (positive_direction) {
                    const shrinking_panel_index = handle_index + 1

                    const total_delta = container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x

                    let acc = 0

                    for (let i = shrinking_panel_index; i < container.panel_length.length && acc < total_delta; i++){
                        acc += container.panel_length[i]

                        if (acc < total_delta) {
                            container.panel_length[i] = 0
                        }
                        else {
                            container.panel_length[i] = acc - total_delta
                        }
                    }

                    container.panel_length[handle_index] = container.panel_length[handle_index] + total_delta

                    return container.panel_length
                }
                else {
                    const shrinking_panel_index = handle_index

                    const total_delta = container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x

                    let acc = 0

                    for (let i = shrinking_panel_index; i >= 0 && acc < total_delta; i--) {
                        acc += container.panel_length[i]

                        if (acc < total_delta) {
                            container.panel_length[i] = 0
                        }
                        else {
                            container.panel_length[i] = acc - total_delta
                        }
                    }

                    container.panel_length[handle_index + 1] = container.panel_length[handle_index + 1] + total_delta

                    return container.panel_length
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

    protected clamp(container_index: number, vector: { x: number, y: number }): { x: number, y: number } {
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

interface UIPanelContainer {
    element: JQuery
    panels: JQuery[]
    mode: 'vertical' | 'horizontal'
    last_handle_index: number
}

interface UIHandle {
    /**
     * indice del contenedor donde esta manija se encuentra
     */
    container_index: number
    /**
     * indice de la manija dentro de su contenedor
     */
    handle_index: number
    element: JQuery
}

export class DragManager extends DragLogic {
    ui_panel_containers: UIPanelContainer[]
    /**
     * arreglo de elementos que sirven de manija
     */
    handles: UIHandle[]
    /**
     * indica si una manija esta agarrada
     */
    is_grabbed: boolean
    /**
     * manija agarrada en un momento dado
     */
    grabbed_handle: UIHandle

    constructor() {
        super()
        this.ui_panel_containers = []
        this.handles = []
        this.grabbed_handle = null
        this.is_grabbed = false
    }

    add_handle(container_index: number, handle: JQuery) {
        if (container_index >= 0 && container_index < this.ui_panel_containers.length) {
            const container = this.ui_panel_containers[container_index] 
            const ui_handle = { container_index: container_index, element: handle, handle_index: container.last_handle_index }
            this.handles.push(ui_handle)
            container.last_handle_index++
            this.bind_handle(ui_handle)
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    private bind_handle(handle: UIHandle) {
        handle.element.mousedown(ev => {
            this.is_grabbed = true
            this.grabbed_handle = handle
        })

        handle.element.mouseup(ev => {
            this.is_grabbed = false
            this.grabbed_handle = null
        })
    }

    add_ui_container(element: JQuery, mode: 'vertical' | 'horizontal') {
        super.add_container(element.width(), element.height(), mode)
        this.ui_panel_containers.push({ element, mode, panels: [], last_handle_index: 0 })
    }

    add_ui_panel(container_index: number, index: number, panel_width: number, panel_element: JQuery) {
        super.add_panel(container_index, index, panel_width)

        if (container_index >= 0 && container_index < this.ui_panel_containers.length) {
            const new_panels: JQuery[] = []
            const old_panels = this.ui_panel_containers[container_index].panels
            for (let i = 0; i <= old_panels.length; i++) {
                if (i == index) {
                    new_panels[i] = panel_element
                }
                else {
                    new_panels[i] = old_panels[i]
                }
            }
            this.ui_panel_containers[container_index].panels = new_panels
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    drag_handle(handle: UIHandle, from: { x: number, y: number }, to: { x: number, y: number }) {

        const panel_length = super.drag(handle.container_index, handle.handle_index, from, to)

        const container = this.ui_panel_containers[handle.container_index]

        // aplicar las nuevas longitudes
        for (let i = 0; i < container.panels.length; i++) {
            if (container.mode == 'horizontal') {
                container.panels[i].attr('style', `width: ${panel_length[i]}%;`)
            }
            else {
                container.panels[i].attr('style', `height: ${panel_length[i]}%;`)
            }
        }
    }
}