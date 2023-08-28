document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = this.elements.password;
    const email = this.elements.email;
    let obj = {};
    if (password.value !== '' && email.value !== '') {
        obj[email.name] = email.value;
        obj[password.name] = password.value;
        console.log(obj)
        this.reset();
    } else {
        alert('всі поля повинні бути заповнені');
    }
})
