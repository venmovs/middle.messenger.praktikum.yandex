const inputsTemplate: string = `
<label class="flex direction-column align-item-center mb-1">
    <span class="text-primary text-primary_white">{{tittle}}</span>
    <input class="custom-text-input text-primary" name="{{name}}" type="{{type}}">
    <span class="hidden custom-text-input__error-message">{{error}}</span>
</label>`;

export { inputsTemplate };