let messageTemplate = `
{{#each data}}
<div class="message-plate__wrapper flex direction-column {{#if this.mine}} align-item-end {{/if}}">
    <div class="message-plate message-plate_blue {{#if this.mine}} message-plate_green {{/if}}">
        {{this.text}}
    </div>
    <time class="text-primary text-primary_gray">{{this.time}}</time>
</div>
{{/each}}
`;

export { messageTemplate };