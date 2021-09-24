import { BaseAPI } from './base-api/base-api';
import { authObj } from './api-operations';

interface IRegistrationRequest {
    login: string,
    first_name: string,
    email: string,
    password: string,
    second_name: string,
    phone: string,
    confirm_password: string,
}

interface IloginRequest {
    login: string,
    password: string,
}

class AuthApi extends BaseAPI {
    signUp(data: IRegistrationRequest): Promise<unknown> {
        console.log(this.http);
        return this.http.post(authObj.signUp, { data });
    }

    signIn(data: IloginRequest): Promise<unknown> {
        return this.http.post(authObj.signIn, { data });
    }

    logout(): Promise<unknown> {
        console.log('logout');
        return this.http.post(authObj.logout);
    }
}

export {
    AuthApi,
    IRegistrationRequest,
    IloginRequest,
};
