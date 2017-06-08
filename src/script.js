// Prompt

// var answer = prompt('Каково «официальное» название JavaScript?', '');
// Проверка стандарта
// if (answer == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? «ECMAScript»!');
// }

// var number = parseInt(prompt(''));

// if (number == 0) {
//     alert('0');
// } else if (number > 0) {
//     alert('1');
// } else {
//     alert('-1');
// }

// Проверка логина
// var login;
// var passw;

// login = prompt('ВведитеЛогин', '');

// if (login == 'Админ') {
//     passw = prompt('ВведитеПароль', '');

//     if (passw == 'Черный Властелин') {
//       alert('Добро пожаловать!');
//     } else if (passw == null) {
//     		alert('Ввод отменен');
//     } else {
//       	alert('Пароль неверен');
//     } 

// } else if (login == null) {
// 		alert('Ввод отменен');
// }  else {
//     alert('Я вас не знаю');
// }

// Перепишите 'if..else' в '?'
// var a = 2;
// var b = 3;
// document.write((a + b < 4) ? 'Мало' : 'Много');

// Перепишите 'if..else' в '?'
// var message;
// var login; 

// 	(login == 'Вася') ? message = 'Привет' :
// 	(login == 'Директор') ? message = 'Здравствуйте' :
// 	(login == '') ? message = 'Нет логина' :
// 	'';

// alert(message);

// Логические операторы

// alert( null || 2 || undefined );

// alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// alert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );

// Напишите условие if для проверки того факта, что переменная age находится между 14 и 90 включительно.

// let age = 20;

// if (age >= 14 && age <= 90) {
// 	alert('You have come to the right place!')
// }

// Напишите условие if для проверки того факта, что age НЕ находится между 14 и 90 включительно.
// Сделайте два варианта условия: первый с использованием оператора НЕ !, второй – без этого оператора.

if (age < 14 || age > 90)
if (!(age >= 14 && age <= 90)
