const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arr = [];
ingredients.forEach(item => {
  const el = document.createElement('li');
  el.textContent = item;
  el.classList.add('item');
  arr.push(el.outerHTML)
})

document.querySelector('#ingredients').innerHTML = arr.join('');