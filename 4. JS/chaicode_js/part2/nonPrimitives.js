const username = {
  "first name": "dharmik",
  isLoggedin: true,
};

// username["first name"] = "shivam";
username.lastname = "bhuva";

console.log(username["first name"]);
console.log(username.lastname);
console.table(username);
console.log(typeof username);

// date obj

let today = new Date();
// console.log(today.getDate());

// Array

let anotherUser = ["dharmik", true];

console.log(anotherUser[0]);

// type conversion

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));
