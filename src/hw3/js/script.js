// Задание №1
console.log("\t ***** Задание №1 *****");
	
	task1:
	for (var i = 0, n; i < 100; i++) {

		if (i == 2) { // Число 2 - натуральное.
			console.log(i);
		}

		n = (i - 1); // Выставляем делитель на единицу меньше делимого.
		while (n > 1) { //Выполняем цикл пока делитель не будет равен 1.
			if ((i % n) == 0) { // Если i делится без остатка на делитель больше еденицы - число не натуральное.
				continue task1;
			} else if ((i % n) != 0 && n > 2) { // Пока i не делится без остатка и делитель больше 2 уменьшаем делитель на единицу.
				--n;
			} else { //Если между (i - 1) и 1 не найдено число, на которое бы i делилось без остатка - число натуральное.
				console.log(i);
				continue task1;
			}
		}
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