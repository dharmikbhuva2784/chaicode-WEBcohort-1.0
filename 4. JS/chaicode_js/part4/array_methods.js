// array length - returns the length of the array

let cars = ["gtr35 nismo", "pista 488", "aventador svj", "911 gt3 rs"]

let carLength = cars.length;

console.log(carLength);

let bikes = ["z900", "panigale v4", "s1000 rr", "hayabusa"]

let bikeLength = bikes.length;

console.log(bikeLength);

console.log("----------------------------------------------------------------");


// to string - converts whole array to a string

let carString = cars.toString();
console.log(carString);

let bikeString = bikes.toString();
console.log(bikeString);

console.log("----------------------------------------------------------------");

// at - returns the specific element at given index

let carAt = cars.at(1);
console.log(carAt);

let bikeAt = bikes.at(2);
console.log(bikeAt);

// we can also use bike[2]
// this will also give the same result

console.log("----------------------------------------------------------------");

// join - joins all array elements into a string but we can specify the separator

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "911 gt3 rs"];
// bikes = ["z900", "panigale v4", "s1000 rr", "hayabusa"];

let carJoin = cars.join(" - ");
console.log(carJoin);

let bikeJoin = bikes.join(" - ");
console.log(bikeJoin);

console.log("----------------------------------------------------------------");

// pop - it removes the last element from the array and returns it.

let carPop = cars.pop();

console.log(carPop); // removed element
console.log(cars); // array after removing last element

let bikePop = bikes.pop();

console.log(bikePop); // removed element
console.log(bikes); // array after removing last element

console.log("----------------------------------------------------------------");

// push - it adds a new element at the end of an array

cars.push("911 gt3 rs");
console.log(cars);

bikes.push("hayabusa");
console.log(bikes);

console.log("----------------------------------------------------------------");

// shift - removes the first element from the array

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "911 gt3 rs"];
// bikes = ["z900", "panigale v4", "s1000 rr", "hayabusa"];

let carShift = cars.shift();
console.log(carShift); // first element which is removed from array
console.log(cars); // array after removing first element


let bikeShift = bikes.shift();
console.log(bikeShift); // first element which is removed from array
console.log(bikes); // array after removing first element

console.log("----------------------------------------------------------------");

// unshift - adds a new element at the beginning of an array

// cars = [ 'pista 488', 'aventador svj', '911 gt3 rs' ]
// bikes = [ 'panigale v4', 's1000 rr', 'hayabusa' ]

cars.unshift("gtr35 nismo");
console.log(cars);

bikes.unshift("z900");
console.log(bikes);

console.log("----------------------------------------------------------------");

// change elements by using their index numbers (index starts from 0)

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "911 gt3 rs"];
cars[3] = "m2 competition";
console.log(cars);

// bikes = ["z900", "panigale v4", "s1000 rr", "hayabusa"];
bikes[0] = "zx6r";
console.log(bikes);

// delete - used to delete an element at specific index
// but delete leaves "undefined" holes in array
// it is suggested to use pop() or shift instead of delete!

let cars1 = ["gtr35 nismo", "pista 488", "aventador svj", "911 gt3 rs"];
delete cars1[3];
console.log(cars1);


let bikes1 = ["z900", "panigale v4", "s1000 rr", "hayabusa"];
delete bikes1[0];
console.log(bikes1);

console.log("----------------------------------------------------------------");

// ------------merge-------------

// concat - used to join 2 arrays

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "m2 competition"]
// bikes = ["zx6r", "panigale v4", "s1000 rr", "hayabusa"];

let monsters = cars.concat(bikes);
console.log(monsters);

console.log("----------------------------------------------------------------");

// we can merge by value as well

monsters = monsters.concat("Range Rover Sport")
console.log(monsters);

console.log("----------------------------------------------------------------");

// splice for adding elements

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "911 gt3 rs"];
cars.splice(2,0, "g63 amg", "f-pace")
console.log(cars);

// bikes = ["z900", "panigale v4", "s1000 rr", "hayabusa"];
bikes.splice(3,0, "fatbob", "continental gt")
console.log(bikes);

console.log("----------------------------------------------------------------");

// splice for removing items

cars.splice(2,2);
console.log(cars);

bikes.splice(3,2)
console.log(bikes);

console.log("----------------------------------------------------------------");

// slice - slices out a piece of an array into a new array
// it does not remove any elements from the source array.
// it just creates a new array

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "m2 competition"]
let favCars = cars.slice(0,2);
console.log(favCars);

// bikes = ["zx6r", "panigale v4", "s1000 rr", "hayabusa"];
let favBikes = bikes.slice(1,3);
console.log(favBikes);

console.log("----------------------------------------------------------------");

// indexOf - returns the index of given element from an array

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "m2 competition"]

let pistaIndex = cars.indexOf("pista 488");
console.log(pistaIndex);

// bikes = ["zx6r", "panigale v4", "s1000 rr", "hayabusa"];
let s1krrIndex = bikes.indexOf("s1000 rr");
console.log(s1krrIndex);

console.log("----------------------------------------------------------------");

// includes - used to check if any specific element exists in the array.

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "m2 competition"]
console.log(cars.includes("m2 competition")); // true - bcs it exists in our array

// bikes = ["zx6r", "panigale v4", "s1000 rr", "hayabusa"];
console.log(bikes.includes("zx10r")); // false - bcs it don't exists in our array

console.log("----------------------------------------------------------------");

// sort - this method sorts an array alphabetically

// cars = ["gtr35 nismo", "pista 488", "aventador svj", "m2 competition"]
cars.sort();
console.log(cars);

// bikes = ["zx6r", "panigale v4", "s1000 rr", "hayabusa"];
bikes.sort();
console.log(bikes);

console.log("----------------------------------------------------------------");

// reverse - this method reverses all the elements in an array

cars.reverse()
console.log(cars);

bikes.reverse();
console.log(bikes);

console.log("----------------------------------------------------------------");


