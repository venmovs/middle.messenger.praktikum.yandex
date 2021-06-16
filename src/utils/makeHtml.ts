import Handlebars from 'handlebars';

const makeHtmlFromTemplate = (template: string, data: object): string => {

    const compileProp = Array.isArray(data)
        ? { data: data }
        : data;

    return Handlebars.compile(template.trim())(compileProp);

};

export {makeHtmlFromTemplate};