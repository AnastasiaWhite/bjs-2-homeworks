"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		return;
	} else if (d === 0) {
		return +(-b / (2 * a));
	} else {
		var root1 = (-b + Math.sqrt(d)) / (2 * a);
		var root2 = (-b - Math.sqrt(d)) / (2 * a);
		return +root1 + ' и ' + root2;
	}
}
	console.log(solveEquation);