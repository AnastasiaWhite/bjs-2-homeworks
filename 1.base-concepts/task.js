"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let root1;
	let root2;
	let d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr.push[0];
	} else if (d === 0) {
		root1 = -b / (2 * a);
		arr.push(root1);
	} else if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
	}
	return arr;
}

