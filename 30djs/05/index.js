/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArray = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if(fn(arr[i], i)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
};