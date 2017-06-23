// Задание №1
console.log("\t ***** Задание №1 *****");

	var i = 2;
	var n = 2;

	while (i < 10) {
		if (((i - 1) % n) != 0) {
			++n;
		} else {
			console.log(i);
			n = 2;
			++i
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