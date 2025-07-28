//1
const teas = ["Herbal Tea",'green tea','black tea','oolong tea','white tea']
//2
teas.push("Chamomie tea");

//3
const index = teas.indexOf('oolong tea');
if(index > -1){
    teas.splice(index, 1)
}

//4
const caffeinated = teas.filter((tea) => tea !== "Herbal Tea");

//5
teas.sort();

//-------------------

const test = ["🦃","🥚","🐣"]
console.log(test.sort());

//-------------------

//6.
teas.forEach(i => {
    console.log(i);
});

for (let i = 0; i < teas.length; i++) {
    console.log(teas[i]);
}

//7. 
let caffeinatedMyTeas = 0;

for(let i = 0; i< teas.length; i++){
    if(teas[i] !== "Herbal Tea"){
        caffeinatedMyTeas++;        
    }
}

console.log(caffeinatedMyTeas);

//8.
let uprcase = [];
for(let i = 0; i < teas.length; i++){
    uprcase.push(teas[i].toUpperCase());
}

console.log(uprcase);

//9. 
let highest = 0;

for(let i = 0; i < teas.length; i++){
    if(teas[i].length > highest){
        highest = teas[i];
    }
}
console.log(`highest name length tea = ${highest}`);

//10.
const reversedTeas = [];
for(let i = teas.length - 1; i >= 0; i--){
    reversedTeas.push(teas[i]);
}

console.log(reversedTeas);

console.log(teas);