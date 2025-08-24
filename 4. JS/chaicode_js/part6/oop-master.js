let car = {
    make: "bmw",
    model: "m2",
    year: 2023,
    start: function(){
        return `${this.make} car got started in ${this.year}`
    }
}

// console.log(car.start());

function Person(name,age){
    this.name = name;
    this.age = age;
}

let db = new Person("dharmik",21)
console.log(db.name);

// prototype and prototypal chain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.dharmik = function(){
    return `Custom method ${this}`
}

let arr = [1,2,3];
console.log(arr.dharmik());

let arr1 = [10,20,30];
console.log(arr1.dharmik());

class Vehicle{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle{
    constructor(make,model,carType,cc,engineType){
        super(make,model) // must call parent constructor in child class
        this.carType = carType;
        this.cc = cc;
        this.engineType = engineType;
    }

    drive(){
        return `${this.make} : accessed this var from another class using inheritance :)`
    }
}

let myCar = new Car("bmw","g87","coupè",3000,"twin-turbocharged inline-6")

console.log(myCar.drive());
console.log(myCar.start());
