import { Errors } from 'interprete-pl'

export interface Template {
    title: string
    description?: string
    suggestion?: string
}

export default function get_template(data: Errors.Base): Template {
    const template = data.reason in templates ? templates[data.reason] : templates.default

    const parsed_template: Template = { title: style(interpolate(data, template.title)) }

    if ('description' in template) {
        parsed_template['description'] = style(interpolate(data, template.description))
    }

    if ('suggestion' in template) {
        parsed_template['suggestion'] = style(interpolate(data, template.suggestion))
    }

    return parsed_template
}

function interpolate(data: any, s: string): string {
    let result = ''

    /**
     * Regexp que encuentra los nombres de las
     * las propiedades cuyos valores hay que sacar
     * de data
     */
    const r = /@\w+/g

    if (r.test(s)) {
        /**
        * Partes de la cadena que no cambian
        */
        const pieces = s.split(r)

        /**
         * Nombres de las propiedades
         */
        const props = s.match(r).map(v => v.slice(1))

        let i = 0
        for (; i < props.length; i++) {
            result += pieces[i] + data[props[i]]
        }

        result += pieces[i]

        return result
    }
    else {
        return s
    }
}

function style(s: string): string {
    let result = ''

    /**
     * Regexp que encuentra los nombres
     * de los estilos que hay que aplicar
     */
    const r = /\$\w+/g

    if (r.test(s)) {
        /**
         * Partes de la cadena que no cambian y estilos
         */
        const {pieces, styles} = split_at_styles(s)

        let i = 0
        for (; i < styles.length; i++) {
            let styled_content = ''

            switch (styles[i].name) {
                case 'code':
                    styled_content = `<code class="code">${styles[i].content}</code>`
                    break
            }

            result += pieces[i] + styled_content
        }
        result += pieces[i]
        return result
    }
    else {
        return s
    }
}

interface Style {
    name: string
    content: string
}

function split_at_styles (s: string): {pieces: string[], styles: Style[]} {
    const pieces: string[] = []
    const styles: Style[] = []

    let current_piece = ''

    let index = 0
    
    while (index < s.length) {
        if (s[index] == '$') {
            index++
            let name = ''
            /**
             * leer el nombre del estilo
             */
            while (s[index] != '{') {
                name += s[index]
                index++
            }
            /**
             * esto hace que no se agregue el '{' al
             * contenido
             */
            index++
            /**
             * leer su contenido
             */
            let content = ''

            const string_length = s.length

            let open_braces = 1

            while (open_braces > 0 && index < string_length) {
                if (s[index] == '}') {
                    open_braces--
                    if (open_braces > 0) {
                        content += s[index]
                    }
                }
                else {
                    content += s[index]
                }
                index++
            }

            styles.push({name, content})
            pieces.push(current_piece)

            current_piece = ''
        }
        else {
            current_piece += s[index]
            index++
        }
    }

    pieces.push(current_piece)

    return {pieces, styles}
}

const templates: { default: Template, [t: string]: Template } = {
    default: { title: 'Tu programa contiene un error: $code{@where::@reason}' },

    '@assignment-incompatible-types': {
        title: 'Se intentó asignar un valor de tipo $code{@received} a una variable de tipo $code{@expected}.',
        description: 'Las variables de tipo $code{@expected} no pueden contener datos de tipo $code{@received}.',
        suggestion: 'Deberias cambiar el tipo de la variable o cambiar el valor que quieres asignarle.'
    },

    'repeated-variable': {
        title: 'Variable repetida',
        description: 'Se declararon dos variables con el mismo nombre. La primera es de tipo $code{@first_type} y la segunda es de tipo $code{@second_type}.',
        suggestion: 'Para arreglar este error modifica el nombre de alguna de las dos variables.'
    },

    '@call-undefined-module': {
        title: 'Modulo indefinido',
        description: 'Se llamó al modulo $code{@name} pero este no fue declarado en el programa.',
        suggestion: 'Debes definir todos los modulos que uses en tu programa.'
    },

    'undefined-variable': {
        title: 'Variable indefinida',
        description: 'Se invocó a la variable $code{@name} pero ésta no fue declarada en ningún lugar.',
        suggestion: 'Debes declarar todas las variables que utilices en tu programa, ya sea en el ámbito global (el modulo principal) o en el ámbito local (dentro de algun modulo).'
    },

    '@invocation-extra-indexes': {
        title: 'Se invocó una variable con demasiados indices',
        description: 'La variable $code{@name} fue invocada con @indexes indice/s pero solo tiene @dimensions dimension/es.',
        suggestion: 'Si una variable tiene $code{@dimensions} dimensiones entonces solo puede ser invocada con hasta $code{@dimensions} indices.'
    },

    '@assignment-long-string': {
        title: 'Cadena demasiado larga',
        description: 'Se intentó asignar una cadena de @string_length caracteres al vector $code{@name} que es de longitud @vector_length.',
        suggestion: 'La longitud de una cadena no puede superar la longitud del vector que la contiene.'
    },

    '@read-long-string': {
        title: 'Se leyó una cadena demasiado larga',
        description: 'Se intentó asignar una cadena de @string_length caracteres al vector $code{@name} que es de longitud @vector_length.',
        suggestion: 'La longitud de una cadena no puede superar la longitud del vector que la contiene.'
    },

    '@read-incompatible-types': {
        title: 'Se leyó un valor del tipo equivocado',
        description: 'Ingresaste un valor del tipo equivocado. El programa esperaba recibir un valor de tipo $code{@expected} pero ingresaste un valor de tipo $code{@received}.',
        suggestion: 'Para solucionar este error vuelve a ejecutar el programa e ingresa un valor del tipo adecuado. Para mas informacion sobre los tipos de las variables haz click [aqui].'
    },

    '@call-incompatible-argument': {
        title: 'Se llamó un módulo con un argumento del tipo equivocado',
        description: 'El módulo $code{@name} esperaba que su argumento numero @index sea de tipo $code{@expected} pero recibió un argumento de tipo $code{@received}',
        suggestion: 'Al llamar al módulo asegurate de pasarle argumentos del tipo adecuado.'
    },

    'bad-condition': {
        title: 'Se encontró una condición de un tipo invalido',
        description: 'Una estructura de control tiene una condición de tipo $code{@received}.',
        suggestion: 'La condición de una estructura de control siempre debe ser una expresión que devuelva un valor de tipo lógico.'
    },

    '@for-bad-counter': {
        title: 'El contador de un bucle $code{para} es de un tipo invalido.',
        suggestion: 'Se usó un contador de tipo $code{@received}, pero la variable que controla un bucle $code{para} siempre debe ser de tipo ${entero}'
    },

    '@for-bad-init': {
        title: 'El contador de un bucle $code{para} fue inicializado con un valor de un tipo invalido',
        suggestion: 'Se inicializó el contador con un valor del tipo $code{@received} pero el contador de un bucle para debe inicializarce con un valor de tipo $code{entero}',
    },

    '@for-bad-last': {
        title: 'El valor final de un bucle $code{para} es de un tipo invalido',
        description: 'El valor final declarado es de tipo $code{@received} pero debe ser de tipo $code{entero}.',
        suggestion: 'Ademas, debes asegurarte de que el valor final sea superior al valor inicial, de otra forma el bucle $code{para} se convertirá en un bucle infinito.'
    },

    'bad-return': {
        title: 'Una función de tipo $code{@declared} retorna un valor de tipo $code{@received}',
        description: 'Las funciones siempre deben retornar datos del tipo que declaran. Si se declara que una funcion retorna datos de tipo $code{@entero} entonces todos sus enunciados $code{retornar} deben devolver valores de tipo $code{@entero}.',
        suggestion: 'Cambia todos los enunciados de la funcion para que retornen datos de tipo $code{@declared}.'
    },

    '@call-wrong-arg-amount': {
        title: 'Un modulo fue llamado con la cantidad equivocada de argumentos',
        description: 'El modulo $code{@name} fue llamado con @received argumento/s pero esperaba recibir @expected.',
        suggestion: 'Debes invocar al modulo $code{@name} con @expected argumento/s.'
    },

    '@invocation-bad-index': {
        title: 'Se utilizó un índice del tipo equivocado',
        description: 'Se invocó un arreglo con un índice de tipo $code{@received}.',
        suggestion: 'Todos los índices de un arreglo deben ser de tipo $code{entero}.'
    },

    '@read-bad-arg': {
        title: 'Argumento invalido en una llamada a $code{leer}',
        description: 'Este error ocurrió porque el argumento número @index de una llamada a $code{leer} no representa a una variable si no a un valor literal.',
        suggestion: 'Todos los argumentos de las llamadas a $code{leer} deben representar a una variable, a una cadena, o a una celda de un vector.'
    },

    '@call-bad-ref-arg': {
        title: 'En una llamada a $code{@module}: se recibió un valor literal en lugar de una variable',
        description: 'Este error ocurrió porque el argumento número @index de una llamada a $code{@module} no representa a una variable si no a un valor literal. El parametro $code{@param_name} del módulo esperaba recibir una variable de tipo $code{@param_expected}.',
        suggestion: 'El argumento enviado a este parámetro tomado por referencia debe representar a un variable del tipo $code{@param_expected}.'
    },

    'bad-write-arg': {
        title: 'En una llamada a $code{@name}: se recibió un valor que no se puede mostrar.',
        description: 'Este error ocurrió porque el argumento número @index de una llamada a $code{@name} no representa un valor que se pueda mostrar en la pantalla. Los tipos de datos que pueden mostrarse son: $code{entero} $code{logico} $code{caracter} $code{real} $code{caracter[n]} (donde $code{n} es un numero entero).',
        suggestion: 'Cuando llamas a $code{@name} asegura te pasarle argumentos de alguno de los tipos soportados.'
    }
}