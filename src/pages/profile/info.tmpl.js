let infoTemplate = `
{{#each data}}
<div class="profile__info mb-1">
    {{this.key}}: {{this.value}}
</div>
{{/each}}
`;

export { infoTemplate };