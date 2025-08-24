const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);

console.log(newArr);

const num1 = [1,2,3,4,5,6,7,8,9,10]
const sqrArr = num1.map(n => n * n)

console.log(sqrArr);

const num2 = [1,2,3,4,5,6,7,8,9,10]
const multipleOfFive = num2.map(function(n){
    return n * 5;
})

console.log(multipleOfFive);
