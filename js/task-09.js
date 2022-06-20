
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${getRandomHexColor()}`;
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }






