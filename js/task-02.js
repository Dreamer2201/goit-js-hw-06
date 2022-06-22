const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

// Варіант 1.

const createItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = `${ingredient}`;
  return itemEl;
});
listIngredients.append(...createItems);
 console.log(listIngredients);


// Варіант 2.

// for (let i = 0; i <= ingredients.length; i ++) {
// const ingredient = ingredients[i];
// const itemEl = document.createElement('li');
// itemEl.classList.add('item');
// itemEl.textContent = `${ingredient}`;
// listIngredients.appendChild(itemEl);
// }
// console.log(listIngredients);

// Варіант 3.

// const createItem = ingredients.map((ingredient) => `<li class = "item">${ingredient}</li>`).join('');
// listIngredients.innerHTML = createItem;
// console.log(listIngredients);

