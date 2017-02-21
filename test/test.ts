import 'should'
import { DragLogic } from '../src/DragManager'

describe('DragLogic', () => {
    it('modificar paneles horizontales y verticales', () => {
        const dl = new DragLogic()
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

        h_container.panel_length.should.deepEqual([100, 0])
        v_container.panel_length.should.deepEqual([100, 0])
    })

    it('intentar achicar un panel que ya tiene longitud 0%', () => {
        const dl = new DragLogic()
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
        h_container.panel_length.should.deepEqual([100, 0])
    })

    it('intentar desplazar una manija mas alla del final de su contenedor', () => {
        const dl = new DragLogic()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 50) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 50)

        // intentar desplazarla mas alla del final de su contenedor
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 750, y: 0 })

        const h_container = dl.get_container(0)

        // no deberian haberse registrado cambios luego de que el panel
        // a la izquierda de la manija haya llegado al 100% de la longitud del contenedor
        h_container.panel_length.should.deepEqual([100, 0])
    })

    it('si un panel tiene longitud 0, al achicarlo se achica el panel posterior', () => {
        const dl = new DragLogic()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 25)
        dl.add_panel(0, 2, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 3, 25)

        const h_container = dl.get_container(0)

        h_container.panel_length.should.deepEqual([25, 25, 25, 25])
        
        // desplazar la manija hasta colapsar el panel a su derecha
        dl.drag(0, 0, { x: 125, y: 0 }, { x: 250, y: 0 })

        h_container.panel_length.should.deepEqual([50, 0, 25, 25])

        // desplazar la manija un poco mas a la derecha
        dl.drag(0, 0, { x: 250, y: 0 }, { x: 300, y: 0 })

        h_container.panel_length.should.deepEqual([60, 0, 15, 25])
    })

    it('si un panel tiene longitud 0, al achicarlo se achican los paneles posteriores', () => {
        const dl = new DragLogic()
        dl.add_container(500, 500, 'horizontal')

        // agregar dos paneles a cada contenedor
        dl.add_panel(0, 0, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 1, 25)
        dl.add_panel(0, 2, 25) // 50% del tamaño del contenedor
        dl.add_panel(0, 3, 25)

        const h_container = dl.get_container(0)

        h_container.panel_length.should.deepEqual([25, 25, 25, 25])

        // desplazar la manija hasta colapsar el panel a su derecha y todos los siguientes
        dl.drag(0, 0, { x: 125, y: 0 }, { x: 500, y: 0 })

        h_container.panel_length.should.deepEqual([100, 0, 0, 0])
    })
})