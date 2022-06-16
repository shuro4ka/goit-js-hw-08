import _ from "lodash";
const LOCALSTORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const persistantFormState = localStorage.getItem(LOCALSTORAGE_KEY);

if(persistantFormState) {
    const FORM_DATA =  JSON.parse(persistantFormState);
    form.email.value = FORM_DATA.email;
    form.message.value = FORM_DATA.message;
}

form.addEventListener( "input", _.throttle((event) => {
    onInputSave(event);
}, 500));

form.addEventListener('submit', onSubmit);

function onInputSave(event) {
    event.preventDefault();
    const DataObject = getFormData(form);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(DataObject));
}

function onSubmit(event) {
    event.preventDefault();

    const DataObject = getFormData(form);

    if(DataObject.email !== '' || DataObject.message !== '') {
        console.log(DataObject);
    }

    event.target.email.value = '';
    event.target.message.value = '';
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function getFormData(form) {
    const {
        elements: { email, message }
    } = form;

    return {
        email: email.value,
        message: message.value
    }
}