import { BaseAPI } from '../base-api/base-api';
import { authObj } from '../api-operations';

interface IRegistrationRequest {
    login: string,
    first_name: string,
    email: string,
    password: string,
    second_name: string,
    phone: string,
    confirm_password: string,
}

interface ILoginRequest {
    login: string,
    password: string,
}

class AuthApi extends BaseAPI {
    signUp(data: IRegistrationRequest): Promise<unknown> {
        return this.http.post(authObj.signUp, { data });
    }

    signIn(data: ILoginRequest): Promise<unknown> {
        return this.http.post(authObj.signIn, { data });
    }

    logout(): Promise<unknown> {
        return this.http.post(authObj.logout);
    }

    user(): Promise<unknown> {
        return this.http.get(authObj.authUser);
    }
}

export {
    AuthApi,
    IRegistrationRequest,
    ILoginRequest,
};
