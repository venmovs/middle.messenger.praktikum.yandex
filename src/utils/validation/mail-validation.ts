import { Validation } from './validation';

class MailValidation extends Validation {
    constructor() {
        super();
        this.regExp = /^\S+@\S+\.\S+$/;
    }
}

export { MailValidation };
