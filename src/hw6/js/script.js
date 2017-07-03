'use sctrict'

// Создаем прототип для товаров
class goodsProto {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

// Функция генерации цены товара
function randomPrice(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создаем товары и генерируем цены для них
var good1 = new goodsProto('good1', randomPrice(100, 5000));
var good2 = new goodsProto('good2', randomPrice(100, 5000));
var good3 = new goodsProto('good3', randomPrice(100, 5000));
var good4 = new goodsProto('good4', randomPrice(100, 5000));
var good5 = new goodsProto('good5', randomPrice(100, 5000));
var good6 = new goodsProto('good6', randomPrice(100, 5000));
var good7 = new goodsProto('good7', randomPrice(100, 5000));
var good8 = new goodsProto('good8', randomPrice(100, 5000));
var good9 = new goodsProto('good9', randomPrice(100, 5000));
var good10 = new goodsProto('good10', randomPrice(100, 5000));

// Создаем корзину
var objCart = {
	goodsCart: [],
	totalCart: ''
}

// objCart.goodsCart.push(good5.name);
// objCart.goodsCart.push(good3.name);
// objCart.goodsCart.push(good2.name);

// objCart.goodsCart.forEach(writeBasket);
function addToCart(arg) {
	var goodID = arg.target.id;
	objCart.goodsCart.push('good' + 'goodID'.name);
	objCart.goodsCart[objCart.goodsCart.lenght - 1];
}
function writeBasket(arg) {
	var basket = document.getElementsByClassName('goods')[0];
	var basketLine = document.createElement('li');
	basketLine.innerHTML = arg;
	basket.innerHTML = '';
	basket.appendChild(basketLine);
}


// Процедура кликанья по картинкам
var BIG_IMAGES_FOLDER = 'jpg/';

function init() {
	var images = document.getElementsByTagName('img');
	var buttons = document.getElementsByTagName('button');
	for (var i = 0, max_i = images.length; i < max_i; i++) {
		images[i].addEventListener('click', showBigImage);
	}
	for (var i = 0, max_i = buttons.length; i < max_i; i++) {
		buttons[i].addEventListener('click', addToCart);
	}
}

function showBigImage(arg) {
	var imgName = arg.target.className.split(' ')[1];
	var bigImageName = BIG_IMAGES_FOLDER + imgName + '.jpg';
	var sourceDiv = document.getElementsByClassName('preview')[0];
	var bigImage = document.createElement('img');

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

	bigImage.src = bigImageName;
}

window.onload = init;