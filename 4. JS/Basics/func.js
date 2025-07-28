function welcome(){
    console.log("we are learning js functions");
}

welcome(); //invoke / call

function printmsg(msg){
    console.log(msg);    
}

printmsg("hellow");

// arrow function
const multi = (a,b) => {
    return a * b;
}

const sum = (a,b) => {
    return a + b;
}

const printhello = () => {
    console.log("hello");
    
}

function countvowels(str){
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U"){
            count++;
        }
    }
    console.log(`----- Count of vowels = ${count} -----`);
}

const countvowel = (str) => {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U"){
            count++;
        }
    }
    console.log(`----- Count of vowels = ${count} -----`);
}

countvowels("aeiou");
countvowel("chennai");

// callback = is a function passed as an arguement to another function.

let arr = [1,2,3,4,5]

function square(n){
    console.log(n*n);
    
}

arr.forEach((n) => {
    console.log(n*n);
});

let cities = ["rajkot","junagadh","jamnagar"];

cities.forEach((str) => {
    cap = str.toUpperCase();
    console.log(cap);
})

console.log("--------------------");

cities.forEach((str, index, cities) => {
    cap = str.toUpperCase();
    console.log(cap,index,cities);
})

console.log("--------------------");

console.log(multi(5,3));
console.log(sum(5,3));

//what are higher order function
// this forech is a higher order function or higher order method
//(using other func as parameter in this func)
//or they return another func as an output

console.log("--------------------------");

let a1 = [1,2,3,4,5,6,7,8,9,10];
a1.forEach((n) => {
    console.log(n*n);    
})

// or we can write like this also
console.log("--------------------------");

let calcsquare = (n) => {
    console.log(n*n);
}

a1.forEach(calcsquare);

console.log("--------------------------");

let arr1 = [2,4,6,8,10,12,14,16,18,20];

let arr2 = arr1.map((n) => {
    return n*n;
})

console.log(arr2);

let arr3 = arr1.map((n) => {
    return n*n;
})
