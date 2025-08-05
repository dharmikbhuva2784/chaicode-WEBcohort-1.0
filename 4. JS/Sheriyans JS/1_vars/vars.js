// variables

// var let const

// declaration and initialization

var a;      //declaration
var a = 12; // declaration and initialize

// window mein add karta hai
// var function scoped hota hai
// var can be used in function

// app firse var ko declare kar skte hou aur error bhi nahi aayega!

let h = 12;

// to avoid this kind of errors, we use let to declare variables

const pi = 3.14; 

//when to use const
//when you already know that value are not going to be changed

// if we try to chnage the value of const, it will give us error that you are not allowed to do that.

//------------------------------------------------

//Scope

//global scope
//we can use this var on anywhere in this file
var b = 12; 


function abcd(){
    if (true) {
        let z = 12;
    }
}

//block scope
//we can use this var only inside the {} block

//------------------------------------------------

//reassignment , redeclaration
// redeclaration only works in "var" not in "let"

var i; //declaration
var i = 12; //initialize
i = 32; //reassignment
var i; //redeclaration

let x = 12;
x = 32;

//------------------------------------------------

// temporal dead zone - utna are jitne mein js ko pata to hai ki variable exist krta hai par wo aapko value nahi de skta

console.log(g);

let g = 12;

//------------------------------------------------

//hoisting impact per type

//hoisting - ek var ko js mein banate hain tb wo var do hisso mein tut jata hai an uska declare part upar chala jata hai aur uska initializtion part neeche reh jata hai

var o = undefined;
console.log(o);
o = 12;


//------------------------------------------------
