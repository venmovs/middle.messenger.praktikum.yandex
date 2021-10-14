import { AuthApi, IRegistrationRequest, ILoginRequest } from './auth-api';
import { Router } from '../../router/router';
import { state } from '../../state/state';

const authApi = new AuthApi();
const route = new Router('#app');

class AuthController {
    public register(data: IRegistrationRequest) {
        return authApi.signUp(data).then((response) => {
            console.log('signUp', response);
            if (response.status === 200) {
                route.go('/chats')
                return response;
            }
        }).catch((e) => console.error(e));
    }

    private user() {
        try {
            return authApi.user()
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

    public auth(data: ILoginRequest) {
         return authApi.signIn(data).then((response) => {
                if (response.status === 200) {
                    route.go('/chats');
                } else {
                    return response;
                }
                return response;
            });
    }

    public logout() {
        return authApi.logout().then((response) => {
            route.go('/');
            if (response.status === 200) {
                return response;
            }
        });
    }
}

export { AuthController };
