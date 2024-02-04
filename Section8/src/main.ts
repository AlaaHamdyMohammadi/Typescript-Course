// Generics: Allow us to provide a placeholder a type of variable if you will so

const echo = <T>(arg: T): T => arg;

function identity<T>(arg: T): T {
  return arg;
}
// Usage
let result: number = identity(5); // T is number
let value: string = identity("hello"); // T is string

const isObj = <T>(arg: T): boolean => {
  return (
    typeof arg === "object" &&
    !Array.isArray(arg) &&
    arg !== null &&
    arg !== null
  );
};

console.log(isObj(true));
console.log(isObj("A"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "Alaa" }));
console.log(isObj(null));

class StateObject<T> {
  constructor(private data: T) {}

  get state(): T {
    return this.data;
  }

  set state(value: T){
    this.data = value;
  };
}

const s = new StateObject('D')
