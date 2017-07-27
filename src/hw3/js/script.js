'use sctrict'

let inputs = ["Name", "Phone", "Email", "Text"];

function addEvents() {
  for (let i = 0; i < inputs.length; i++) {
    let button = document.getElementById('check' + inputs[ i ]);
    button.addEventListener( 'click', checkRegExp);
  }
  let button = document.getElementById('replaceSymbol');
  button.addEventListener( 'click', replaceSymbol);
}

function checkRegExp() {
      let bid = this.id,
          re = new RegExp( '[^check].{1,}' ),
          tid = re.exec( bid )[0],
          text = document.getElementById( tid ).value;
      switch (bid) {
        case "checkName":
          re = new RegExp( '[A-Za-z]' );
          break;
        case "checkPhone":
          re = new RegExp( '^\\+7\\(\\d{3}\\)\\d{3}-\\d{4}$' );
          break;
        case "checkEmail":
          re = new RegExp( '^\\w+\\.?\\w+@\\w+\\.[A-Za-z]{2,5}$' );
          break;
        case "checkText":
          re = new RegExp( "\\w+" );
          break;
      }

      if ( re.test( text )) {
        console.log( 'Верно' );
        paint( tid, true );
      }
      else {
        console.log( 'Ошибка' );
        paint( tid, false );
      }
}

function replaceSymbol() {
  let re = new RegExp( '' ),
      text = document.getElementById( 'text-block' ).innerText;
  let replace = text.replace( /'[^(\\w\\'\\w)]/g, '"' );
  document.getElementById( 'text-block' ).innerText = replace;
}

function paint( elem, cond ) {
  elem = document.getElementById( elem );
  if ( cond ) {
    elem.className = ('green');
  } else {
      elem.className = ('red');
  }
}

window.onload = addEvents;