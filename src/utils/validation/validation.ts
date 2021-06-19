abstract class Validation {
    protected regExp!: RegExp | null;
    protected length!: number | null;

    visualizeValidity(isValid: boolean, event: Event): void {
        const target = event.target as HTMLTextAreaElement;
        const errorMessage = target.nextElementSibling;
        if (isValid) {
            target.classList.remove('custom-text-input_error');
            target.classList.remove('notValid');

            if (errorMessage !== null && !errorMessage.classList.contains('hidden')) {
                errorMessage.classList.add('hidden');
            }
        } else {
            target.classList.add('custom-text-input_error');
            target.classList.add('notValid');

            if (errorMessage !== null && errorMessage.classList.contains('hidden')) {
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
        const target = event.target as HTMLTextAreaElement;
        if (this.regExp && isValid) {
            isValid = this.regExp.test(target.value);
        }

        if (this.length && isValid) {
            const target = event.target as HTMLTextAreaElement;
            if (target.value !== null) {
                isValid = target.value.length > this.length;
            }
        }

        this.visualizeValidity(isValid, event);
    }

    protected validate(event: Event): boolean {
        console.log(event);
        return true;
    }
}

export { Validation };
