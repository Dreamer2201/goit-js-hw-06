const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
console.log(event.currentTarget.value);

    spanEl.textContent = event.currentTarget.value;

};
