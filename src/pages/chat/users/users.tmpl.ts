const userTemplate: string = `
<div class="chat-user mb-1" data-tag-name="{{name}}">
    <div class="chat-user__avatar" style="background-image: url('{{ avatar }}')"></div>
    <span class="chat-user__name text-primary">{{title}}</span>
    <span class="chat-user__message text-primary">{{last_message}}</span>
    <span class="chat-user__time text-primary">{{time}}</span>
    {{#if unread_count}}<div class="chat-user__notification">{{unread_count}}</div>{{/if}}
</div>`;

export { userTemplate };
