/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initVal = init;
    
    function reset() {
        initVal = init;
        return initVal;
    }
    function increment() {
        return ++initVal;
    }
    function decrement() {
        return --initVal;
    }

    return {
        reset, increment, decrement
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */