document.querySelector('#font-size-control').addEventListener('change', function () {
    document.querySelector('#text').style.fontSize = `${this.value}px`;
})