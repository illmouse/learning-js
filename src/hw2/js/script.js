function numInteger() {
	let a3 = parseInt(document.getElementById("a3").value);
	let b3 = parseInt(document.getElementById("b3").value);
	let x3;

	if ((a3 + b3) !== NaN && Number.isInteger(a3 + b3)) {
		if (a3 >= 0 && b3 >= 0) {
			if (a3 >= b3) {
				x3 = a3 - b3;
			} else {
				x3 = b3 - a3;
			}
		} else if ((a3 >= 0 && b3 < 0) || (a3 < 0 && b3 >= 0)) {
				x3 = a3 + b3;
		} else if (a3 < 0 && b3 < 0) {
			x3 = a3 * b3;
		}
		document.getElementsByClassName("result--3")[0].innerHTML = x3;
	} else {
		document.getElementsByClassName("result--3")[0].innerHTML = "Wrong input!";
	}
}

function varSwitch() {
	let a4 = parseInt(document.getElementById("a4").value);
	let result4 = document.getElementsByClassName("result--4")[0].innerHTML = ""
	do {
		result4 = document.getElementsByClassName("result--4")[0].innerHTML
		switch (true) {
			case a4 < 16:
				document.getElementsByClassName("result--4")[0].innerHTML = result4 + a4 + " ";
				++a4;
				break;
		}
	} while (a4 < 16);
}

function numSumm(a5,b5) {
	return a5 + b5;
}

function numDiff(a5,b5) {
	return a5 - b5;
}

function numMult(a5,b5) {
	return a5 * b5;
}

function numDiv(a5,b5) {
	return a5 / b5;
}

function numMultiaction(a6, b6, op6) {
	var a6 = parseInt(document.getElementById("a6").value);
	var b6 = parseInt(document.getElementById("b6").value);
	var op6 = document.getElementById("op6").value;
	var x6;
	switch (a6, b6, op6) {
		case op6 = "Summ":
			x6 = numSumm(a6,b6);
			break;		
			case op6 = "Diff":
			x6 = numDiff(a6,b6);
			break;		
			case op6 = "Mult":
			x6 = numMult(a6,b6);
			break;		
			case op6 = "Div":
			x6 = numDiv(a6,b6);
			break;
	}
	return x6;
}

function writeHTML(where, what) {
	document.getElementsByClassName(where)[0].innerHTML = what;
}