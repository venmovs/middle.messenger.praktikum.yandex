import { response } from 'express';
import { AuthApi, IRegistrationRequest, IloginRequest } from './auth-api';
import { Router } from '../router/router';

const registrationApi = new AuthApi();
const route = new Router('#app');

class AuthController {
    public register(data: IRegistrationRequest) {
        return registrationApi.signUp(data).then((response) => {
            console.log('signUp', response);
            if (response.status === 200) {
                return response;
            }
        });
    }

    public user() {
        return registrationApi.user()
            .then((response) => {
                console.log('user', response);
            if (response.status === 200) {
                return JSON.parse(response.response);
            }
            return null;
        }).catch(() => this.logout()); //TODO сделать переход на логин
    }

    public auth(data: IloginRequest) {
         return registrationApi.signIn(data).then((response) => {
                console.log('auth', response);
                if (response.status === 200) {
                    route.go('/chats');
                }
                return response;
            });
    }

    public logout() {
        return registrationApi.logout().then((response) => {
            console.log('logout', response);
            if (response.status === 200) {
                return response;
            }
        });
    }
}

export { AuthController };
