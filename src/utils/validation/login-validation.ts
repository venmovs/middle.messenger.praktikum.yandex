import { Validation } from './validation';
import { regExp } from './regExpVariables';

class LoginValidation extends Validation {
    constructor() {
        const { onlyLetters } = regExp;
        super();
        this.regExp = onlyLetters;
        this.length = 4;
    }
}

export { LoginValidation };
