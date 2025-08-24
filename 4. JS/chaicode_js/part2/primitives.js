// number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof balance);
console.log(typeof anotherBalance);

console.log();

// boolean
let isBoolean = true;
let isReallyActive = new Boolean(true); // not recommended

// null and undefined

let firstname = null;
let lastname = undefined;

console.log(firstname);
console.log(lastname);

// string

let myString = "hello";
let myString1 = "Hola";
let username = "dharmik";

let oldGreet = myString + " " + "dharmik";
console.log(oldGreet);

let greetMessage = `hello ${username} ! `;
let demo1 = `Value is ${2+2}`
console.log(demo1);

// symbol

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");

console.log(sm1 == sm2);