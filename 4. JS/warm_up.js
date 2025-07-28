Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function masalachai(){};

function gingerchai(){};

function greet(name){
    return `Hello ${name}`;
}

greet.describe();
masalachai.describe();
gingerchai.describe();


//function declaration
function add(a,b){
    return a+b;
}

//function expression
const subtract = function(a,b){
    return a-b;
}

const multiply = (a,b) => a+b;


//first class function
function applyOperation(a,b, operation){
    return operation(a,b);
}

const result = applyOperation(5,4,(x,y)=>x/y);
console.log(result);
//


//

function creataCounter(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}

const counter = creataCounter()
console.log(counter());

(function(){
    console.log("hitesh");
})

()

