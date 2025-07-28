const person = {
    x: 10,
    firstName: "dharmik",
    lastName: "bhuva",
    hobbies: ['Coding','Gym'],
    ismarried: false,
    hasGf: false,
    hadGf: false,
    hadCrush: Infinity,
    getFullName: function(){
        return 'Dharmik Bhuva'
    },
    address: {
        house: 1,
        street: 1,
        countryCode: 'IN',
        state: 'PB'
    }
}

console.log(person.address.state);

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


function objCopy(obj1){
    let str = JSON.stringify(obj1);
    let obj2 = JSON.parse(str);
    return obj2;
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

let p2 = objCopy(p1)

console.log(p2);
