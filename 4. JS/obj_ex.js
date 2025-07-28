const teas = {
    name: "lemon tea",
    type: "Green",
    caffine: "low"
}

console.log(teas.name);
console.log(teas["type"]);

teas.origin = "China";

teas.caffine = "Medium";

delete teas.type;

console.log("origin" in teas);

// console.log(teas.origin ? true : false);

for(let key in teas){
    console.log(`${key} = ${teas[key]}`);
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

const tea_string = JSON.stringify(teas);
const teas2 = JSON.parse(tea_string); // deep copy

const teas_2 = {
    ...teas
} // shalow copy

console.log(teas2);
console.log(teas_2);

