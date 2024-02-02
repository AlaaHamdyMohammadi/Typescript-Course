
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

class WebDev extends Coder{
    constructor(public computer: string, name: string, age: number, lang: string){
        super(name, age, lang);
    }

    public getLang(){
        return `I write ${this.lang}`;
    }
}

const w = new WebDev('Laptop', 'Alaa', 25, 'TS');
console.log(w.getLang());
// console.log(w.age);
// console.log(w.lang);

// Interface with class

