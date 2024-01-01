function sortedFrequency(arr, num) {
    //Given a sorted array and a number, counts the occurrences of the number in the array
    let firstIdx = findFirst(arr, num)
    if (firstIdx === -1) {
        return 0;
    }
    
    let idx = firstIdx
    let count = 0
    while (arr[idx] === num) {
        count += 1
        idx += 1
    }
    return count;
}

function findFirst(arr, num) {
    let left = 0
	let right = arr.length - 1
	while (left <= right) {
		mid = left + Math.floor((right - left) / 2)
		if (arr[mid] === num && (arr[mid - 1] < num || mid === 0)){
			return mid
		} else if (arr[mid] < num) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}
	return -1;
}

module.exports = sortedFrequency