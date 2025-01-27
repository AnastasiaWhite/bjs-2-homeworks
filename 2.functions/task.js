function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let avg = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			}

			if (min > arr[i]) {
				min = arr[i];
			}

			if (typeof arr[i] === "number" && arr[i] !== NaN) {
				sum += arr[i];
			}

			avg = sum / arr.length;

		} else {
			return 0;
		}
	}

	return {
		min: min,
		max: max,
		avg: Number(avg.toFixed(2))
	}

}




function summElementsWorker(...arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== undefined) {

			if (i != -1) {
				sum += arr[i];
			}

		} else {
			return 0;
		}

	}

	return sum;
}



function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let i;

	for (i = 0; i < arr.length; i++) {

		if (arr !== undefined) {

			if (max < arr[i]) {
				max = arr[i];
			}

			if (min > arr[i]) {
				min = arr[i];
			}
		} else {
			return 0;
		}
	}

	let difference = max - min;

	if (difference === -Infinity) {
		return 0
	} else {
		return difference;
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		} else {
			return 0;
		}
	}

	return sumEvenElement - sumOddElement;

}



function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let i;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] !== undefined) {

			if (arr[i] % 2 == 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		} else {
			return 0;
		}
	}

	if (sumEvenElement !== countEvenElement) {

		return sumEvenElement / countEvenElement;

	} else {

		return 0;

	}

}




function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let i;
	let res;

	for (i = 0; i < arrOfArr.length; i++) {
		if (arrOfArr.length === 0)
			return 0;
		numbers = arrOfArr[i];
		res = func(...numbers);

		if (res > maxWorkerResult) maxWorkerResult = res;
	}

	return maxWorkerResult;
}