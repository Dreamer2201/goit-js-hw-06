function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxEl = document.querySelector('#boxes');

inputEl.addEventListener('input', onChangeInput);

function onChangeInput(event) {
  const amount = event.currentTarget.value;
  console.log(amount);

  btnCreate.addEventListener('click', createBoxes);
  function createBoxes() {
    let fragment = new DocumentFragment();
    
    for (let i = 1; i <= amount; i +=1) {
      const divEl = document.createElement('div');
    
      const value = (20 + i * 10);
      divEl.style.width = `${value}px`;
      divEl.style.height = `${value}px`;
         
      divEl.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(divEl);

    } divBoxEl.appendChild(fragment);
  } 

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
}




