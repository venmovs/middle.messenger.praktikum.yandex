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

    public async user() {
        try {
            await registrationApi.user().then((response) => {
                console.log(response);
            });
        } catch (error) {
            console.log(error);
        }
    }

    async auth(data: IloginRequest) {
        try {
            await registrationApi.signIn(data).then((response) => {
                console.log('auth', response);
                if (response.status === 200) {
                    route.go('/chat');
                    return response;
                }
            });
        } catch (error) {
            // router.go('/error');
        }
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
