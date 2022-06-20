function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxEl = document.querySelector('#boxes');

console.log(inputEl);
console.log(btnCreate);
console.log(btnDestroy);

inputEl.addEventListener('input', onChangeInput);


function onChangeInput(event) {
  const amount = event.currentTarget.value;
  console.log(amount);

  btnCreate.addEventListener('click', createBoxes);
  function createBoxes() {
    let fragment = new DocumentFragment();
    for (let i = 1; i <= amount; i +=1) {
      const divEl = document.createElement('div');
      divEl.style.width = '30px';
      divEl.style.height = '30px';
      divEl.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(divEl);

    } divBoxEl.appendChild(fragment);
  } console.log(divBoxEl);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

}




