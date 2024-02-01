"use strict";
//The TypeScript compiler checks for type errors and other issues during the compilation process
//Array:
let strArr = ['one', 'two', 'three'];
let mixedDate = ['A', 1, true];
strArr[0] = 'four';
console.log(strArr);
let arr = [];
//Tuples: Is specific than array
let myTuple = ['Alaa', 26, true];
let mixed = ['Arwa', 19, true];
myTuple[1] = 25; // Can't change type of element
mixed[1] = true; // Can change type of element
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
let obj1 = {
    name: 'Mona',
    active: true,
    albums: [11, 'A', 1],
};
let obj2 = {
    name: 'Ali',
    // active: false,
    albums: [22, 'B', 2],
};
obj1 = obj2;
const greetFriends = (friend) => {
    return `Hello ${friend.name}!`;
};
console.log(greetFriends(obj1));
//Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
