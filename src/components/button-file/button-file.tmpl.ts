const buttonFileTemplate: string = `
<label class="entry-field__file custom-file-upload flex justify-content-center align-item-center {{classes}}">
    <input accept=".jpg, .jpeg, .png"
           type="file">
    <img src="{{image}}" class="icon" alt="file">
</label>
`;

export { buttonFileTemplate };
