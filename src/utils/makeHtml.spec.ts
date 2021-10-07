import { makeHtmlFromTemplate } from './makeHtml';
import { messageTemplate } from '../pages/chat/message/message.tmpl';

const { JSDOM } = require('jsdom');

describe('Make Html', () => {
    let dom: Window | null = null;
    beforeEach(() => {
        dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');
    });

    it('should create Html from string', () => {
        const data = { mine: true, text: 'Привет', time: '10:30' };

        const html = makeHtmlFromTemplate(messageTemplate, data);
        if (dom === null) return;
        dom.window.document.body.append(html);
        // console.log(dom);
        // const hello = dom.window.document.querySelector('.message-plate');
        for (let i in dom.window.document.body.childNodes) {
            console.log(dom.window.document.body.childNodes[i]?.item);
        }
    });
});
