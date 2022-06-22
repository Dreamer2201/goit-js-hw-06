const allCategories = document.querySelectorAll('.item');
const allCategoriesNames = document.querySelectorAll('h2');
const firstCategory = allCategories[0].querySelectorAll('li');
const secondCategory = allCategories[1].querySelectorAll('li');
const thridCategory = allCategories[2].querySelectorAll('li');
const numbersCategories = allCategories.length;


console.log(`Number of categories: ${numbersCategories}`);
// console.log(`Number of categories: ${allCategories.length}`);
// console.log(`Number of categories: ${document.querySelectorAll('.item').length}`);
console.log(`Category: ${allCategoriesNames[0].textContent}`);
console.log(`Elements: ${firstCategory.length}`);
console.log(`Category: ${allCategoriesNames[1].textContent}`);
console.log(`Elements: ${secondCategory.length}`);
console.log(`Category: ${allCategoriesNames[2].textContent}`);
console.log(`Elements: ${thridCategory.length}`);

// for (let i = 0; i <= allCategories.length; i ++) {
//     console.log(`Category: ${allCategoriesNames[i].textContent}`);
// console.log(`Elements: ${allCategories[i].querySelectorAll('li').length}`);
// };

