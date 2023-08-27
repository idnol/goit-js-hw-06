let counterValue = 0;

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', function () {
        item.dataset.action === 'decrement' ? counterValue -= 1 : counterValue++;
        document.querySelector('#value').textContent = counterValue;
    })
})