const inputsTemplate = `
{{#each data}}
<label class="flex direction-column align-item-center mb-1">
    <span class="text-primary text-primary_white">{{this.tittle}}</span>
<input class="custom-text-input text-primary" name="{{this.name}}" type="{{this.type}}">
    </label>
{{/each}}`;

export { inputsTemplate };