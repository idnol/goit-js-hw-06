//example 1

// document.querySelector('.login-form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     let flag = false;
//     let obj = {};
//     this.querySelectorAll('input').forEach(item => {
//         item.value === '' ? flag = true : obj[item.name] = item.value;
//     })
//     flag ? alert('всі поля повинні бути заповнені') : console.log(obj);
//     this.reset();
// })

//example 2
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = this.elements.password;
    const email = this.elements.email;
    let obj = {};
    if (password.value !== '' && email.value !== '') {
        obj[email.name] = email.value;
        obj[password.name] = password.value;
        this.reset();
    } else {
        alert('всі поля повинні бути заповнені');
    }
})
