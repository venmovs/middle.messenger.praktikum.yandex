const buttonImageTemplate: string = `
<button class="button button_small flex justify-content-center align-item-center {{classes}}"
        type="{{#if type }}{{ type }}{{else}}button{{/if}}">
    <img src="{{image}}" class="icon" alt="{{name}}">
</button>
`;

export { buttonImageTemplate };
