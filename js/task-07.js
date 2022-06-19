const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', spanFontChange);

function spanFontChange() {
    spanEl.style.fontSize = inputEl.value + 'px';
}
