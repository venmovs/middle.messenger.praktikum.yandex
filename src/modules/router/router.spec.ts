import { expect } from 'chai';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><div class="app"></div>', {
    url: 'http://localhost:1234',
});

// @ts-ignore
global.window = dom.window.document.defaultView;

describe('window history', () => {
    it('should change history', () => {
        const historyLength = window.history.length;
        window.history.pushState({ page: 'login' }, 'Login', '/login');
        const { pathname } = window.location;

        expect(pathname).to.eq('/login');
        expect(historyLength + 1).to.eq(window.history.length);
    });
});
