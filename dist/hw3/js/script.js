// Задание №1
console.log("\t ***** Задание №1 *****");
console.log("***** Решение №1 *****");
	task1:
	for (var i = 0, n; i <= 100; i++) {

		if (i == 2) { // Число 2 - простое.
			console.log(i);
		}

		n = (i - 1); // Выставляем делитель на единицу меньше делимого.
		while (n > 1) { //Выполняем цикл пока делитель не будет равен 1.
			if ((i % n) == 0) { // Если i делится без остатка на делитель больше еденицы - число составное.
				continue task1;
			} else if ((i % n) != 0 && n > 2) { // Пока i не делится без остатка и делитель больше 2 уменьшаем делитель на единицу.
				--n;
			} else { //Если между (i - 1) и 1 не найдено число, на которое бы i делилось без остатка - число простое.
				console.log(i);
				continue task1;
			}
		}
	}

	for (var i =0, n; i <= 10; ++i) {

	}
 
	function simple() {
		return (i % n) == 0;
	}

console.log("***** Решение №2 *****");

	var length = 100;
	var arr = [];
	createArray(length);
	arr.forEach(excludeElements);
	arr.forEach(printArray);
	


	function createArray(length) {
		for (var i = 2; i < length; i++) {
			if (i == 2) {
				arr.push(i);
			} else if ((i % 2) != 0) {
				arr.push(i);
			}
		}
	}

	function excludeElements(element) {
		for (var arrLength = arr.length, index = (arr.indexOf(element) + 1); index < arrLength; ++index ) {
			if ((arr[index] % element) == 0) {
				arr.splice(arr.indexOf(arr[index]), 1);
			}
		}
	}

	function printArray(element) {
  	console.log(element);
	}



// Задание №2
console.log("\t ***** Задание №2 *****");

	var i = 0;

	do {
		if (i == 0) {
			console.log(i + " – это ноль");
		} else if ((i % 2) == 0) {
			console.log(i + " – четное число");
		} else {
			console.log(i + " – нечетное число");
		}
		++i
	} while (i <= 10)

// Задание №3
console.log("\t ***** Задание №3 *****");

	for (var i = 0; i < 9; console.log(++i)) {}

// Задание №4
console.log("\t ***** Задание №4 *****");

	for (var i = 0, x = ""; i < 20; i++) {
		console.log(x = x + "x");
	}