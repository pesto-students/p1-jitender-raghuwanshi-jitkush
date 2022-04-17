function memoize(fn) {
    const cache  = new Map(); 
    return function (... args) {
    const key = args.toString();
    if (cache.has(key)) {
    return cache.get(key);
    }
    cache.set(key, fn(... args));
    return cache.get(key);
};
}

function factorial(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial *= i;
}
    return factorial;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const fact_memoize = memoize(factorial);
console.log(fact_memoize(20));
time (() => fact_memoize(10));
time (() => fact_memoize(10));
time (() => fact_memoize(10));
time (() => fact_memoize(12));
time (() => fact_memoize(15));



