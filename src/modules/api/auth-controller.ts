import { response } from 'express';
import { AuthApi, IRegistrationRequest, IloginRequest } from './auth-api';
import { Router } from '../router/router';
import { state } from '../state/state';

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
        let userInfo = state.get('user');
        console.log(userInfo);
        return registrationApi.user()
            .then((response) => {
            if (response.status === 200) {
                return JSON.parse(response.response);
            }
            return null;
        }).catch(() => console.error('user not found')); // TODO сделать переход на логин
    }

    public auth(data: IloginRequest) {
         return registrationApi.signIn(data).then((response) => {
                console.log('auth', response);
                if (response.status === 200) {
                    route.go('/chats');
                }
                return response;
            }).catch((e) => console.log(e));
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
