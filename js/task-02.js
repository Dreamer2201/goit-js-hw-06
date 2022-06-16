const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const createItem = ingredients.map((ingredient) => `<li class = "item">${ingredient}</li>`).join('');
listIngredients.innerHTML = createItem;


console.log(listIngredients);