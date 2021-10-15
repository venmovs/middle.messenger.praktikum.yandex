import sinon from 'sinon';
import { expect } from 'chai';
import { ILoginRequest, IRegistrationRequest } from './auth-api';

const FormData = require('form-data');
const authApi = require('./auth-api');

const { AuthApi } = authApi;

global.FormData = FormData;

describe('Auth API', () => {
    const requests: sinon.SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        let xhr: sinon.SinonFakeXMLHttpRequestStatic;
        (global as any).XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

        xhr.onCreate = (request: sinon.SinonFakeXMLHttpRequest) => {
            requests.push(request);
        };
    });

    afterEach(() => {
        (global as any).XMLHttpRequest.restore();

        requests.length = 0;
    });

    it('should send POST /auth/signup on signup', () => {
        const authApi = new AuthApi();
        const data: IRegistrationRequest = {
            email: '', first_name: '', login: '', password: '', phone: '', second_name: '', confirm_password: '',
        };

        authApi.signUp(data);

        expect(requests.length).to.eq(1);
        expect(requests[0].method).to.eq('POST');
        expect(requests[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/signup');
    });

    it('should send POST /auth/signIn on signIn', () => {
        const authApi = new AuthApi();
        const data: ILoginRequest = { login: '', password: '' };

        authApi.signIn(data);

        expect(requests[0].method).to.eq('POST');
        expect(requests[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/signin');
    });

    it('should send POST /auth/logout on logout', () => {
        const authApi = new AuthApi();

        authApi.logout();

        expect(requests.length).to.eq(1);
        expect(requests[0].method).to.eq('POST');
        expect(requests[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/logout');
    });

    it('should send GET /auth/user on user', () => {
        const authApi = new AuthApi();

        authApi.user();

        expect(requests.length).to.eq(1);
        expect(requests[0].method).to.eq('GET');
        expect(requests[0].url).to.eq('https://ya-praktikum.tech/api/v2/auth/user');
    });
});
