import { BaseAPI } from './base-api/base-api';
import { authObj } from './api-operations';

interface IRegistrationApi {
    login: string,
    first_name: string,
    email: string,
    password: string,
    second_name: string,
    phone: string,
    confirm_password: string,
}

class RegistrationApi extends BaseAPI {
    create(data: IRegistrationApi) {
        this.http.post(authObj.signUp, {data: data});
    }
}

export { RegistrationApi, IRegistrationApi };
