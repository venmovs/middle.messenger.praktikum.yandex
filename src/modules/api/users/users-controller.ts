import { IPassword, IProfileInformation, UsersApi } from './users-api';

const userApi = new UsersApi();

class UsersController {
    public profileInformation(data: IProfileInformation) {
        return userApi.profileInformation(data).then((response) => {
            console.log(response);
        }).catch((e) => console.error('Информация по профилю не получилось изменить', e));
    }

    public userAvatar(data: FormData) {
        return userApi.profileAvatar(data).then((response) => {
            console.log(response);
        }).catch((e) => console.error('Аватар не получилось изменить', e));
    }

    public password(data: IPassword) {
        return userApi.password(data).then((response) => {
            console.log(response);
        }).catch((e) => console.error('Пароль не получилось изменить', e));
    }
}

export { UsersController };
