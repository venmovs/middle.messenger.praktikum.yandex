import { BaseAPI } from '../base-api/base-api';
import { userObj } from '../api-operations';

interface IProfileInformation {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}

interface IPassword {
    oldPassword: string,
    newPassword: string,
}

class UsersApi extends BaseAPI {
    profileInformation(data: IProfileInformation): Promise<unknown> {
        return this.http.put(userObj.profile, { data });
    }

    profileAvatar(data: FormData): Promise<unknown> {
        return this.http.put(userObj.avatar, { data });
    }

    password(data: IPassword): Promise<unknown> {
        return this.http.put(userObj.password, { data });
    }
}

export {
    IPassword,
    IProfileInformation,
    UsersApi,
};
