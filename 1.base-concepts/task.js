"use strict"


function solveEquation(a, b, c) {
	let d = b ** 2 - 4 * a * c;
  let arr =[];
  if (d > 0) {
    let rootOne = (-b + Math.sqrt(d)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(d)) / (2 * a);
    return [rootOne, rootTwo];
} else if (d === 0) {
  let rootOne = -b / (2 * a);
  return [rootOne];
} else if (d < 0) {
return arr;
}
}