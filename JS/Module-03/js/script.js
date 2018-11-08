'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let min = 4;
let max = 16;

const isLoginValid = function(login) {
    return login.length >= min && login.length <= max ? true : false;
};
const isLoginUnique = function(allLogins, login) {
    return allLogins.includes(login) ? false : true; 
};
const addLogin = function(logins, login) {
    if (isLoginValid(login)) {
        if (isLoginUnique(logins, login)) {
        logins.push(login);
        console.log('Логин успешно добавлен!');    
        } else {
            console.log('Такой логин уже используется!');
        }      
    } else {
       console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'