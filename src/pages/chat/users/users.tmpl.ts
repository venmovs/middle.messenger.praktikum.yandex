const userTemplate: string = `
<div class="chat-user mb-1" data-tag-name="{{name}}">
    <div class="chat-user__avatar" style="background-image: url('{{img}}')"></div>
    <span class="chat-user__name text-primary">{{name}}</span>
    <span class="chat-user__message text-primary">{{message}}</span>
    <span class="chat-user__time text-primary">{{time}}</span>
    {{#if count}}<div class="chat-user__notification">{{count}}</div>{{/if}}
</div>`;

export { userTemplate };