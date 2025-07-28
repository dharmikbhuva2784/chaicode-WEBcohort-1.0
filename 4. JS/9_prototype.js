//ts-worksheet-with-variables

const { log } = require("console");

const arr = [1,2,3,4,5,6,7,8,9,10];

console.log();

let str = "DB"

str.length

let obj = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "traveling", "swimming"],
    isEmployed: true
}

Array.prototype.hello = function(){
    console.log(`Hello World`);
}

arr.hello();

obj.name
// dot operator help us to access the object properties

Object.prototype.chai = function(){
    console.log(`Tea Time`);
}

obj.chai();

const arr1 = [4,2,3]
arr1.map(x => x *3)

if(!Array.prototype.fill) throw new Error(`Please update your browser`)

if(!Array.prototype.custom){
    Array.prototype.custom = function () {
        console.log(`custom created fill function`);
        //polyfill function
    }
}

arr.custom();

// const ret = arr.forEach(function(value, index){
//     console.log(`Value at index ${index} = ${value}`);
// });

// console.log(`ret is `,ret);



// polyfillllllllll for foreach
if(!Array.prototype.myForeach){
    Array.prototype.myForeach = function(userFn){
        const originalArr = this;
        for(let i = 0 ; i < originalArr.length ; i++){
            userFn(originalArr[i],i)
        }
    }
}

arr.myForeach(function(value, index){
    console.log(`polyfill func Value at index ${index} = ${value}`);
});


// polyfill for map

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = [];
        for(let i = 0 ; i < this.length ; i++){
            const value = userFn(this[i],i)
            result.push(value);
        }
        return result
    }
}

const MYMAParr = arr.myMap(function(value, index){
    return value * 2;
})

console.log(MYMAParr);

if(!Array.prototype.myfilter){
    Array.prototype.myfilter = function(userFn){
        const result = [];
        for(let i = 0 ; i < this.length ; i++){
            if(userFn(this[i],i)){
                result.push(this[i]);
            }
        }
        return result;
    }
}

const myFilter = arr.myfilter(function(value,index){
    if (value > 2) {
        return true;
    }
})

console.log(myFilter);

// to write a blog and dry run on paper


if(!Array.prototype.myfilter2){
    Array.prototype.myfilter2 = function(userFn){
        const result = [];
        for(let i = 0 ; i < this.length ; i++){
            if(userFn(this[i],i)){
                result.push(this[i]);
            }
        }
        return result;
    }
}

const even = arr.myfilter2(function(value,index){
    if (value % 2 === 0){
        return true;
    }
})

Array.prototype.helloworld = function(){
    console.log(`hello world function`)
}
console.log(even);