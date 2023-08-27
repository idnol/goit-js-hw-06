const body = document.querySelector('body');

document.querySelector('.change-color').addEventListener('click', function () {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  document.querySelector('.color').textContent = color;
})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
