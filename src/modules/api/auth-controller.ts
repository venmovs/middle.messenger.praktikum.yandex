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

    private user() {
        try {
            return registrationApi.user()
                .then((response) => {
                    if (response.status === 200) {
                        return state.save('user',
                            JSON.parse(response.response));
                    }
                    return null;
                }).catch((error) => {
                    console.log('user not found -', JSON.parse(error.responseText).reason);
                    route.go('/');
                });
        } catch (e) {
            console.error(e);
        }
        return null;
    }

    public async getUserInfo() {
        const userInfo = state.get('user');
        if (userInfo === null) {
            await this.user();
        }
        return state.get('user');
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
