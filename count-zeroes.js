function countZeroes(arr) {

	let firstZero = findFirst(arr);
	if (firstZero === -1) {
		return 0
	}
	return len(arr) - firstZero;
}

function findFirst(arr) {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		mid = left + Math.floor((right - left) / 2)
		if (arr[mid] === 0 && (arr[mid - 1] === 1 || mid === 0)){
			return mid
		} else if (arr[mid] === 1) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1
}

//odule.exports = countZeroes