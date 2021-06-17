import { Validation } from './validation';

class LoginValidation extends Validation{

    private length: number;

    constructor() {
        super();
        this.length = 4;
    }

}

export { LoginValidation };