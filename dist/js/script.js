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

// if (age < 14 || age > 90)
// if (!(age >= 14 && age <= 90)

// "" + 1 + 0 = 1
// "" - 1 + 0 = -1
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = 45px
// "$" + 4 + 5 = $45

// "4" - 2 = 2

// "4px" - 2 = NaN

// 7 / 0 = infinity

// "  -9\n" + 5 = -4
// "  -9\n" - 5 = -14
// 5 && 2 = 2

// 2 && 5 = 5

// 5 || 0 = 5

// 0 || 5 = 5
// null + 1 = 1
// undefined + 1 = 1
// null == "\n0\n" = false
// +null == +"\n0\n" = true

// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 1; i <= 10; i++) {
// 	if (i % 2 == 0) console.log(i);
// 	// if (!(i % 2)) console.log(i);
// }


// unique: while(true) {
// 	let i = prompt('Enter a number', '');
// 	if (i > 100 || i < 0) {
// 		console.log('One more time');
// 	} else break unique;
// }

// let i = 0;
// while (i < 3) {
//   console.log( "номер " + i + "!" );
//   i++;
// }

// for (var i = 0; i < 3; i++) {
//   console.log( "номер " + i + "!" );
// }

// nextPrime:
//   for (var i = 2; i <= 100; i++) {
		
//     for (var j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log( i ); // простое
//   }

// var a = 2 + 2;

// switch (a) {
//   case 3:
//     console.log( 'Маловато' );
//   case 4:
//     console.log( 'В точку!' );
//   case 5:
//     console.log( 'Перебор' );
//   default:
//     console.log( 'Я таких значений не знаю' );
// }

// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

// let browser = prompt('Insert browser')
// if (browser == 'IE')
// 	console.log( 'О, да у вас IE!' );
// else if (browser == 'Chrome'
// 	|| browser == 'Firefox'
// 	|| browser == 'Safari'
// 	|| browser == 'Opera') {
// 		console.log( 'Да, и эти браузеры мы поддерживаем' );
// }
// else
// 	console.log( 'Мы надеемся, что и в вашем браузере все ок!' );

// var a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = number(prompt('a?', ''));

// switch (a) {
// 	case 0:
// 		console.log( 0 );
// 		break;
// 	case 1:
// 		console.log( 1 );
// 		break;
// 	case 2:
// 	case 3:
// 		console.log( '2,3' );
// 		break;
// }

// var confirm = checkAge((+(prompt('age'))));
// console.log(confirm);

// function checkAge(age) {
//    return (age > 18) || confirm('Родители разрешили?');
// }

// let a = 1;
// let b = 1;
// let result = defineMin(a,b);
// console.log(result);

// function defineMin(a,b) {
// 	if (+a < +b) return a;
// 	else return b;
// }

let a = 2;
let b = 10;
let result = pow(a,b);
console.log(result);

function pow(a,b) {
	let init = a;
	for (;b > 1; b--) {
		a *= init;	
	}
	return a;
}