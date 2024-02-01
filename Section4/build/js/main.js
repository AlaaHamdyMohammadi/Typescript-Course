"use strict";
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 2));
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Rest parameters
const total = (...nums) => {
    return nums.reduce((cur, acc) => cur + acc, 1);
};
console.log(total(1, 2, 3, 4));
