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
    const r = /\$\w+\{\w+\}/g

    if (r.test(s)) {
        /**
         * Partes de la cadena que no cambian
         */

        const pieces = s.split(r)

        /**
         * Estilos y sus contenidos
         */
        const styles = s.match(r)

        let i = 0
        for (; i < styles.length; i++) {
            const style = styles[i].match(/(\w+)/)[1]
            const content = styles[i].match(/\{(\w+)\}/)[1]

            let styled_content = ''

            switch (style) {
                case 'code':
                    styled_content = `<span class="code">${content}</span>`
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

const templates: { default: Template, [t: string]: Template } = {
    default: { title: 'Tu programa contiene un error' },

    '@assignment-incompatible-types': {
        title: 'Se intento asignar un valor de tipo $code{@received} a una variable de tipo $code{@expected}.',
        description: 'Las variables de tipo $code{@expected} no pueden contener datos de tipo $code{@received}.',
        suggestion: 'Deberias cambiar el tipo de la variable o cambiar el valor que quieres asignarle.'
    }
}