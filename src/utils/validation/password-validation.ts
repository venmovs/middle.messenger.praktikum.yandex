import { Validation } from './validation';

class PasswordValidation extends  Validation{

    constructor() {
        super();
        this.length = 6;
        this.regExp = /^[a-z0-9]+$/ && /[a-z]/ && /[0-9]/;
    }
}

export { PasswordValidation };