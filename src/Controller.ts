import { Interprete, ValorExpresionInspeccionada, programaCompiladoACadena, Accion, Errors, Value, Failure, Success, VarState } from 'interprete-pl'
import { Action, ActionKind } from './Actions'
import AppUI from './AppUI'
import * as $ from 'jquery'

export class Dispatcher {
    controller: Controller

    constructor(c: Controller) {
        this.controller = c
    }

    dispatch(a: Action) {
        this.controller.do(a)
    }
}

export class Controller {
    private app_ui: AppUI
    private interprete: Interprete
    private program_running: boolean
    private porPasos: boolean
    private porInstrucciones: boolean
    private debug: boolean
    private expresionesInspecciondas: { cadenaExpresion: string, id: number }[]

    constructor(container: JQuery, debug: boolean) {
        const action_dispatcher = new Dispatcher(this)

        this.debug = debug

        this.program_running = false
        this.porPasos = false
        this.porInstrucciones = false

        this.app_ui = new AppUI($('body'), container, action_dispatcher, { debug: debug })

        this.interprete = new Interprete()

        this.expresionesInspecciondas = []
    }

    do(a: Action) {
        switch (a.kind) {
            case ActionKind.Execute:
                /**
                 * Limpiar interfaz
                 */
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })

                /**
                 * Si no hay ningun programa corriendo:
                 *  -   "Cargar" el programa en el interprete
                 *  -   Si hay errores mostrarlos.
                 *  -   Si no hay errores y si el modo debug esta activado mostrar el programa compilado
                 *  -   Si no hay errores desactivar los botones y ejecutar el programa.
                 */
                if (!this.program_running) {
                    this.porPasos = false
                    this.porInstrucciones = false
                    const reporteCompilacion = this.interprete.cargarPrograma(a.code)

                    if (reporteCompilacion.error == false) {
                        this.app_ui.clear_vars()
                        this.program_running = true

                        if (this.debug) {
                            this.do({ kind: ActionKind.ShowCompiledCode, code: programaCompiladoACadena(reporteCompilacion.result) })
                        }

                        this.do({ kind: ActionKind.DisableButtons })
                        this.execute()
                    }
                    else {
                        const errors = reporteCompilacion.result

                        for (let error of errors) {
                            this.do({ kind: ActionKind.ShowMessage, message: error })
                        }
                    }
                }
                break
            case ActionKind.Step:
                this.step()
                break
            case ActionKind.FocusEditor:
                this.app_ui.focus_editor()
                break
            case ActionKind.MoveCursor:
                this.move_cursor(a.line, a.column)
                break
            case ActionKind.DragHandle:
                break
            case ActionKind.ShowMessage:
                this.show_message(a.message)
                break
            case ActionKind.ClearMessages:
                this.clear_messages()
                break
            case ActionKind.SendInput:
                this.send_input(a.input)
                this.resume_program()
                break
            case ActionKind.Write:
                this.write(a.value)
                break
            case ActionKind.ClearOutput:
                this.clear_output()
                break
            case ActionKind.ShowCompiledCode:
                this.show_compiled_code(a.code)
                break
            case ActionKind.CompileAndShow:
                {
                    this.do({ kind: ActionKind.ClearMessages })
                    this.do({ kind: ActionKind.ClearOutput })
                    const reporteCompilacion = this.interprete.cargarPrograma(a.code)
                    if (reporteCompilacion.error == false) {
                        this.do({ kind: ActionKind.ShowCompiledCode, code: programaCompiladoACadena(reporteCompilacion.result) })
                    }
                    else {
                        const errors = reporteCompilacion.result

                        for (let error of errors) {
                            this.do({ kind: ActionKind.ShowMessage, message: error })
                        }
                    }
                }
                break
            case ActionKind.ExecuteBySteps:
                /**
                * Limpiar interfaz
                */
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })
                // "limpiar" variables en inspeccion
                for (let i = 0, l = this.expresionesInspecciondas.length; i < l; i++) {
                    this.app_ui.mostrarMensajeInicialInspeccion(i)
                }

                /**
                 * Si no hay ningun programa corriendo:
                 *  -   "Cargar" el programa en el interprete
                 *  -   Si hay errores mostrarlos.
                 *  -   Si no hay errores y si el modo debug esta activado mostrar el programa compilado
                 *  -   Si no hay errores desactivar los botones y ejecutar el programa.
                 */
                if (!this.program_running) {
                    this.porPasos = true
                    this.porInstrucciones = false
                    const reporteCompilacion = this.interprete.cargarPrograma(a.code)

                    if (reporteCompilacion.error == false) {
                        this.app_ui.show_step_controls()
                        this.program_running = true

                        if (this.debug) {
                            this.do({ kind: ActionKind.ShowCompiledCode, code: programaCompiladoACadena(reporteCompilacion.result) })
                        }

                        this.do({ kind: ActionKind.DisableButtons })
                        // this.do({ kind: ActionKind.Step })
                    }
                    else {
                        const errors = reporteCompilacion.result

                        for (let error of errors) {
                            this.do({ kind: ActionKind.ShowMessage, message: error })
                        }
                    }
                }
                break
            case ActionKind.ExecuteByInstructions:
                /**
                * Limpiar interfaz
                */
                this.do({ kind: ActionKind.ClearMessages })
                this.do({ kind: ActionKind.ClearOutput })
                // "limpiar" variables en inspeccion
                for (let i = 0, l = this.expresionesInspecciondas.length; i < l; i++) {
                    this.app_ui.mostrarMensajeInicialInspeccion(i)
                }

                /**
                 * Si no hay ningun programa corriendo:
                 *  -   "Cargar" el programa en el interprete
                 *  -   Si hay errores mostrarlos.
                 *  -   Si no hay errores y si el modo debug esta activado mostrar el programa compilado
                 *  -   Si no hay errores desactivar los botones y ejecutar el programa.
                 */
                if (!this.program_running) {
                    this.porPasos = false
                    this.porInstrucciones = true
                    const reporteCompilacion = this.interprete.cargarPrograma(a.code)

                    if (reporteCompilacion.error == false) {
                        this.app_ui.show_step_controls()
                        this.program_running = true

                        if (this.debug) {
                            this.do({ kind: ActionKind.ShowCompiledCode, code: programaCompiladoACadena(reporteCompilacion.result) })
                        }

                        this.do({ kind: ActionKind.DisableButtons })
                        this.do({ kind: ActionKind.Step })
                    }
                    else {
                        const errors = reporteCompilacion.result

                        for (let error of errors) {
                            this.do({ kind: ActionKind.ShowMessage, message: error })
                        }
                    }
                }
                break
            case ActionKind.StopExecution:
                this.program_running = false
                this.app_ui.hide_step_controls()
                this.app_ui.write('Programa finalizado correctamente.')
                this.do({ kind: ActionKind.EnableButtons })
                break
            case ActionKind.StopExecutionWithError:
                this.program_running = false
                this.app_ui.hide_step_controls()
                this.app_ui.write('Programa finalizado con un error.')
                this.do({ kind: ActionKind.EnableButtons })
                break
            case ActionKind.StopExecutionUser:
                this.program_running = false
                this.app_ui.hide_step_controls()
                this.app_ui.write('Programa finalizado por el usuario.')
                this.do({ kind: ActionKind.EnableButtons })
                break
            case ActionKind.DisableButtons:
                this.app_ui.disable_buttons()
                break
            case ActionKind.EnableButtons:
                this.app_ui.enable_buttons()
                break
            case ActionKind.HidePanel:
            case ActionKind.ShowPanel:
                this.app_ui.toggle_panel(a.container_index, a.panel_index)
                break
            case ActionKind.SendVarName:
                this.inspeccionarExpresion(a.name)
                break
            case ActionKind.UpdateVars:
                throw new Error("Accion 'ActionKind.UpdateVars' obsoleta.")
            case ActionKind.RemoveVarFromInspection:
                this.remove_var(a.id)
                break
            case ActionKind.RemoveMsgFromInspection:
                throw new Error("Accion 'ActionKind.RemoveMsgFromInspection:' obsoleta.")
        }
    }

    remove_var(id: number) {
        let expresionEncontrada = false
        let i = 0
        while (!expresionEncontrada) {
            if (this.expresionesInspecciondas[i].id == id) {
                expresionEncontrada = true
            }
            else {
                i++
            }
        }
        this.expresionesInspecciondas = [...this.expresionesInspecciondas.slice(0, i), ...this.expresionesInspecciondas.slice(i + 1)]
        this.app_ui.remove_var(id)
    }

    inspeccionarExpresion(expresion: string) {
        const id = this.app_ui.agregarExpresionInspeccionada(expresion)
        this.expresionesInspecciondas.push({ cadenaExpresion: expresion, id })
    }

    resume_program() {
        if (this.porPasos || this.porInstrucciones) {
            this.step()
        }
        else {
            this.execute()
        }
    }

    step() {
        if (this.porPasos) {
            if (!this.interprete.programaFinalizado()) {
                /**
                * Reporte de ejecucion.
                */
                let reporte = this.interprete.darPaso()

                if (reporte.error == false) {
                    let { accion, numeroLineaFuente, numeroInstruccion } = reporte.result

                    switch (accion) {
                        case Accion.ESCRIBIR:
                            this.write(this.interprete.obtenerEscrituraPendiente())
                            break
                        case Accion.LEER:
                        case Accion.NADA:
                            break
                    }

                    this.move_cursor(numeroLineaFuente, 0)
                    this.highlight_instruction(numeroInstruccion)

                    const valoresExpresiones = this.expresionesInspecciondas.map(e => this.interprete.inspeccionarExpresion(e.cadenaExpresion))
                    for (let i = 0, l = valoresExpresiones.length; i < l; i++) {
                        const valor = valoresExpresiones[i]
                        if (valor.error == false) {
                            this.app_ui.actualizarValorInspeccion(i, valor.result)
                        }
                        else {
                            this.app_ui.mostrarErrorInspeccion(i)
                        }
                    }

                    if (this.interprete.programaFinalizado()) {
                        this.do({ kind: ActionKind.StopExecution })
                    }
                }
                else {
                    this.do({ kind: ActionKind.StopExecutionWithError })
                    this.do({ kind: ActionKind.ShowMessage, message: reporte.result })
                }
            }
        }
        else if (this.porInstrucciones) {
            if (!this.interprete.programaFinalizado()) {
                /**
                * Reporte de ejecucion.
                */
                let reporte = this.interprete.ejecutarInstruccion()

                if (reporte.error == false) {
                    let { accion, numeroLineaFuente, numeroInstruccion } = reporte.result

                    switch (accion) {
                        case Accion.ESCRIBIR:
                            this.write(this.interprete.obtenerEscrituraPendiente())
                            break
                        case Accion.LEER:
                        case Accion.NADA:
                            break
                    }

                    this.move_cursor(numeroLineaFuente, 0)
                    this.highlight_instruction(numeroInstruccion)

                    const valoresExpresiones = this.expresionesInspecciondas.map(e => this.interprete.inspeccionarExpresion(e.cadenaExpresion))
                    for (let i = 0, l = valoresExpresiones.length; i < l; i++) {
                        const valor = valoresExpresiones[i]
                        if (valor.error == false) {
                            this.app_ui.actualizarValorInspeccion(i, valor.result)
                        }
                        else {
                            this.app_ui.mostrarErrorInspeccion(i)
                        }
                    }

                    if (this.interprete.programaFinalizado()) {
                        this.do({ kind: ActionKind.StopExecution })
                    }
                }
                else {
                    this.do({ kind: ActionKind.StopExecutionWithError })
                    this.do({ kind: ActionKind.ShowMessage, message: reporte.result })
                }
            }
        }
    }

    move_cursor(line: number, column: number) {
        this.app_ui.move_cursor(line, column)
    }

    highlight_instruction(inst: number) {
        this.app_ui.highlight_instruction(inst)
    }

    show_compiled_code(code: string) {
        if (code != null) {
            this.app_ui.code_panel.contents = code
        }
    }

    clear_output() {
        this.app_ui.clear_output()
    }

    clear_messages() {
        this.app_ui.clear_messages()
    }

    show_message(m: Errors.Base) {
        this.app_ui.show_message(m)
    }

    execute() {
        if (!this.interprete.programaFinalizado()) {
            /**
             * Reporte de ejecucion.
             */
            let reporte = this.interprete.ejecutarHastaElFinal()

            let programaFinalizado = false

            while (!programaFinalizado && reporte.error == false) {
                let { accion, numeroLineaFuente, numeroInstruccion } = reporte.result

                switch (accion) {
                    case Accion.ESCRIBIR:
                        this.write(this.interprete.obtenerEscrituraPendiente())
                        break
                    case Accion.LEER:
                    case Accion.NADA:
                    break
                }

                this.move_cursor(numeroLineaFuente, 0)
                this.highlight_instruction(numeroInstruccion)

                if (!this.interprete.programaFinalizado()) {
                    reporte = this.interprete.ejecutarHastaElFinal()
                }
                else {
                    programaFinalizado = true
                }
            }

            if (reporte.error == true) {
                this.do({ kind: ActionKind.ShowMessage, message: reporte.result })
                this.do({ kind: ActionKind.StopExecutionWithError })
            }
            else {
                this.do({ kind: ActionKind.StopExecution })
            }
        }
        else {
            this.do({ kind: ActionKind.StopExecution })
        }
    }

    send_input(input: string) {
        this.interprete.enviarLectura(input)
    }

    write(v: Value) {
        this.app_ui.write(v)
    }

    read() {
        this.app_ui.read()
    }
}