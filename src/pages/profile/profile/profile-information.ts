import {Info} from "../info/info";

const profileInformation: { key: string, id: string, value: string }[] = [
    { key: 'Логин', id: 'login', value: '' },
    { key: 'Телефон', id: 'phone', value: '' },
    { key: 'Имя', id: 'first_name', value: '' },
    { key: 'Почта', id: 'email', value: '' },
    { key: 'Фамилия', id: 'second_name', value: '' },
];

const createProfileInformation = (infoValue: Record<string, string>[]): Info[] => {
    return infoValue.map((info) => {
        return new Info(info);
    });
};

export { profileInformation, createProfileInformation };
