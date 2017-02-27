import 'should'
import { DragLogic, Container } from '../src/DragManager'

class DragTestWrapper extends DragLogic {
    constructor() {
        super()
    }

    drag(container_index: number, handle_index: number, from: { x: number, y: number }, to: { x: number, y: number }) {
        super.drag(container_index, handle_index, from, to)
    }

    add_container(width: number, height: number, mode: 'vertical' | 'horizontal') {
        return super.add_container(width, height, mode)
    }

    add_panel(container_index: number, index: number, new_panel_width: number) {
        return super.add_panel(container_index, index, new_panel_width)
    }

    get_container(container_index: number): Container {
        return super.get_container(container_index)
    }

    clamp(container_index: number, vector: { x: number, y: number }): { x: number, y: number } {
        return super.clamp(container_index, vector)
    }
}

describe('DragLogic', () => {
    it('clamp', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        const v = dl.clamp(0, { x: 600, y: 700 })

        v.should.deepEqual({ x: 500, y: 500 })
    })

    it('modificar paneles horizontales y verticales', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 50) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 50)

        dl.add_panel(1, 0, 50)
        dl.add_panel(1, 1, 50)

        // desplazar la manija completamente hacia la derecha
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 500, y: 0 })
        
        // desplazar la manija completamente hacia abajo
        dl.drag(1, 0, { x: 0, y: 250 }, { x: 0, y: 500 })

        const h_container = dl.get_container(0)
        const v_container = dl.get_container(1)

        h_container.panels[0].length.should.deepEqual(100)
        h_container.panels[1].length.should.deepEqual(0)
        v_container.panels[0].length.should.deepEqual(100)
        v_container.panels[1].length.should.deepEqual(0)
    })

    it('intentar achicar un panel que ya tiene longitud 0%', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 50) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 50)

        // desplazar la manija completamente hacia la derecha
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 500, y: 0 })

        // intentar desplazarla mas alla del final de su contenedor
        dl.drag(0, 0, { x: 500, y: 0 }, { x: 750, y: 0 })

        const h_container = dl.get_container(0)

        // no deberian haberse registrado cambios en el ancho del contenedor
        h_container.panels[0].length.should.deepEqual(100)
        h_container.panels[1].length.should.deepEqual(0)
    })

    it('intentar desplazar una manija mas alla del final de su contenedor', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 50) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 50)

        // intentar desplazarla mas alla del final de su contenedor
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 750, y: 0 })

        const h_container = dl.get_container(0)

        // no deberian haberse registrado cambios luego de que el panel
        // a la izquierda de la manija haya llegado al 100% de la longitud del contenedor
        h_container.panels[0].length.should.deepEqual(100)
        h_container.panels[1].length.should.deepEqual(0)
    })

    it('si un panel tiene longitud 0, al achicarlo se achica el panel posterior', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 25)
        dl.add_panel(0, 2, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 3, 25)

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.deepEqual(25)
        h_container.panels[1].length.should.deepEqual(25)
        h_container.panels[2].length.should.deepEqual(25)
        h_container.panels[3].length.should.deepEqual(25)
        
        // desplazar la manija hasta colapsar el panel a su derecha
        dl.drag(0, 0, { x: 125, y: 0 }, { x: 250, y: 0 })

        h_container.panels[0].length.should.deepEqual(50)
        h_container.panels[1].length.should.deepEqual(0)
        h_container.panels[2].length.should.deepEqual(25)
        h_container.panels[3].length.should.deepEqual(25)

        // desplazar la manija un poco mas a la derecha
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 300, y: 0 })

        h_container.panels[0].length.should.deepEqual(60)
        h_container.panels[1].length.should.deepEqual(0)
        h_container.panels[2].length.should.deepEqual(15)
        h_container.panels[3].length.should.deepEqual(25)
    })

    it('si un panel tiene longitud 0, al achicarlo se achican los paneles posteriores', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 25)
        dl.add_panel(0, 2, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 3, 25)

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.deepEqual(25)
        h_container.panels[1].length.should.deepEqual(25)
        h_container.panels[2].length.should.deepEqual(25)
        h_container.panels[3].length.should.deepEqual(25)

        // desplazar la manija hasta colapsar el panel a su derecha
        dl.drag(0, 0, { x: 125, y: 0 }, { x: 250, y: 0 })

        h_container.panels[0].length.should.deepEqual(50)
        h_container.panels[1].length.should.deepEqual(0)
        h_container.panels[2].length.should.deepEqual(25)
        h_container.panels[3].length.should.deepEqual(25)

        // desplazar la manija hasta colapsar el panel siguiente
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 375, y: 0 })

        h_container.panels[0].length.should.deepEqual(75)
        h_container.panels[1].length.should.deepEqual(0)
        h_container.panels[2].length.should.deepEqual(0)
        h_container.panels[3].length.should.deepEqual(25)

        // desplazar la manija hasta colapsar el ultimo panel
        dl.drag(0, 0, { x: 375, y: 0 }, { x: 500, y: 0 })

        h_container.panels[0].length.should.deepEqual(100)
        h_container.panels[1].length.should.deepEqual(0)
        h_container.panels[2].length.should.deepEqual(0)
        h_container.panels[3].length.should.deepEqual(0)
        
    })
})