// PO challenge 1
// Easy

// You and your friend are baking cupcakes for a party. You've filled up two trays, each with a certain number of cupcakes. You want to know the total number of cupcakes you have before you frost them.

// Challenge
// Create a function that adds two numbers (representing cupcakes on each tray) and returns the total.

function totalCupcakes(tray1, tray2){
    return tray1 + tray2;
}

// test cases
console.log(totalCupcakes(12,20));
console.log(totalCupcakes(2,20));

console.log("_________________________________________________________________________");

// PO challenge 2
// Easy
// You have a basket of apples, but you decide to give some away to your neighbor. How many apples are left in your basket?

// Challenge
// Write a function that subtracts the number of apples given away from the total apples you started with, then returns the remaining apples.

function remaining(total,given){
    return total - given;
}

console.log(remaining(20,5));
console.log(remaining(50,13));
console.log(remaining(100,1));

console.log("_________________________________________________________________________");

// PO challenge 3
// Easy
// You're packing chocolate bars into gift boxes. Each box must contain the same number of chocolate bars. How many chocolate bars do you need for all the boxes ?

// Challenge
// Create a function that multiplies two numbers (chocolate bars per box and number of boxes) and returns the total number of chocolate bars needed.

function totalChocolateBars(barsPerBox, numberOfBoxes){
    return barsPerBox * numberOfBoxes;
}

// test cases
console.log(totalChocolateBars(5,10));
console.log(totalChocolateBars(9,4));
console.log(totalChocolateBars(3,3));

console.log("_________________________________________________________________________");

