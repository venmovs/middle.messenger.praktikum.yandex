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
    tittle: 'Логин',
    name: 'login',
    type: 'text',
    error: 'мало символов',
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
    tittle: 'Пароль',
    name: 'password',
    type: 'text',
    error: 'слабый пароль',
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
    tittle: 'Почта',
    name: 'mail',
    type: 'text',
    error: 'почта с ошибкой',
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
    tittle: 'Телефон',
    name: 'phone',
    type: 'text',
    error: 'номер с ошибкой',
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
    tittle: 'Имя',
    name: 'name',
    type: 'text',
    error: 'больше 3 букв',
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
    tittle: 'Фамилия',
    name: 'secondName',
    type: 'text',
    error: 'больше 3 букв',
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
    tittle: 'Пароль (еще раз)',
    name: 'password',
    type: 'text',
    error: 'слабый пароль',
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
};
