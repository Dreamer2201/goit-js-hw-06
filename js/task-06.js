const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onFocusInput);

function onFocusInput(event) {
  if(event.currentTarget.value.length === +inputEl.dataset.length) {
   return inputEl.classList.add('valid');
  }
    inputEl.classList.add('invalid');
    
}