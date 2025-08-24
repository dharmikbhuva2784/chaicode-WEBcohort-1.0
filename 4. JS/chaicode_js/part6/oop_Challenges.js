function Animal() {}

Animal.prototype.speak = function () {
  return `Animal speaking`;
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  return `Woof!`;
};
Dog.prototype.constructor = Dog;

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(rad) {
    super();
    this.rad = rad;
  }

  area() {
    return Math.PI * this.rad * this.rad;
  }
}

class Rectangle extends Shape {
  constructor(l, b) {
    super();
    this.l = l;
    this.b = b;
  }

  area() {
    return this.l * this.b;
  }
}

class BankAccount {
  constructor(balance) {
    if (balance < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }
}

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }

  move() {
    return `The vehicle is moving`;
  }

  static isVehicle(obj) {
    if (obj instanceof Vehicle) {
      return true;
    } else {
      return false;
    }
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }

  startEngine() {
    return `Engine started`;
  }

  move() {
    return `The car is driving`;
  }
}

function Person(name,age){
    if(age < 0){
        throw new Error("Age must be a positive number");
    }
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    return `Hello, my name is ${this.name}`
}

function Animal(){
}

Animal.prototype.speak = function(){
    return `Animal speaking`
}

function Dog(){
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function(){
    return `Woof!`
}

Dog.prototype.constructor = Dog;