const input = document.querySelector('#name-input')

input.addEventListener('input', function () {
    document.querySelector('#name-output').textContent = input.value === ''?'Anonymous':input.value;
});