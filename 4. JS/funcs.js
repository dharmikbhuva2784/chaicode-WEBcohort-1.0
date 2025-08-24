function hello(name) {
  console.log(`hello ${name}`);
}

hello("dharmik");

function sum(x, y) {
  console.log(x + y);
}

sum(1, 3);

function multi(x, y) {
  // x and y act as a local variable
  // function parameters are like local variables
  // it have block scope (we can only access inside function block)
  return x * y;
  // return ke baad ka code kabhi bhi execute nahi hota!!!
  // isiliye reutrn ke baad kuch bhi nahi likha jaata!
}

let multip = multi(5, 3);

console.log(multip);

// arrow functions

function sub(x, y) {
  return x - y;
} // normal functions

const div = (x, y) => {
  return x / y;
};

const multi2 = (x, y) => {
  return x * y;
};
console.log(`-------------`);

let result = multi2(15, 2);
console.log(result);

let multiplication = multi2(10, 5);
console.log(multiplication);

console.log(`--------------`);

let division = div(10, 5);
console.log(division);

const printHello = () => {
  console.log("hello world");
};

printHello();

function countVowels(string) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (typeof string === "string") {
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string.charAt(i))) {
        count++;
      }
    }
    console.log(`vowels count for "${string}" = ${count}`);
  } else {
    console.log("Invalid datatype!");
  }
}

countVowels("hello");

const countVow = (string) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  if (typeof string === "string") {
    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string.charAt(i))) {
        count++;
      }
    }
    console.log(`vowels count for "${string}" = ${count}`);
  } else {
    console.log("Invalid datatype! (String expected)");
  }
};

countVow("hello");

// for-each

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((val, index, arr) => {
//     console.log(val*2, index, arr);
// });

// higher order functions - func that either take another func as parameter or return another function as their output

arr.forEach((x) => {
  console.log(x ** 2);
});

console.log(`-------------------`);

// array map
// map return a new array

arr.map((x) => {
  console.log(x);
});

console.log(`---------------------`);

let newArr = arr.map((x) => {
  return x * 2;
});

console.log(newArr);

console.log(`---------------------`);

// filter
// filter gives us a new array of elements that give true for condition

let nums = [1, 2, 3, 4, 5, 6, 7];

let even = arr.filter((x) => {
  return x % 2 === 0;
});

console.log(even);

// reduce method
// we want to perform some operation on array and we want to get a single value as an output

let num = [10, 20, 30, 40, 50, 1, 2, 3, 4, 5];

const op = num.reduce((res, curr) => {
  return Math.max(res, curr);
});

console.log(op);

// practice

let marks = [82, 78, 91, 69, 35];

let marks80plus = marks.filter((x) => x > 80);
console.log(marks80plus);

let n = prompt("enter a number");

let arr1 = [];

for (let i = 1; i <= n; i++) {
    arr1.push(i);
}

console.log(arr1);

let sum1 = arr1.reduce((res,curr)=>{
    return res+curr;
})

console.log(sum1);

let product = arr1.reduce((res,curr)=>{
    return res*curr;
})

console.log(product);
