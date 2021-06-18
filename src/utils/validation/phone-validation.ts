import { Validation } from './validation';

class PhoneValidation extends Validation {

    constructor() {
        super();
        this.regExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    }
}

export { PhoneValidation };