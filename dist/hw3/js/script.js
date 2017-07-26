'use sctrict'

let inputs = ["name", "phone", "email", "text"];

function addEvents() {
  for (let i = 0; i < inputs.length; i++) {
    let button = document.getElementById('check' + inputs[ i ]);
    button.addEventListener( 'click', function() {
      let text = inputs[ i ].value,
        re = new RegExp( '^\\d+$' );
    
      if ( re.test( text )) {
        console.log( 'Верно' );
      }
      else {
        console.log( 'Ошибка' );
      }
    })
  }
}

window.onload = addEvents;