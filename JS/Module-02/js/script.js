'use strict';
const numbers = [];
let total = 0;
let userInput;
do {
   userInput = prompt('Пожалуйста. введите число');  
   !Number.isNaN(userInput) ? numbers.push(userInput) : alert('Было введено не число, попробуйте еще раз');
   console.log(numbers);
} while (userInput !== null);
for (let el of numbers) {
    total += Number(el);
}
alert(`Общая сумма чисел равна ${total}`);