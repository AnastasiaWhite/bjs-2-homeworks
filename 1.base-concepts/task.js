"use strict"


function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  } else if (d === 0) {
    return [-(b / (2 * a))];
  } else if (d < 0) {
    return [];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent <= 0 || contribution < 0 || amount <= 0 || countMonths <= 0) {

  }
  const monthlyRate = (percent / 100) / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

  const totalPayment = (monthlyPayment * countMonths).toFixed(2);
  return Number(totalPayment);
}