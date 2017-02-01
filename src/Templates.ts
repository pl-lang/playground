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
                    styled_content = `<span class="code">${styles[i].content}</span>`
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
        title: 'Se intento asignar un valor de tipo $code{@received} a una variable de tipo $code{@expected}.',
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
    }
}