'use sctrict'

// Загрузка переменных, которых определяяются сразу после загрузки старницы

var BIG_IMAGES_FOLDER = 'jpg/';

function addEvents() {
	var images = document.getElementsByTagName('img');
	var buttons = document.getElementsByTagName('button');
	for (var i = 0, max_i = images.length; i < max_i; i++) {
		images[i].addEventListener('click', showBigImage);
	}
	for (var i = 0, max_i = buttons.length; i < max_i; i++) {
		buttons[i].addEventListener('click', initCart);
	}
}

// Процедура кликанья по картинкам

function showBigImage(arg) {
	var imgName = arg.target.className.split(' ')[1];
	var bigImageName = BIG_IMAGES_FOLDER + imgName + '.jpg';
	var sourceDiv = document.getElementsByClassName('preview')[0];
	var bigImage = document.createElement('img');
	bigImage.src = bigImageName;

	// Проверка существует ли картинка.
	bigImage.onerror = function() {
		sourceDiv.innerHTML = '<h2>' + 'NO SUCH IMAGE!' + '</h2>';
	}

	bigImage.onload = function() {
		bigImage.style.height = '300px';
		bigImage.style.width = '550px';
		sourceDiv.innerHTML = '';
		sourceDiv.appendChild(bigImage);
	}
}


// Процедуры работы с корзиной

// Функция генерации цены товара
function randomPrice() {
	return Math.floor(Math.random() * (5000 - 100 + 1)) + 100;
}

// Товары
var objGoods = {
	good1: ['SmthNice', randomPrice()],
	good2: ['SmthSweet', randomPrice()],
	good3: ['SmthStrange', randomPrice()],
	good4: ['SmthGreat', randomPrice()],
	good5: ['SmthYours', randomPrice()],
	good6: ['SmthMine', randomPrice()],
	good7: ['SmthCheap', randomPrice()],
	good8: ['SmthPriceless', randomPrice()],
	good9: ['SmthBig', randomPrice()],
	good10: ['SmthSmall', randomPrice()]
};

// Корзина
var objCart = {
	goodsCart: [],
	totalCart: 0,
	addToCart: function(btn) {
		// Формируем название товара соединяя good с ID кнопки.
		var goodName = 'good' + btn.target.id;
		// Если такой аргумент есть в объекте objGoods, добавляем этот аргумент в массив goodsCart 
		for (var key in objGoods) {
			if (key == goodName) {
				this.goodsCart.push(objGoods[key]);
			}
		}
		this.goodsCart.sort();
	},
	countTotal: function() {
		for (var i = 0; i < this.goodsCart.length; i++) {
			var good = this.goodsCart[i];
			this.totalCart += good[1];
		}
	},
	printCart: function() {
		var basketDIV = document.getElementsByClassName('goods')[0];
		var totalDIV = document.getElementsByClassName('price')[0];
		var basketLine = document.createElement('div');
		var current = null;
		var qnt = 0;

		for (var i = 0; i < this.goodsCart.length; i++) {
			var good = this.goodsCart[i];
			if (good != current) {
				if (qnt > 0) {
					console.log(current + ' comes --> ' + qnt + ' times');
					good[2] = qnt;
					// basketLine.innerHTML = 'Good: ' + i[0] + ' Price: ' + i[1] + ' QNT ' + i[2];
					// basketLine.className = i;
					// objCart.totalCart += i[1]
					// basketDIV.appendChild(basketLine);
					// totalDIV.innerHTML = objCart.totalCart;
				}
				current = this.goodsCart[i];
				qnt = 1;
			} else {
			qnt++;
			}
		}
		if (qnt > 0) {
			good[2] = qnt;
			console.log(current + ' comes --> ' + qnt + ' times');
		}
	}
};

function initCart(arg) {
	objCart.addToCart(arg);
	objCart.countTotal();
	objCart.printCart();
}
// function addToCart(arg) {
// 	var goodID = 'good' + arg.target.id;
// 	var basket = document.getElementsByClassName('goods')[0];
// 	for (var key in objGoods) {
// 		if (key == goodID) {
// 			objCart.goodsCart.push(objGoods[key]);
// 		}
// 	}
// 	basket.innerHTML = '';
// 	parseBasket(objCart.goodsCart);
// }

// function parseBasket(cart) {
// 	var basketDIV = document.getElementsByClassName('goods')[0];
// 	var totalDIV = document.getElementsByClassName('price')[0];

// 	var current = null;
// 	var qnt = 0;
// 	var result = [];
// 	cart.sort();

// 	for (var i = 0; i < cart.length; i++) {
// 		if (cart[i] != current) {
// 			if (qnt > 0) {
// 				result.push(current);
// 				cart[i].splice(2, 1, qnt);
// 			}
// 			current = cart[i];
// 			qnt = 1;
// 		} else {
// 				qnt++;
// 		}
// 	}
// 	result.forEach(function(i) {
// 		var basketLine = document.createElement('li');
// 		basketLine.innerHTML = 'Good: ' + i[0] + ' Price: ' + i[1] + ' QNT ' + i[2];
// 		basketLine.className = i;
// 		objCart.totalCart += i[1]
// 		basketDIV.appendChild(basketLine);
// 		totalDIV.innerHTML = objCart.totalCart;
// 		console.log(result);
// 	})
// }


window.onload = addEvents;