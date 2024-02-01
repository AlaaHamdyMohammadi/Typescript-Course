//The TypeScript compiler checks for type errors and other issues during the compilation process


//Array:
let strArr = ['one', 'two', 'three'];
let mixedDate = ['A', 1, true];

strArr[0] = 'four';
console.log(strArr);

let arr: string[] = [];

//Tuples: Is specific than array
let myTuple: [string, number, boolean] = ['Alaa', 26, true];
let mixed = ['Arwa', 19, true];
myTuple[1] = 25 // Can't change type of element
mixed[1] = true // Can change type of element

//Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);

type friends = {
    name: string,
    active?: boolean,
    albums: (string | number)[],
}

let obj1: friends = {
    name: 'Mona',
    active: true,
    albums: [11, 'A', 1],
}
let obj2: friends = {
    name: 'Ali',
    // active: false,
    albums: [22, 'B', 2],
}

obj1 = obj2;

const greetFriends = (friend: friends) => {
    return `Hello ${friend.name}!`
}
console.log(greetFriends(obj1));

//Enum

enum Grade{
    U,
    D,
    C,
    B,
    A,
}

