// inheritance

class Laptop {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  madeby() {
    return `the ${this.model} is made by ${this.make} company.`;
  }

  turnOn() {
    return `the ${this.model} is turning On...`;
  }
}

class MacBook extends Laptop {
  constructor(make, model, processor, ram, size) {
    super(make, model); // will call the parent class constructor
    this.processor = processor;
    this.ram = ram;
    this.size = size;
  }

  specs() {
    return `the ${this.model} is made by ${this.make}, which has ${this.processor} chip and ${this.ram} gb ram with ${this.size} inch retina display`;
  }

  Os() {
    return `the ${this.model} has MacOS Tahoe(linux based) Operating System.`;
  }
}

let Mbp = new MacBook("Apple", "MacBook Pro", "M4 Max", 16, 16);

console.log(Mbp.Os());
console.log(`------------`);

console.log(Mbp.turnOn());
console.log(`------------`);

console.log(Mbp.specs());
console.log(`------------`);

console.log(Mbp.madeby());
console.log(`------------`);

console.log(Mbp);

console.log(`------------`);

// encapsulation - concept of restricting direct access to object data

class BankAccount {
  #balance = 0; // adding hash means you directly cannot access this var
  // you can only access it through some methods
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$${this.#balance}`;
  }
}

let acc = new BankAccount();
console.log(acc.deposit(15));

// abstraction - hides the complex implementation detail

class CoffeeMachine {
  start() {
    // call the db
    // filter the value
    return `Starting the machine`;
  }

  brewCoffee() {
    // complex implementation
    return `Brewing Coffee`;
  }

  pressStartButton() {
    return `${this.start()}\n${this.brewCoffee()}`;
  }
}
let myMachine = new CoffeeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton());

// Polymorphism

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins Can't Fly!`;
  }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

// static method - can be only called by the class itself nobody else can
// it means that even the instance of the class cannot access static method only the class itself can

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

let miniCalc = new Calculator();
console.log(Calculator.add(2, 3));
// we can call this method without creating any object or instance of the class

// getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary Cannot Be Negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    this.#salary = value;
  }
}

let emp = new Employee("alis", 50000);
console.log(emp.salary);
