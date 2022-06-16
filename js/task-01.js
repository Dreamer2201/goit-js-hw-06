const allCategories = document.querySelectorAll('.item');

const numbersCategories = allCategories.length;
console.log(`Number of categories: ${numbersCategories}`);

const allCategoriesNames = document.querySelectorAll('h2');
console.log(`Category: ${allCategoriesNames[0].textContent}`);

const firstCategory = allCategories[0].querySelectorAll('li');
console.log(`Elements: ${firstCategory.length}`);

console.log(`Category: ${allCategoriesNames[1].textContent}`);
const secondCategory = allCategories[1].querySelectorAll('li');
console.log(`Elements: ${secondCategory.length}`);

console.log(`Category: ${allCategoriesNames[2].textContent}`);
const thridCategory = allCategories[2].querySelectorAll('li');
console.log(`Elements: ${thridCategory.length}`);



