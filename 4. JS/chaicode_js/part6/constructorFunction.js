function greet(name) {
  console.log(`hello ${name}`);
}

function person(name, age){
    this.name = name
    this.age = age
}

function car(make, model){
    this.make = make;
    this.model = model;
}

let myBMW = new car("BMW", "M2");
console.log(myBMW);

let myMERCEDES = new car("mercedes","g63")

console.log(myMERCEDES);


function Tea(type){
    this.type = type;
    this.describe = function(){
        return `This is a cup of ${this.type}`
    }
}

let lemonTea = new Tea("lemon tea")

console.log(lemonTea);
console.log(lemonTea.describe());

function animal(species){
    this.species = species;
}

animal.prototype.sound = function(){
    return `${this.species} makes a sound`
}

let dog = new animal("dog");
console.log(dog.sound());


let cat = new animal("cat");
console.log(cat.sound());

// to check whether a user is creating an object using new or without new

function Drink(name){
    if(!new.target){
        throw new Error("Drink was expected to be called with 'new' keyword!");
    }
    this.name = name
}

let coke = Drink("coke");