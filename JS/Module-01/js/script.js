'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let login = prompt('Пожалуйста, введите логин');
let cancelLogin = ('Отменено пользователем!');
let anotherLogin = ('Доступ запрещен!');
let cancelPassword = ('Отменено пользователем!');
let anotherPassword = ('Доступ запрещен!');
let rightPassword = ('Добро пожаловать!');
if (login === null) {
    alert(cancelLogin);
} else if (login !== adminLogin) {
    alert(anotherLogin);
} else {
    let rightLogin = prompt('Пожалуйста, введите пароль');
    if (rightLogin === null) {
        alert(cancelPassword);
    } else if (rightLogin !== adminPassword) {
        alert(anotherPassword);
    } else {
        alert(rightPassword);
    }    
}
