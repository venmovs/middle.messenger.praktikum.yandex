abstract class Validation {

    protected regExp: RegExp | null;
    protected length: number | null;

    visualizeValidity(isValid: boolean, event: Event): void {
        const errorMessage = event.target?.nextElementSibling;

        if (isValid) {
            event.target?.classList.remove('custom-text-input_error');
            event.target?.classList.remove('notValid');

            if (!errorMessage.classList.contains('hidden')) {
                errorMessage.classList.add('hidden');
            }

        } else {
            event.target?.classList.add('custom-text-input_error');
            event.target?.classList.add('notValid');

            if (errorMessage.classList.contains('hidden')) {
                errorMessage.classList.remove('hidden');
            }
        }
    }

    check(event: Event): void {
        this._validate(event);
    }

    clear(event: Event) {
        this.visualizeValidity(true, event);
    }

    private _validate(event: Event): void {

        let isValid = this.validate(event);

        if (this.regExp && isValid) {
            isValid = this.regExp.test(event.target.value);
        }

        if (this.length && isValid) {
            isValid = event.target.value.length > this.length;
        }

        this.visualizeValidity(isValid, event);

    }

    protected validate(event: Event): boolean {
        return true;
    };

}


export {Validation};