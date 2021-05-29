let userTmpl = `
{{#each data}}
<div class="chat-user mb-1" data-tag-name="{{this.name}}">
    <div class="chat-user__avatar" style="background-image: url('{{this.img}}')"></div>
    <div class="chat-user__name text-primary">{{this.name}}</div>
    <div class="chat-user__message text-primary">{{this.message}}</div>
    <div class="chat-user__time text-primary">{{this.time}}</div>
    {{#if count}}<div class="chat-user__notification">{{this.count}}</div>{{/if}}
</div>
{{/each}}`;

export { userTmpl };