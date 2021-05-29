import Handlebars from "handlebars";

const makeHtmlFromTemplate = function (template, data, parent) {

    let tmpl;

    if (Array.isArray(data)) {
        tmpl = Handlebars.compile(template.trim())({data: data});
    } else {
        tmpl = Handlebars.compile(template.trim())(data);
    }

    let fragment = document.createElement('template');
    fragment.innerHTML = tmpl;


    parent.append(fragment.content);
};

export {makeHtmlFromTemplate};