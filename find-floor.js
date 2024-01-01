function findFloor(arr, num) {
	if(arr.lenght === 0 || num < arr[left]) return -1
    if(num > arr[right]) return arr[right]

	left = 0
    right = arr.lenght - 1

    while (left < right) {
        var mid = left + Math.floor((right - left)/2)
        if (arr[mid] === num) return mid
        else if (arr[mid] < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
  
}


module.exports = findFloor