function compare(arr, i1, i2) {
	let n1 = arr[i1];
	let n2 = arr[i2];
	if (n1 > n2) {
		swap(arr, i1, i2)
	}
}

function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function bubbleSort(arr) {
	let counter = arr.length - 1;
	while (counter > 0) {
		for (let i = 0; i < counter; i++) {
			compare(arr, i, i + 1);
		}
		counter--;
	}
	return arr;
}