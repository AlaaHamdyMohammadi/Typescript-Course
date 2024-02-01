type mathFunction = (a: number, b: number) => number;
let multiply: mathFunction = function(c, d){
    return c * d;
}
console.log(multiply(2,2));

const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined'){
        return a + b + c;
    }
    return a + b;
} 

// Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((cur, acc) => cur + acc, 1);
}
console.log(total(1, 2, 3, 4));