"use strict"

initBoard();

function initBoard() {

	var size = 10*10;
	var odd = [13,15,17,19];
	var even = [22,24,26,28];
	var letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "];
	var figures = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
	var chessWrap = document.querySelector('.chess-wrap');

	// Заполняем таблицу пустыми дивами в колличестве 100 штук. Маркируем ячейки классами.
	for (var count = 1; count <= size; count++) {
	  var item = document.createElement('div');
  	chessWrap.appendChild(item);
  	// item.innerText = count;
  	item.classList.add('ch-item', 'ch-item--' + count);
  }

  // Красим ячейки. Четыре строки вниз с шагом 20 от верхних четных и нечетных чисел.
  odd.forEach(paint);
  even.forEach(paint);

  // Используемая функция присвоения классов для покраски.
  function paint(item) {
  	for (var i = 0; i < 4; ++i, item += 20) {
  		var row = document.getElementsByClassName('ch-item--' + item);
  		row[0].classList.add('ch-item--' + 'black');
  	}
	}

	// Заполняем буквами верхню и нижнюю строки.
	for (var i = 1; i <= 10; ++i) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + 'grey');
		row[0].innerText = letters[i - 1];
	}
	for (var i = 91; i <= 100; ++i) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + 'grey');
		row[0].innerText = letters[i - 91];
	}

	// Заполняем цифрами левую и нижнюю колонки.
	for (var i = 11, count = 8; i < 82; i += 10, --count) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + 'grey');
		row[0].innerText = count;
	}
	for (var i = 20, count = 8; i < 91; i += 10, --count) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + 'grey');
		row[0].innerText = count;
	}

	// Заполняем фигурами верхнюю часть доски.
	for (var i = 12; i < 20; ++i) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + figures[i - 12] + '-black');
	}
	for (var i = 22; i < 30; ++i) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + 'pawn-black');
	}	

	// Заполняем фигурами нижнюю часть доски.
	for (var i = 82; i < 90; ++i) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + figures[i - 82] + '-white');
	}
	for (var i = 72; i < 80; ++i) {
		var row = document.getElementsByClassName('ch-item--' + i);
		row[0].classList.add('ch-item--' + 'pawn-white');
	}
	
}
