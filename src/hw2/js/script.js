'use sctrict'

function Container() {
    this.id = '';
    this.className = '';
}

Container.prototype.remove = function(elem) {
    elem = document.getElementsByClassName(this.className);
    elem[0].remove();
}

function Menu(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
}
Menu.prototype = Object.create(Container.prototype);
Menu.prototype.constructor = Menu;

function MenuItem(itemPlace, itemHref, itemName) {
    Container.call(this);
    this.className = 'menu-item menu-item--' + itemPlace;
    this.itemHref = itemHref;
    this.itemName = itemName;
    this.itemPlace = itemPlace;
    itemIndex++;
}
MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function() {
    let menuItem = document.createElement('li');
    menuItem.className = this.className;
    menuItem.href = this.itemHref;
    menuItem.innerHTML = this.itemName;
    return menuItem;
}

Menu.prototype.render = function() {

    let menuBlock = document.createElement('ul');
    menuBlock.className = this.className;
    menuBlock.id = this.id;
    document.body.appendChild(menuBlock);


    for (let item in this.items) {
        let itemObj = this.items[item];

        // Убираем из параметра положения эелемента конечное положение.
        // Конечное значение станет классом меню, в котором находится элемент.
        let itemPlaceSplit = itemObj.itemPlace.split('.');
        let itemLevel = itemPlaceSplit.length; // Сохраняем значение длинны для определения элементов первого уровня.
        itemPosition = itemPlaceSplit.pop();
        itemPosition = itemPlaceSplit.join('.');

        let itemRendered = itemObj.render();
        let itemPrevious = document.getElementsByClassName('menu-item--' + itemPosition)[0]; // Сюда помещается вложенное меню.
        let menuBlockIndent = document.getElementById('menu_lvl-' + itemPosition); // Блок вложенного меню.

        if (itemLevel == 1) {
            menuBlock.appendChild(itemRendered);
        } else if (menuBlockIndent == null) {
            menuBlockIndent = document.createElement('ul');
            menuBlockIndent.className = 'menu_lvl-' + itemPosition;
            menuBlockIndent.id = 'menu_lvl-' + itemPosition;
            itemPrevious.appendChild(menuBlockIndent);
            menuBlockIndent.appendChild(itemRendered);
        } else {
            menuBlockIndent.appendChild(itemRendered);
        }
    }
}

let itemIndex = 0; // Для автоматической идексации объектов.
let m_items = {};
m_items[itemIndex] = new MenuItem('1', '/', 'Главная');
m_items[itemIndex] = new MenuItem('2', '/gallery/', 'Галерея');
m_items[itemIndex] = new MenuItem('2.1', '/gallery2/', 'Галерея 1.2');
m_items[itemIndex] = new MenuItem('2.1.1', '/gallery3/', 'Галерея 1.2.1');
m_items[itemIndex] = new MenuItem('2.3', '/gallery4/', 'Галерея 1.3');
m_items[itemIndex] = new MenuItem('3', '/tires/', 'Шины');
m_items[itemIndex] = new MenuItem('3.1', '/pokrishki/', 'Покрышки');
m_items[itemIndex] = new MenuItem('4', '/lk/', 'Личный кабинет');

let menu = new Menu('menu_lvl-0', 'menu_lvl-0', m_items);
menu.render();


xhr = new XMLHttpRequest();
xhr.open('GET', 'json/menu.json', true);
xhr.send();
if (xhr.status != 200) {
  // обработать ошибку
  console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  console.log( xhr.responseText ); // responseText -- текст ответа.
}

