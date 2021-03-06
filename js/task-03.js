const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listImages = document.querySelector('.gallery');

// Варіант 1.
const createItems = images.map((image) =>
`<img src = "${image.url}" alt = "${image.alt}" width = "1260" height = "750"></img>`);
listImages.insertAdjacentHTML('beforeend', createItems);
console.log(listImages);

// Варіант 2.
// const elementsImages = images.map((image) => {
//   const imageEl = document.createElement('img');

//         imageEl.src = image.url;
//         imageEl.alt = image.alt;
//         imageEl.width = 1260;
//         imageEl.height = 750;

//   return imageEl;
// });

// listImages.append(...elementsImages);

// console.log(listImages);