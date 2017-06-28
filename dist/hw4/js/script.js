"use strict"

console.log("\t\t********* Задание №1 *********");

toObject("");

function toObject(arg) {

	// Проверяем является ли введенное значение числом.
	if (isNaN(arg)) {
		console.log("Введите число. Допустимое размер числа не более 999.");
		return;
	}

	// Создаем объект и конвертируем число в строку.
	var obj = {};
	arg = arg.toString();
	var length = arg.length;


	// Если длинна строки не превышает 3, присваиваем значения посимвольно в объект.
	if (length <= 3) {
		switch(true) {
			case length == 3:
				obj.units = arg.charAt(2);
				obj.tens = arg.charAt(1);
				obj.hundreds = arg.charAt(0);
				break;
			case length == 2:
				obj.units = arg.charAt(1);
				obj.tens = arg.charAt(0);
				break;
			case length == 1:
				obj.units = arg.charAt(0);
				break;
		}
	} else {
		console.log("Число превышает допустимое значение. Задайте число менее 1000.");
	}
	console.log ("Объект:", obj);
}

console.log("\t\t********* Задание №2 *********");

// Читать комментарии в отлидчике.
console.log("// Модицифированна игра написанная на вебинаре. Изменена процедура логирования, добавлен метод.")
console.log("// В скрипте game.js отображение хода по номеру реализованно посредством метода showMove(n), где n номер хода. Вывод идет в консоль.\n// Запуск игры из консоли через start()\n// Показ хода game.showMove(n).")