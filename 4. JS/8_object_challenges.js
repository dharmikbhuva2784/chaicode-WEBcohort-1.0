//ts-worksheet-with-variables

// create an object representing a type of tea with properties like name, type, and caffeine content.

const { log } = require("console")

let tea= {
    name: "Lemon Tea",
    type: "Green",
    caffeine: "Low"
}

console.log(tea.name);
console.log(tea["type"])

//add a new property origin to the tea object

tea.origin = "Assam";

//change the caffeine level of the tea object to "Medium"

tea.caffeine = "Medium";

//Remove the type property from the tea object

delete tea.type;

//check if the tea object has property "origin"

tea.hasOwnProperty("origin")

// use fro in loop to print all properties of the tea object

for(let key in tea){
    console.log(`${key} : ${tea[key]}`);
}

const myTeas = {
    greenTea: {
        name: "Green Tea",
        type: "Herbal",
        caffeine: "Low",
        origin: "China"
    },
    blackTea: {
        name: "Black Tea",
        type: "Black",
        caffeine: "High",
        origin: "India"
    },
    oolongTea: {
        name: "Oolong Tea",
        type: "Oolong",
        caffeine: "Medium",
        origin: "Taiwan"
    }
}

// create a copy of the tea object
const tea_str = JSON.stringify(myTeas);

const myTeasCopy = JSON.parse(tea_str);

console.log(myTeasCopy);
