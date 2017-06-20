
function diffNum() {

	let a = parseInt(document.getElementById("a3").value);
	let b = parseInt(document.getElementById("b3").value);
	let x;

	if ((a + b) !== NaN && Number.isInteger(a + b)) {
		if (a >= 0 && b >= 0) {
			if (a >= b) {
				x = a - b;
			} else {
				x = b - a;
			}
		} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
				x = a + b;
		} else if (a < 0 && b < 0) {
			x = a * b;
		}
		document.getElementsByClassName("result--3")[0].innerHTML = x;
	} else {
		document.getElementsByClassName("result--3")[0].innerHTML = "Wrong input!";
	}
}