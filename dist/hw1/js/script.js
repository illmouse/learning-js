'use sctrict'

function Container() {
  this.id = "";
  this.className= "";
  this.htmlCode = "";
}

Container.prototype.render = function() {
  return this.htmlCode;
}

Container.prototype.remove = function( elem ) {
  elem = document.getElementsByClassName( this.className );
  elem[0].remove();
}

function Menu( my_id, my_class, my_items ) {
  Container.call( this );
  this.id = my_id;
  this.className = my_class;
  this.items = my_items;
}
Menu.prototype = Object.create( Container.prototype );
Menu.prototype.constructor = Menu;

function MenuItem( itemPlace, itemHref, itemName ) {
  Container.call( this );
  this.className = "menu-item menu-item--" + itemIndex;
  this.itemHref = itemHref;
  this.itemName = itemName;
  this.itemPlace = itemPlace;
  itemIndex++;
}
MenuItem.prototype = Object.create( Container.prototype );
MenuItem.prototype.constructor = MenuItem;

MenuItem.prototype.render = function() {
  var menuItem = document.createElement('li');
  menuItem.className = this.className;
  menuItem.href= this.itemHref;
  menuItem.innerHTML = this.itemName;
  return menuItem;
}

var itemIndex = 0;
var m_items = {};
m_items[itemIndex] = new MenuItem( 1, "/", "Главная" );
m_items[itemIndex] = new MenuItem( 2, "/catalogue/", "Каталог" );
m_items[itemIndex] = new MenuItem( 2, "/gallery/", "Галерея" );


// Menu.prototype.render = function() {
//   var result = `<ul class="${this.className}" id="${this.id}">`;
//   for ( var item in this.items ) {
//     if ( this.items[item] instanceof MenuItem ) {
//       result += this.items[item].render();
//     }
//   }
//   result += `</ul>`;
//   return this.htmlCode = result;
// }

Menu.prototype.render = function() {

  var menuBlock = document.createElement('ul');
  menuBlock.className = this.className;
  menuBlock.id= this.id;
  document.body.appendChild(menuBlock);


  for ( let item in this.items ) {
    let itemString = this.items[item];
    let itemLevel = itemString.itemPlace;
    let itemRendered = itemString.render();
    let menuBlock = document.getElementById("menu");

    if ( itemString instanceof MenuItem ) {
      let menuBlockIndent = document.getElementById('menu_lvl-' + itemLevel);
      if ( itemLevel == 1) {
        menuBlock.appendChild(itemRendered);
        // let itemLast = document.querySelector("li");
        // let itemLast = itemsInList[itemsInList.length - 1];
        // console.log(itemLast.closest('li'));
      } else if ( itemLevel >= 2 && menuBlockIndent == null ) {
          menuBlockIndent = document.createElement('ul');
          menuBlockIndent.className = 'menu_lvl-' + itemLevel;
          menuBlockIndent.id = 'menu_lvl-' + itemLevel;
          menuBlock.appendChild(menuBlockIndent);
          menuBlockIndent.appendChild(itemRendered);
      } else {
          menuBlockIndent.appendChild(itemRendered);
      }
    }
  }
    // let menuLvl = document.getElementsByClassName("${this.className}_lvl${itemLevel}")
  //   if ( itemLevel == 1) {
  //     menuBlock.appendChild( itemRendered );
  //   } else if ( itemLevel > 1 ) {
  //       if ( menuLvl.length > 0 ) {
  //         let menuItem = document.createElement( `<ul class="${this.className}_lvl${itemLevel}">${itemRendered}</ul>` );

  //       } else {
  //         menuLvl[0].appendChild(itemRendered);
  //       }
  //   }
  // }
  // result += `</ul>`;
  // return this.htmlCode = result;
}

var menu = new Menu( "menu", "menu", m_items );
// var menuindent = new MenuIndent( "menu", "menu", m_items );
menu.render();
// document.write( menuindent.render() );
