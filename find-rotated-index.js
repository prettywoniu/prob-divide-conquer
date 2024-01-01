function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr)
    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
        return binarySearch(arr, num, 0, pivot - 1);
    } else {
        return binarySearch(arr, num, pivot, arr.length - 1);
    }
}

function binarySearch(arr, num, left, right) {
    if(arr.lenght === 0) return -1
    if(num < arr[left] || num > arr[right]) return -1
    
    while (left <= right) {
        var mid = left + Math.floor((right - left)/2)
        if (arr[mid] === num) return mid
        else if (arr[mid] < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

function findPivot(arr) {
    let len = arr.length
    if (len === 1 || arr[0] < arr[len - 1]) return 0
    let left = 0
    let right = len - 1
    let mid = 0
    while ( left <= right) {
        mid = left + Math.floor((right - left)/2)
        if (arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[mid] >= arr[0]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
} 

module.exports = findRotatedIndex