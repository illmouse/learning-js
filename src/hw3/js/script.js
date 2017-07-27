'use sctrict'

let inputs = ["Name", "Phone", "Email", "Text"];

function addEvents() {
  for (let i = 0; i < inputs.length; i++) {
    let button = document.getElementById('check' + inputs[ i ]);
    button.addEventListener( 'click', checkRegExp);
  }
}

function checkRegExp() {
      let bid = this.id,
          re = new RegExp( '[^check].{1,}' ),
          tid = re.exec( bid )[0],
          text = document.getElementById( tid ).value;
      switch (bid) {
        case "checkName":
          re = new RegExp( '[a-zA-Z]' );
          break;
        case "checkPhone":
          re = new RegExp( '^\\d+$' );
          break;
        case "checkEmail":
          re = new RegExp( '^\\d+$' );
          break;
        case "checkText":
          re = new RegExp( '[A-z]' );
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

function paint( elem, cond ) {
  elem = document.getElementById( elem );
  if ( cond ) {
    elem.className = ('green');
  } else {
      elem.className = ('red');
  }
}
window.onload = addEvents;