function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg;
	let i;

	for (i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;
		}
		if (max < arr[i]) {
			max = arr[i];
		}

		if (min > arr[i]) {
			min = arr[i];
		}
		sum += arr[i];
	}

	avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	}
}




function summElementsWorker(...arr) {

	let sum = 0;


	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;
		}
		sum += arr[i];
	}
	return sum;
}



function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let i;

	for (i = 0; i < arr.length; i++) {

		if (max < arr[i]) {
			max = arr[i];
		}

		if (min > arr[i]) {
			min = arr[i];
		}
	}

	let difference = max - min;

	if (arr.length === 0) {
		return 0;
	} else {
		return difference;
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let i;
	for (i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;
		}
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];

		}
	}

	return sumEvenElement - sumOddElement;
}



function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let i;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}




function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let i;

	for (i = 0; i < arrOfArr.length; i++) {
		if (arrOfArr.length === 0)
			return 0;
		let numbers = arrOfArr[i];
		let res = func(...numbers);

		if (res > maxWorkerResult) {
			maxWorkerResult = res;
		}
	}
	return maxWorkerResult;
}