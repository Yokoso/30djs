/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const mutatedArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        mutatedArray[i] = fn(arr[i], i);
    }
    return mutatedArray;
};