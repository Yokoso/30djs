/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let output = init;
    nums.forEach((el) => {
        output = fn(output, el);
    });
    return output;
};