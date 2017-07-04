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

//// ВЕЛИКАЯ И МОГУЧАЯ КОРЗИНА ////

// Запускаем корзину. Функция вызывается по клику на кнопку.

function initCart(arg) {
	objCart.addToCart(arg);
	objCart.countTotal();
	objCart.printCart();
}

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
		for (var key in objGoods) {
			var goodName = 'good' + btn.target.id; // Формируем название товара соединяя good с ID кнопки.
			var good = objGoods[key]; // Определяем товар по ключу
			var goodIndex = this.goodsCart.indexOf(good); // Определяем индекс товара в корзине
			var goodInCart = this.goodsCart[goodIndex]; // Дергаем по индексу массив товара из корзины. 
			// Проверяем что товар существует и его нет в корзине.
			if (key == goodName && goodIndex == -1) {
				this.goodsCart.push(good); // Добавляем товар в корзину
				goodIndex = this.goodsCart.indexOf(good); // Узнаем индекс нового элемента в корзине
				goodInCart = this.goodsCart[goodIndex]; // Дергаем элемент по индексу
				goodInCart.push(1); // Выставляем количество равное еденице
				// Если товар в корзине уже есть - увеличиваем количество на 1.
			} else if (key == goodName && goodIndex > -1) {
					goodInCart[2] += 1; // Увеличиваем количество товара на 1
			}
		}
	},
	// Пересчитываем общую сумму
	countTotal: function() {
		for (var i = 0; i < this.goodsCart.length; i++) {
			var good = this.goodsCart[i];
			this.totalCart += good[1];
		}
	},
	// Печатаем корзину
	printCart: function() {
		var basketDIV = document.getElementsByClassName('goods')[0];
		var totalDIV = document.getElementsByClassName('price')[0];
		
		basketDIV.innerHTML = '';

		for (var i = 0; i < this.goodsCart.length; i++) {
			var good = this.goodsCart[i];
			var basketLine = document.createElement('div');
			var name = good[0];
			var price = good[1];
			var qnt = good[2];
			var total = this.totalCart;

			basketLine.innerHTML = (i + 1) + '. ' + name + ' - ' + price + 'р. ' + ' / ' + qnt + ' шт.';
			basketDIV.appendChild(basketLine);
			totalDIV.innerHTML = 'Всего: '+ total + 'р.';
		}
	}
};

window.onload = addEvents;