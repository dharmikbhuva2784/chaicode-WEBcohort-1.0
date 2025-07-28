//ts-worksheet-with-variables

const { log } = require("util");

const person = {
    x : 10,
    firstname : 'Dharmik',
    lastname : 'Bhuva',
    hobbies : ['cinematography','editing','programming'],
    ismarried : false,
    getfullname : function () {
        return "Dharmik Bhuva"
    },

    address: {
        house_no: 1,
        street: 3,
        countrycode: "IN",
        state : "GJ",
        pincode: 360005
    }
}

console.log(person.address.pincode);


const remote = {
    color : "black",
    brand : "samsung",

    dimensions: {
        height : 10,
        width : 5,
        depth : 1
    },

    turnoff : function () {
        console.log(`turning off the tv`);   
    },

    volumeup : function(){
        console.log(`increasing the volume`);
    }
}

let p1 = {
    fname : 'John',
    lname : 'wick',

    address : {
        house_no: 1,
        street: 3,
        countrycode: "IN",
        state : "GJ",
        pincode: 360005
    }
}

const p1_string = JSON.stringify(p1);
let p2 = JSON.parse(p1_string);

function Obj_Copy(obj){
    return JSON.parse(JSON.stringify(obj));
}

demo = Obj_Copy(p1);
demo.fname = 'Jane';
console.log(demo);

// p1 to p1_string - serialization
// p1_string to p2 - deserialization
// p2 to p1 - deep copy

p2.fname = 'spongebob';

console.log(p2);
console.log(p1);

// serialization - converting object to string
// deserialization - converting string to object
// deep copy - creating a new object with the same properties as the original object
