const onlyLetters: RegExp = /^[a-z]+$/i;
const phone: RegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const mail: RegExp = /^\S+@\S+\.\S+$/;
const lettersAndNumbers: RegExp = /^[a-z0-9]+$/ && /[a-z]/ && /[0-9]/;

const regExp = {
    onlyLetters,
    phone,
    mail,
    lettersAndNumbers,
};

export { regExp };
