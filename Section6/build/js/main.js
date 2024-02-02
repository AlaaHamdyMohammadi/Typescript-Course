"use strict";
// Classes
class Coder {
    constructor(name, age, lang) {
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `This is my age ${this.age}`;
    }
}
const c = new Coder("Alaa", 25, "TypeScript");
console.log(c.getAge());
console.log(c.name);
// console.log(c.age);
// console.log(c.lang);
class WebDev extends Coder {
    constructor(computer, name, age, lang) {
        super(name, age, lang);
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const w = new WebDev('Laptop', 'Alaa', 25, 'TS');
console.log(w.getLang());
// console.log(w.age);
// console.log(w.lang);
// Interface with class
