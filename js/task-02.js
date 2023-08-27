const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(item => {
  const el = document.createElement('li');
  el.textContent = item;
  el.classList.add('item');
  document.querySelector('#ingredients').append(el)
})