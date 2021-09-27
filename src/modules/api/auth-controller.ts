import { response } from 'express';
import { AuthApi, IRegistrationRequest, IloginRequest } from './auth-api';
import { Router } from '../router/router';

const registrationApi = new AuthApi();
const route = new Router('#app');

class AuthController {
    public async register(data: IRegistrationRequest) {
        try {
            await registrationApi.signUp(data).then((response) => {
                console.log('signUp', response);
                if (response.status === 200) {
                    return response;
                }
            });
        } catch (error) {
            // router.go('/error');
        }
    }

    public user() {
        try {
           return registrationApi.user().then((response) => {
                if (response.status === 200) {
                    return JSON.parse(response.response);
                }
            });
        } catch (error) {
            route.go('/');
        }
        return null;
    }

    protected auth(data: IloginRequest) {
        try {
            return registrationApi.signIn(data).then((response) => {
                console.log('auth', response);
                if (response.status === 200) {
                    route.go('/chats');
                }
                return response;
            });
        } catch (error) {
            // router.go('/error');
        }
        return null;
    }

    async logout() {
        try {
            await registrationApi.logout().then((response) => {
                console.log('logout', response);
                if (response.status === 200) {
                    return response;
                }
            });
        } catch (error) {
            // router.go('/error');
        }
    }
}

export { AuthController };
