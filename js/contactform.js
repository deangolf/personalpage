//let genderValue = male.checked ? "male" : "female"

//function getGender() {
    //return document.querySelector('input[name="gender"]:checked')
//}

document.addEventListener("DOMContentLoaded", function() {
    fields.fullName = document.getElementById('fullName');
    fields.phone = document.getElementById('phone');
    fields.email = document.getElementById('email');
    // fields.address = document.getElementById('address');
    // fields.houseNumber = document.getElementById('houseNumber');
    // fields.country = document.getElementById('country');
    // fields.password = document.getElementById('password');
    // fields.passwordCheck = document.getElementById('passwordCheck');
    // fields.newsletter = document.getElementById('newsletter');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&amp;&apos;*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
//function isPasswordValid(password) {
    //if (password.length > 5) {
        //return true;
    //}
    //return false
//}
function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}
function isValid() {
    var valid = true;

    valid &= fieldValidation(fields.fullName, isNotEmpty);
    valid &= fieldValidation(fields.phone, isNumber);
    //valid &= fieldValidation(fields.gender, isNotEmpty);
    //valid &= fieldValidation(fields.address, isNotEmpty);
    //valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    //valid &= fieldValidation(fields.houseNumber, isNumber);
    //valid &= fieldValidation(fields.password, isPasswordValid);
    //valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
    valid &= fieldValidation(fields.question, isNotEmpty);
    //valid &= arePasswordsEqual();

    return valid;
}
//function arePasswordsEqual() {
    //if (fields.password.value == fields.passwordCheck.value) {
       // field.password.className = 'placeholderRed';
        //field.passwordCheck.className = 'placeholderRed';
        //return true;
    //}
    //return false
//}
class User {
    constructor(fullName, phone, email, question) {
        this.fullName = fullName;
        this.phone = phone;
        //this.gender = gender;
        //this.address = address;
        //this.country = country;
        this.email = email;
        //this.newsletter = newsletter;
        this.question = question;
    }
}
function sendContact() {
    //fields.gender = getGender();

    document.getElementById("form").submit();



    if (isValid()) {
        let usr = new User(fullName.value, phone.value, email.value, question.value);

        alert(`${usr.fullName} thanks for registering.`)

        } else {
        alert("There was an error")
    }
}