type One = string;
type Two = string;
type Three = "Hello";

// convert to more or less specific
let a: One = "Hello";
let b = a as Two; // Assersion
let c = a as Three;

let d = <One> 'world';