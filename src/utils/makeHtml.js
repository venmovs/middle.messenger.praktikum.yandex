import Handlebars from 'handlebars';

const makeHtmlFromTemplate = function (template, data, parent) {

    const compileProp = Array.isArray(data)
        ? { data: data }
        : data;

    const tmpl = Handlebars.compile(template.trim())(compileProp);

    const fragment = document.createElement('template');
    fragment.innerHTML = tmpl;


    parent.append(fragment.content);
};

export {makeHtmlFromTemplate};