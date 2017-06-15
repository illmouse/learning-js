function convert () {
	let tSessi = parseInt(document.getElementById("inputSessi").value);
	let tFar = (9 / 5) * (tSessi + 32);
	document.getElementsByClassName("result")[0].style.minWidth = "30%";
	document.getElementsByClassName("result")[0].style.backgroundColor = "#94bb82";
	document.getElementsByClassName("result")[0].innerHTML = "F "+ tFar;
}