import { BaseError } from 'interprete-pl'

export interface Template {
    title: string
    description?: string
    suggestion?: string
}

export default function get_template(data: BaseError): Template {
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

    return {pieces, styles}
}

const templates: { default: Template, [t: string]: Template } = {
    default: { title: 'Tu programa contiene un error' },

    '@assignment-incompatible-types': {
        title: 'Se intento asignar un valor de tipo $code{@received} a una variable de tipo $code{@expected}.',
        description: 'Las variables de tipo $code{@expected} no pueden contener datos de tipo $code{@received}.',
        suggestion: 'Deberias cambiar el tipo de la variable o cambiar el valor que quieres asignarle.'
    }
}