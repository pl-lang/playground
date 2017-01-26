import {BaseError} from 'interprete-pl'


function title (s: string) {
    return `<pre class="title small-title error-title">${s}</pre>`
}

export interface Template {
    title: string,
    description?: string
    suggestion?: string
}

export default function get_template (data: BaseError): Template {
    if (data.reason in templates) {
        return templates[data.reason](data)
    }
    else {
        return templates.default(data)
    }
}

const templates: {default: (d: BaseError)=>Template, [t:string]: (d: BaseError)=>Template} = {
    default: (d) => {
        return {title: title('Tu programa contiene un error')}
    }
}