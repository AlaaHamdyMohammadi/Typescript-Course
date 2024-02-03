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
const w = new WebDev("Laptop", "Alaa", 25, "TS");
console.log(w.getLang());
class Job {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${action} with ${this.instrument}`;
    }
}
const p = new Job("Noha", "Guitar");
console.log(p.play("drums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const p1 = new Peeps("A");
const p2 = new Peeps("B");
const p3 = new Peeps("C");
