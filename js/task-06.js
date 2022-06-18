const inputEl = document.querySelector('validation-input');

console.log(inputEl);
inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);


function onInputFocus() {
    console.log('focus input');
};
function onInputBlur() {

    console.log('blur focus');
    inputEl.addEventListener('input', onInputChange);

};
function onInputChange(event) {
    console.log(event.currentTarget.value);
}

