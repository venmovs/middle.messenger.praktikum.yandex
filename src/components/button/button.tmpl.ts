const buttonTemplate: string = `
<button class="button button_big mb-1 {{ classes }}" 
        type="{{#if type }}{{ type }}{{else}}button{{/if}}">
    {{text}}
</button>
`;

export { buttonTemplate };
