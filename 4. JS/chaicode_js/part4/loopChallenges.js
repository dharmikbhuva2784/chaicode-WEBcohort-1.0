/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let i = 1;
let sum = 0;
while (i <= 5) {
  sum = sum + i;
  i++;
}

console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
i = 5;
let countdown = [];
while (i >= 1) {
  console.log(i);
  countdown.push(i);
  i--;
}
console.log(countdown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

// let tea;
// let teaCollection = [];
// do {
//   tea = prompt(`enter your favourite tea (type stop to finish)`)

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

i = 1;
let sum1 = 0;
do {
  sum1 = sum1 + i;
  i++;
} while (i < 4);

console.log(sum1);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let k = 0; k < numbers.length; k++) {
  takeNumber = numbers[k]*2;
  multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);


/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let newArray = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let l = 0; l < newArray.length; l++) {
  console.log(newArray[l]);
  cityList.push(newArray[l]);
}

console.log(cityList);