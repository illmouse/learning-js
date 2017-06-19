

function convert () {
	let resultClass = document.getElementsByClassName("result")[0];
	let tSessi = parseInt(document.getElementById("inputSessi").value);
	let tFar = (9 / 5) * tSessi + 32;
	if ( !(resultClass.classList.contains("result--exposed")) ) {
		resultClass.classList.add("result--exposed");
	}
	document.getElementsByClassName("result__temp")[0].innerHTML = "F "+ tFar;
}

function putVar () {
	let resultClass = document.getElementsByClassName("result")[1];
	let name = document.getElementById("inputName").value;
	let admin = name;
	if ( !(resultClass.classList.contains("result--exposed")) ) {
		resultClass.classList.add("result--exposed");
	}
	document.getElementsByClassName("result__admin")[0].innerHTML = admin;
}