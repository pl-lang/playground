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

    add_panel(container_index: number, options?: { fixed: boolean, length: number }) {
        if (options) {
            return super.add_panel(container_index, options)
        }
        else {
            return super.add_panel(container_index)
        }
    }

    get_container(container_index: number): Container {
        return super.get_container(container_index)
    }

    clamp(container_index: number, vector: { x: number, y: number }): { x: number, y: number } {
        return super.clamp(container_index, vector)
    }

    remove(ci: number, pi: number) {
        super.remove_panel(ci, pi)
    }

    add_panel_after(ci: number, ppi: number, options?: { fixed: boolean, length: number }) {
        super.add_panel_after(ci, ppi, options)
    }
}

describe('DragLogic', () => {
    it('clamp', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        const v = dl.clamp(0, { x: 600, y: 700 })

        v.should.deepEqual({ x: 500, y: 500 })
    })

    it('agregar paneles flexibles', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0) // 50% del tamaño del contenedor
        dl.add_panel(0)

        dl.add_panel(1)
        dl.add_panel(1)

        const h_container = dl.get_container(0)
        const v_container = dl.get_container(1)

        h_container.panels[0].length.should.equal(50)
        h_container.panels[1].length.should.equal(50)
        v_container.panels[0].length.should.equal(50)
        v_container.panels[1].length.should.equal(50)
    })

    it('agregar 1 panel de longitud fija y 2 flexibles', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        dl.add_panel(0, { fixed: true, length: 50 }) // 50% del tamaño del contenedor
        dl.add_panel(0)
        dl.add_panel(0)

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.equal(50)
        h_container.panels[1].length.should.equal(25)
        h_container.panels[2].length.should.equal(25)
    })

    it('agregar un panel flexible cuando uno fijo ya ocupa todo el ancho', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        dl.add_panel(0, { fixed: true, length: 100 }) // 100% del tamaño del contenedor
        dl.add_panel(0)

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.equal(100)
        h_container.panels[1].length.should.equal(0)
    })

    it('remover paneles flexibles', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel(0)

        const h_container = dl.get_container(0)

        // remover los paneles del medio
        dl.remove(0, 1)
        dl.remove(0, 1)

        h_container.panels.length.should.equal(2)
        
        h_container.panels[0].length.should.equal(50)
        h_container.panels[1].length.should.equal(50)
    })

    it('remover paneles no-flexibles', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')

        dl.add_panel(0, { fixed: true, length: 50 })
        dl.add_panel(0, { fixed: true, length: 50 })

        const h_container = dl.get_container(0)
        
        dl.remove(0, 1)

        h_container.panels.length.should.equal(1)

        h_container.panels[0].length.should.equal(50)
    })

    it('agregar un panel flexible entre otros dos', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel_after(0, 0)

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.be.approximately(33.3, 0.05)
        h_container.panels[1].length.should.be.approximately(33.3, 0.05)
        h_container.panels[2].length.should.be.approximately(33.3, 0.05)
    })

    it('agregar un panel no-flexible entre dos paneles flexibles', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel_after(0, 0, { fixed: true, length: 60 })

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.be.equal(20)
        h_container.panels[1].length.should.be.equal(60)
        h_container.panels[2].length.should.be.equal(20)
    })

    it('agregar un panel no-flexible entre dos paneles no-flexibles (no hay espacio suficiente para el nuevo)', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        dl.add_panel(0, { fixed: true, length: 40 })
        dl.add_panel(0, { fixed: true, length: 40 })
        dl.add_panel_after(0, 0, { fixed: true, length: 60 })

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.be.equal(40)
        h_container.panels[1].fixed.should.be.equal(false)
        h_container.panels[1].length.should.be.equal(20)
        h_container.panels[2].length.should.be.equal(40)
    })

    it('agregar un panel no-flexible entre dos paneles no-flexibles (hay espacio suficiente para el nuevo)', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        dl.add_panel(0, { fixed: true, length: 20 })
        dl.add_panel(0, { fixed: true, length: 20 })
        dl.add_panel_after(0, 0, { fixed: true, length: 60 })

        const h_container = dl.get_container(0)

        h_container.panels[0].length.should.be.equal(20)
        h_container.panels[1].fixed.should.be.equal(true)
        h_container.panels[1].length.should.be.equal(60)
        h_container.panels[2].length.should.be.equal(20)
    })

    it('modificar paneles horizontales y verticales', () => {
        const dl = new DragTestWrapper()
        dl.add_container(500, 500, 'horizontal')
        dl.add_container(500, 500, 'vertical')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0) // 50% del tamaño del contenedor
        dl.add_panel(0)

        dl.add_panel(1)
        dl.add_panel(1)

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
        dl.add_panel(0) // 50% del tamaño del contenedor
        dl.add_panel(0)

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
        dl.add_panel(0) // 50% del tamaño del contenedor
        dl.add_panel(0)

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

        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel(0)

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

        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel(0)
        dl.add_panel(0)

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