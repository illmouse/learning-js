'use sctrict'

let menuIndex = 0; // Для автоматической идексации объектов.
let galleryIndex = 0; // Для автоматической идексации объектов.
let m_items = {};
let g_items = {};

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

function MenuItem(itemPlace, itemHref, itemName) {
    Container.call(this);
    this.className = 'menu-item menu-item--' + itemPlace;
    this.itemHref = itemHref;
    this.itemName = itemName;
    this.itemPlace = itemPlace;
    menuIndex++;
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

function Gallery(my_id, my_class, my_items) {
    Container.call(this);
    this.id = my_id;
    this.className = my_class;
    this.items = my_items;
}
Gallery.prototype = Object.create(Container.prototype);
Gallery.prototype.constructor = Gallery;

Gallery.prototype.render = function() {

    let galleryBlock = document.createElement('div');
    galleryBlock.className = this.className;
    galleryBlock.id = this.id;
    document.body.appendChild(galleryBlock);
    
    for (let item in this.items) {
        let itemObj = this.items[item];
        let itemRendered = itemObj.render();

        galleryBlock.appendChild(itemRendered);
    }
}

function GalleryItem(itemThmb, itemSrc) {
    Container.call(this);
    this.className = 'gallery-item gallery-item--' + galleryIndex;
    this.itemThmb = itemThmb;
    this.itemSrc = itemSrc;
    galleryIndex++;
}
GalleryItem.prototype = Object.create(Container.prototype);
GalleryItem.prototype.constructor = GalleryItem;

GalleryItem.prototype.render = function() {
    let galleryItem = document.createElement('img');
    galleryItem.className = this.className;
    galleryItem.src = this.itemThmb;
    return galleryItem;
}

function initMenu() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'json/menu.json');

  xhr.onload = function() {
      if (xhr.readyState != 4) {
          alert(xhr.readyState + ': ' + xhr.statusText);
      } else {
          let new_m_items = JSON.parse(xhr.responseText);
          for (let key in new_m_items) {
            m_items[menuIndex] = new MenuItem(new_m_items[key].itemPlace, new_m_items[key].itemHref, new_m_items[key].itemName);
          }
        let menu = new Menu('menu_lvl-0', 'menu_lvl-0', m_items);
        menu.render();
      }
  }
  xhr.send();
}

function initGallery() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'json/gallery.json');

  xhr.onload = function() {
      if (xhr.readyState != 4) {
          alert(xhr.readyState + ': ' + xhr.statusText);
      } else {
          let new_g_items = JSON.parse(xhr.responseText);
          for (let key in new_g_items) {
            g_items[galleryIndex] = new GalleryItem(new_g_items[key].itemThmb, new_g_items[key].itemSrc);
          }
        let gallery = new Gallery('gallery', 'gallery', g_items);
        console.log(gallery);
        gallery.render();
      }
  }
  xhr.send();
}

initMenu();
initGallery();