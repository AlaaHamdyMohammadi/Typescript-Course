// Classes
class Coder {
  constructor(
    public name: string,
    private age: number,
    protected lang: string
  ) {}

  public getAge() {
    return `This is my age ${this.age}`;
  }
}

const c = new Coder("Alaa", 25, "TypeScript");
console.log(c.getAge());
console.log(c.name);
// console.log(c.age);
// console.log(c.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    lang: string
  ) {
    super(name, age, lang);
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const w = new WebDev("Laptop", "Alaa", 25, "TS");
console.log(w.getLang());
// console.log(w.age);
// console.log(w.lang);

// Interface with class
interface Person {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Job implements Person {
  constructor(public name: string, public instrument: string) {}

  play(action: string) {
    return `${this.name} is playing ${action} with ${this.instrument}`;
  }
}

const p = new Job("Noha", "Guitar");
console.log(p.play("drums"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.id = ++Peeps.count;
  }
}

const p1 = new Peeps("A");
const p2 = new Peeps("B");
const p3 = new Peeps("C");

