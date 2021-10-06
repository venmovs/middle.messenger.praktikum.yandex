import { IPassword, IProfileInformation, UsersApi } from './users-api';
import { Router } from '../../router/router';

const userApi = new UsersApi();
const router = new Router();

class UsersController {
    public profileInformation(data: IProfileInformation) {
        return userApi.profileInformation(data).then((response) => {
            if (response.status === 200) {
                router.go('/profile');
            }
        }).catch((e) => console.error('Информация по профилю не получилось изменить', e));
    }

    public userAvatar(data: FormData) {
        return userApi.profileAvatar(data).then((response) => {
            console.log(response);
        }).catch((e) => console.error('Аватар не получилось изменить', e));
    }

    public password(data: IPassword) {
        return userApi.password(data).then((response) => {
            if (response.status === 200) {
                router.go('/profile');
            }
        }).catch((e) => console.error('Пароль не получилось изменить', e));
    }

    public searchUsers(data: { login: string }) {
        return userApi.searchUsers(data).then((response) => {
            if (response.status === 200) {
                return JSON.parse(response.response);
            }
        }).catch((e) => console.error('Пользователей не получилось найти', e));
    }
}

export { UsersController };
