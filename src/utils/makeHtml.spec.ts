import { expect } from 'chai';
import { makeHtmlFromTemplate } from './makeHtml';

const messageTemplate: string = `
    <p class="message-plate {{#if boolean}} message-plate_green {{/if}}">
        {{string}}
    </p>
`;

const { JSDOM } = require('jsdom');

describe('Make Html', () => {
    let dom: Window | null = null;
    beforeEach(() => {
        dom = new JSDOM('<!doctype html><html><head></head><body></body></html>');
    });

    const buildHtml = (data: object): { window: Window } | null => {
        const html = makeHtmlFromTemplate(messageTemplate, data);
        if (dom === null) return null;
        dom.window.document.body.innerHTML = html;
        return dom;
    };

    const getTextContent = (data: object, className: string): string | null => {
        const dom = buildHtml(data);
        if (dom === null) return null;
        const classes = dom.window.document.body.querySelector(`.${className}`);
        let content: string | null = null;
        if (classes !== null && classes.textContent) {
            content = classes.textContent.trim();
        }
        return content;
    };

    it('string is full', () => {
        const data = { boolean: true, string: 'Привет' };
        const content = getTextContent(data, 'message-plate');
        expect(content).to.eq(data.string);
    });

    it('string is empty', () => {
        const data = { boolean: true, string: '' };
        const content = getTextContent(data, 'message-plate');
        expect(content).to.eq(data.string);
    });

    it('string is null', () => {
        const data = { boolean: true, string: null };
        const content = getTextContent(data, 'message-plate');
        expect(content).to.eq('');
    });

    it('boolean is true', () => {
        const data = { boolean: true, string: '' };
        const content = getTextContent(data, 'message-plate_green');
        expect(typeof content).to.eq('string');
    });

    it('boolean is false', () => {
        const data = { boolean: false, string: '' };
        const content = getTextContent(data, 'message-plate_green');
        expect(content).to.eq(null);
    });

    it('boolean is string', () => {
        const data = { boolean: 'false', string: '' };
        const content = getTextContent(data, 'message-plate_green');
        expect(content).to.eq('');
    });
});
