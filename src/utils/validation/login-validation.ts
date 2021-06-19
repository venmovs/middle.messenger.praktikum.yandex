import { Validation } from './validation';

class LoginValidation extends Validation {
    constructor() {
        super();
        this.regExp = /^[a-z]+$/i;
        this.length = 4;
    }
}

export { LoginValidation };
