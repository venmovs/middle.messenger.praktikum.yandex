const messageTemplate: string = `
<div class="message-plate__wrapper flex direction-column {{#if mine}} align-item-end {{/if}}">
    <p class="message-plate message-plate_blue {{#if mine}} message-plate_green {{/if}}">
        {{text}}
    </p>
    <time class="text-primary text-primary_gray">{{time}}</time>
</div>
`;

export { messageTemplate };
