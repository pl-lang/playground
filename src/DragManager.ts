import * as $ from 'jquery'

export interface Resizeable {
    container_index: number
    panel_index: number
    container: JQuery
}

export interface Panel {
    fixed: boolean
    length: number
    hidden: boolean
}

export interface Container {
    width: number
    height: number
    panels: Panel[]
    mode: 'vertical' | 'horizontal'
    origin: { x: number, y: number }
}

export class DragLogic {
    private containers: Container[]

    constructor() {
        this.containers = []
    }

    protected add_panel(container_index: number, options?: { fixed: boolean, length: number }) {
        if (container_index >= 0 && container_index < this.containers.length) {
            const container = this.containers[container_index]

            let available_length = 0

            if (container.panels.length > 0) {
                let fixed_length = 0
                for (let i = 0; i < container.panels.length; i++) {
                    const panel = container.panels[i]
                    if (panel.fixed && !panel.hidden) {
                        fixed_length += panel.length
                    }
                }
                available_length = 100 - fixed_length
            }
            else {
                available_length = 100
            }

            let new_panel_length = 0
            let fixed_length = false

            if (options) {
                if (options.fixed) {
                    new_panel_length = available_length >= options.length ? options.length : available_length
                    // si hay suficiente espacio como para que el panel tenga la longitud deseada
                    // entonces puede tener longitud fija, si no tiene longitud flexible
                    fixed_length = available_length >= options.length
                }
                else {
                    new_panel_length = available_length
                }
            }
            else {
                new_panel_length = available_length
            }

            if (fixed_length) {
                // si el panel tiene longitud fija le va a quitar espacio
                // a los paneles flexibles existentes

                // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                const old_lengths = container.panels.map(p => p.length)
                let remaining_length = new_panel_length
                for (let i = 0; i < old_lengths.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        const diff = old_lengths[i] - remaining_length
                        container.panels[i].length = diff < 0 ? 0 : diff
                        remaining_length = remaining_length - old_lengths[i]
                    }
                }

                // agregar panel
                const new_panel: Panel = { fixed: fixed_length, length: new_panel_length, hidden: false }

                container.panels.push(new_panel)
            }
            else {
                // si no tiene longitud fija entonces comparte el espacio disponible
                // con el resto de los paneles flexibles
                const flex_panels = container.panels.filter(p => p.fixed == false).length + 1

                const length = available_length / flex_panels

                // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                for (let i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length = length
                    }
                }

                const new_panel: Panel = { fixed: fixed_length, length, hidden: false }

                container.panels.push(new_panel)
            }
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    protected add_panel_after(container_index: number, previous_panel_index: number, options?: { fixed: boolean, length: number }) {
        const container = this.containers[container_index]

        if (previous_panel_index < container.panels.length) {
            if (previous_panel_index >= container.panels.length - 1) {
                this.add_panel(container_index, options)
            }
            else {
                let available_length = 0

                if (container.panels.length > 0) {
                    let fixed_length = 0
                    for (let i = 0; i < container.panels.length; i++) {
                        const panel = container.panels[i]
                        if (panel.fixed && !panel.hidden) {
                            fixed_length += panel.length
                        }
                    }
                    available_length = 100 - fixed_length
                }
                else {
                    available_length = 100
                }

                let new_panel_length = 0
                let fixed_length = false

                if (options) {
                    if (options.fixed) {
                        new_panel_length = available_length >= options.length ? options.length : available_length
                        // si hay suficiente espacio como para que el panel tenga la longitud deseada
                        // entonces puede tener longitud fija, si no tiene longitud flexible
                        fixed_length = available_length >= options.length
                    }
                    else {
                        new_panel_length = available_length
                    }
                }
                else {
                    new_panel_length = available_length
                }

                if (fixed_length) {
                    // si el panel tiene longitud fija le va a quitar espacio
                    // a los paneles flexibles existentes

                    // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                    const flex_panels = container.panels.filter(p => p.fixed == false).length

                    if (flex_panels > 0) {
                        let length = (available_length - new_panel_length) / flex_panels

                        for (let i = 0; i < container.panels.length; i++) {
                            if (!container.panels[i].fixed && !container.panels[i].hidden) {
                                container.panels[i].length = length
                            }
                        }
                    }

                    // agregar panel
                    const new_panel: Panel = { fixed: fixed_length, length: new_panel_length, hidden: false }

                    const new_panels = [...container.panels.slice(0, previous_panel_index + 1), new_panel, ...container.panels.slice(previous_panel_index + 1)]

                    container.panels = new_panels
                }
                else {
                    // si no tiene longitud fija entonces comparte el espacio disponible
                    // con el resto de los paneles flexibles
                    const flex_panels = container.panels.filter(p => p.fixed == false).length + 1

                    const length = available_length / flex_panels

                    // aplicar nuevas longitudes a los paneles (flexibles) existentes que no esten escondidos
                    for (let i = 0; i < container.panels.length; i++) {
                        if (!container.panels[i].fixed && !container.panels[i].hidden) {
                            container.panels[i].length = length
                        }
                    }

                    const new_panel: Panel = { fixed: fixed_length, length, hidden: false }

                    const new_panels = [...container.panels.slice(0, previous_panel_index + 1), new_panel, ...container.panels.slice(previous_panel_index + 1)]

                    container.panels = new_panels
                }
            }
        }
        else {
            throw new Error(`Tried to add a panel after container.panels[${previous_panel_index}] but this container only has ${container.panels.length} panels`)
        }
    }

    protected remove_panel(container_index: number, panel_index: number) {
        const container = this.containers[container_index]
        const removed_panel = container.panels[panel_index]

        // remover panel
        container.panels = container.panels.filter((p, i) => i != panel_index)

        if (container.panels.length > 0) {
            // repartir la longitud del panel removido entre los paneles flexibles (no escondidos)
            // de este contenedor
            const flex_panels = container.panels.filter(p => p.fixed == false).length

            if (flex_panels > 0) {
                const extra_length = removed_panel.length / flex_panels

                for (let i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length += extra_length
                    }
                }
            }
        }
    }

    protected toggle_panel(container_index: number, panel_index: number): boolean {
        const container = this.containers[container_index]
        const panel = container.panels[panel_index]
        panel.hidden = !panel.hidden

        if (panel.hidden) {
            // repartir la longitud del panel removido entre los paneles flexibles (no escondidos)
            // de este contenedor

            const flex_panels = container.panels.filter(p => p.fixed == false && p.hidden == false).length

            if (flex_panels > 0) {
                const extra_length = panel.length / flex_panels
                const old_length = panel.length

                for (let i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length += extra_length
                    }
                }
            }
        }
        else {
            // repartir la longitud disponible entre los paneles flexibles (no-escondidos)

            let available_length = 0

            if (container.panels.length > 0) {
                let fixed_length = 0
                for (let i = 0; i < container.panels.length; i++) {
                    const panel = container.panels[i]
                    if (panel.fixed && !panel.hidden) {
                        fixed_length += panel.length
                    }
                }
                available_length = 100 - fixed_length
            }
            else {
                available_length = 100
            }

            const flex_panels = container.panels.filter(p => p.fixed == false && p.hidden == false).length

            if (flex_panels > 0) {
                const length = available_length / flex_panels

                for (let i = 0; i < container.panels.length; i++) {
                    if (!container.panels[i].fixed && !container.panels[i].hidden) {
                        container.panels[i].length = length
                    }
                }
            }
        }

        return panel.hidden
    }

    protected get_visible_panels(container_index: number): number {
        return this.containers[container_index].panels.filter(p => p.hidden == false).length
    }

    protected add_container(x: number, y: number, width: number, height: number, mode: 'vertical' | 'horizontal') {
        this.containers.push({ width, height, mode, panels: [], origin: { x, y } })
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

    protected drag(container_index: number, handle_index: number, from: { x: number, y: number}, to: { x: number, y: number }) {
        if (container_index >= 0 && container_index < this.containers.length) {
            if (handle_index >= 0 && handle_index < this.containers[container_index].panels.length - 1) {
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

                    for (let i = shrinking_panel_index; i < container.panels.length && acc < total_delta; i++){
                        acc += container.panels[i].length

                        if (acc < total_delta) {
                            container.panels[i].length = 0
                        }
                        else {
                            container.panels[i].length = acc - total_delta
                        }
                    }

                    const growing_panel = container.panels[handle_index]
                    
                    if (growing_panel.hidden) {
                        const growing_panel_width = container.panels[this.find(0, handle_index, false, { hidden: false })].length
                        container.panels[this.find(0, handle_index, false, { hidden: false })].length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta
                    }
                    else {
                        const growing_panel_width = growing_panel.length
                        growing_panel.length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta
                    }
                }
                else {
                    const shrinking_panel_index = handle_index

                    const total_delta = container.mode == 'vertical' ? delta_percentage.y : delta_percentage.x

                    let acc = 0

                    for (let i = shrinking_panel_index; i >= 0 && acc < total_delta; i--) {
                        acc += container.panels[i].length

                        if (acc < total_delta) {
                            container.panels[i].length = 0
                        }
                        else {
                            container.panels[i].length = acc - total_delta
                        }
                    }

                    const growing_panel = container.panels[handle_index + 1]

                    if (growing_panel.hidden) {
                        const growing_panel_width = container.panels[this.find(0, handle_index, false, { hidden: false })].length
                        container.panels[this.find(0, handle_index, false, { hidden: false })].length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta
                    }
                    else {
                        const growing_panel_width = growing_panel.length
                        growing_panel.length = (growing_panel_width + total_delta) > 100 ? 100 : growing_panel_width + total_delta
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

    /**
     * Search for a panel with some specifications (fixed length?, hidden?, length == x?) and, if found, return its index within its container,
     * otherwise return -1.
     */
    protected find(container_index: number, from_index: number, forwards: boolean, options: { hidden?: boolean, length?: number }): number {
        const defaults = { hidden: false, length: -1 } // -1 means any...

        const spec = { ...defaults, ...options }

        const container = this.containers[container_index]

        if (forwards) {
            for (let i = from_index + 1; i < container.panels.length; i++) {
                const panel = container.panels[i]
                const partial_match = panel.hidden == spec.hidden
                if (partial_match && spec.length == -1) {
                    return i
                }
                else if (partial_match && panel.length == spec.length) {
                    return i
                }
            }
        }
        else {
            for (let i = from_index - 1; i >= 0; i--) {
                const panel = container.panels[i]
                const partial_match = panel.hidden == spec.hidden
                if (partial_match && spec.length == -1) {
                    return i
                }
                else if (partial_match && panel.length == spec.length) {
                    return i
                }
            }
        }
        return -1
    }

    protected clamp(container_index: number, vector: { x: number, y: number }): { x: number, y: number } {
        const container = this.containers[container_index]

        let { x, y } = vector

        x = x < container.origin.x ? container.origin.x : x
        x = x > (container.width + container.origin.x) ? (container.width + container.origin.x) : x
        y = y < (container.origin.y) ? container.origin.y : y
        y = y > (container.height + container.origin.y) ? (container.height + container.origin.y) : y

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
        const pos = element.position()
        super.add_container(pos.left, pos.top, element.width(), element.height(), mode)
        this.ui_panel_containers.push({ element, mode, panels: [], last_handle_index: 0 })
    }

    add_ui_panel(container_index: number, panel_element: Resizeable, options?: { fixed: boolean, length: number }) {
        if (container_index >= 0 && container_index < this.ui_panel_containers.length) {
            super.add_panel(container_index, options)

            panel_element.container_index = container_index
            panel_element.panel_index = this.ui_panel_containers[container_index].panels.length

            const container = this.ui_panel_containers[container_index]

            container.panels.push(panel_element.container)

            const lengths = super.get_container(container_index).panels.map(p => p.length)

            this.apply_lengths(container.panels, lengths, container.mode)
        }
        else {
            throw new Error(`Invalid container_index (${container_index})`)
        }
    }

    drag_handle(handle: UIHandle, from: { x: number, y: number }, to: { x: number, y: number }) {

        super.drag(handle.container_index, handle.handle_index, from, to)

        const container = this.ui_panel_containers[handle.container_index]

        const lengths = super.get_container(handle.container_index).panels.map(pan => pan.length)

        this.apply_lengths(container.panels, lengths, container.mode)
    }

    toggle_ui_panel(container_index: number, panel_index: number) {
        const visible_panels = super.get_visible_panels(container_index)

        const container_model = super.get_container(container_index)

        const panel_model = container_model.panels[panel_index]

        if (visible_panels > 1 || panel_model.hidden) {
            const hidden = super.toggle_panel(container_index, panel_index)

            const container = this.ui_panel_containers[container_index]

            const lengths = super.get_container(container_index).panels.map(pan => pan.length)

            this.apply_lengths(container.panels, lengths, container.mode)

            if (hidden) {
                const panel = container.panels[panel_index]

                panel.hide()

                if (panel_index == 0) {
                    // ocultar la primer manija
                    let handle = this.handles[0]

                    if (handle) {
                        handle.element.hide()
                    }
                }
                else {
                    // ocultar la manija a la izquierda de este panel
                    let handle = this.handles[panel_index - 1]

                    if (handle) {
                        handle.element.hide()
                    }
                }
            }
            else {
                const panel = container.panels[panel_index]

                panel.show()

                if (panel_index == 0) {
                    // mostrar la primer manija
                    let handle = this.handles[0]

                    if (handle) {
                        handle.element.show()
                    }
                }
                else {
                    // mostrar la manija a la izquierda de este panel
                    let handle = this.handles[panel_index - 1]

                    if (handle) {
                        handle.element.show()
                    }
                }
            }
        }
    }

    apply_lengths(panels: JQuery[], lengths: number[], mode: 'vertical' | 'horizontal') {
        for (let i = 0; i < panels.length; i++) {
            const style = panels[i].attr('style')
            const new_length = `${mode == 'horizontal' ? 'width':'height'}: ${lengths[i]}%;`
            if (style) {
                const regexp = new RegExp(`${mode == 'horizontal' ? 'width' : 'height'}:\\s+\\d+(\\.\\d+)?%;`)
                const new_style = style.replace(regexp, new_length)
                panels[i].attr('style', new_style)
            }
            else {
                panels[i].attr('style', new_length)
            }
        }
    }

    insert_after<A>(element: A, arr: A[], index: number) {
        if (index >= arr.length) {
            arr.push(element)
            return arr
        }
        else {
            return [...arr.slice(0, index + 1), element, ...arr.slice(index + 1)]
        }
    }

    set_container_dimensions(container_index: number, width: number, height: number) {
        super.set_container_dimensions(container_index, width, height)
    }
}