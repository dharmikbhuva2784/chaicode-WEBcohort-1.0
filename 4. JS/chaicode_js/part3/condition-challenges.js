// Checking if a number is greater than another number:

let a = 5;
let b = 7;

if (a > b) {
    console.log(`${a} is bigger than ${b}`);
}
else{
    console.log(`${b} is bigger than ${a}`);
}

console.log("----------------------------------------");

// check if string is squal to another string

let username = "Dharmik"
let name2 = "Dharmik";

if(username == name2){
    console.log("same username!");
}
else{
    console.log("you can pick this username");
}

console.log("----------------------------------------");

//checking if a var is number or not

let score = "44";

if(typeof score === 'number'){
    console.log("Yep, this is a number");
}
else{
    console.log("Nope, this is not a number");
}

console.log("----------------------------------------");

//check if a boolean value is true or false

let isOnline = true;

if (isOnline) {
    console.log("The user is online");
}
else{
    console.log("The user is offline");
}

console.log("----------------------------------------");

// check if array is empty or not

let Ar1 = ['banana'];

if (Ar1.length === 0) {
    console.log("the array is empty");
}
else{
    console.log("the array is not empty");   
}