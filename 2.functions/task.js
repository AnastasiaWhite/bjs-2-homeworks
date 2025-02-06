function getArrayParams(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	let i;

	for (i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;
		}
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}

	const avg = (sum / arr.length).toFixed(2);

	return {
		min: min,
		max: max,
		avg: Number(avg)
	}
}



function summElementsWorker(...arr) {

	return arr.reduce((sum, current) => sum + current, 0);
}




function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;  
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	return max - min;
}



function differenceEvenOddWorker(...arr) {
	let sumEven = 0;
	let sumOdd = 0;

	for (let number of arr) {
		if (number % 2 === 0) {
			sumEven += number;
		} else {
			sumOdd += number;
		}
	}

	return sumEven - sumOdd;
}


function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr.length === 0) {
			return 0;
		}

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


	for (let i = 0; i < arrOfArr.length; i++) {

		const result = func(...arrOfArr[i]);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}