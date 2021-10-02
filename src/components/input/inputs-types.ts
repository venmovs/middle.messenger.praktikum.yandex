import { LoginValidation } from '../../utils/validation/login-validation';
import { PasswordValidation } from '../../utils/validation/password-validation';
import { MailValidation } from '../../utils/validation/mail-validation';
import { PhoneValidation } from '../../utils/validation/phone-validation';
import { NameValidation } from '../../utils/validation/name-validation';
import { IInput } from './input';

const loginValidation = new LoginValidation();
const passwordValidation = new PasswordValidation();
const mailValidation = new MailValidation();
const phoneValidation = new PhoneValidation();
const nameValidation = new NameValidation();

const loginInput: IInput = {
    title: 'Логин',
    name: 'login',
    type: 'text',
    error: 'мало символов',
    value: 'ыыы',
    events: {
        focus: (event: Event) => {
            loginValidation.clear(event);
        },
        blur: (event: Event) => {
            loginValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const passwordInput: IInput = {
    title: 'Пароль',
    name: 'password',
    type: 'text',
    error: 'слабый пароль',
    value: '',
    events: {
        focus: (event: Event) => {
            passwordValidation.clear(event);
        },
        blur: (event: Event) => {
            passwordValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const mailInput: IInput = {
    title: 'Почта',
    name: 'email',
    type: 'text',
    error: 'почта с ошибкой',
    value: '',
    events: {
        focus: (event: Event) => {
            mailValidation.clear(event);
        },
        blur: (event: Event) => {
            mailValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const phoneInput: IInput = {
    title: 'Телефон',
    name: 'phone',
    type: 'text',
    error: 'номер с ошибкой',
    value: '',
    events: {
        focus: (event: Event) => {
            phoneValidation.clear(event);
        },
        blur: (event: Event) => {
            phoneValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const nameInput: IInput = {
    title: 'Имя',
    name: 'first_name',
    type: 'text',
    error: 'больше 3 букв',
    value: '',
    events: {
        focus: (event: Event) => {
            nameValidation.clear(event);
        },
        blur: (event: Event) => {
            nameValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const secondNameInput: IInput = {
    title: 'Фамилия',
    name: 'second_name',
    type: 'text',
    error: 'больше 3 букв',
    value: '',
    events: {
        focus: (event: Event) => {
            nameValidation.clear(event);
        },
        blur: (event: Event) => {
            nameValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const confirmPasswordInput: IInput = {
    title: 'Пароль (еще раз)',
    name: 'confirm_password',
    type: 'text',
    error: 'слабый пароль',
    value: '',
    events: {
        focus: (event: Event) => {
            passwordValidation.clear(event);
        },
        blur: (event: Event) => {
            passwordValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const newPassword: IInput = {
    title: 'Новый пароль',
    name: 'newPassword',
    type: 'text',
    error: 'слабый пароль',
    value: '',
    events: {
        focus: (event: Event) => {
            passwordValidation.clear(event);
        },
        blur: (event: Event) => {
            passwordValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

const oldPassword: IInput = {
    title: 'Старый пароль',
    name: 'oldPassword',
    type: 'text',
    error: 'слабый пароль',
    value: '',
    events: {
        focus: (event: Event) => {
            passwordValidation.clear(event);
        },
        blur: (event: Event) => {
            passwordValidation.check(event);
        },
    },
    settings: { withInternalID: true },
};

export {
    loginInput,
    passwordInput,
    mailInput,
    secondNameInput,
    phoneInput,
    nameInput,
    confirmPasswordInput,
    newPassword,
    oldPassword,
};
