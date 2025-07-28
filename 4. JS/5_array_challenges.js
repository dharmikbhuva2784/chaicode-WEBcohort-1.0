// 1. create an array

const { reverse } = require("dns");

 let tea = ['green','black','herbal','orange','oolong','white','masala']
console.log(`1. ${tea}`);

console.log(`===================================================================`);

//2. add "chaomille" to the end of the array

tea.push('chaomile');
console.log(`2. ${tea}`);

console.log(`===================================================================`);


//3. remove "oolong" from the array

const index = tea.indexOf('oolong');

if(index > -1){
    tea.splice(index, 1);
}

console.log(`3. ${tea}`);

console.log(`===================================================================`);

//4. filter the list to only include teas that are caffeinated

const caffeinated = tea.filter(tea => tea !== 'herbal');

console.log(`4. ${caffeinated}`);

console.log(`===================================================================`);

//5. sort the array in alphabetical order

tea.sort();
console.log(`5. ${tea}`);

console.log(`===================================================================`);

//6. use for loop to print each tea in the array

for(let i = 0; i < tea.length; i++){
    console.log(tea[i]);
}

for (const x in tea) {
    console.log(tea[x]);
}

console.log(`===================================================================`);

// 7. use for loop to count how many teas are caffeinated excluding herbal tea
let count = 0;
for(x in tea){
    if (tea[x] !== "herbal") {
        count++;
    }
}

console.log(`7. Number of caffeinated teas: ${count}`);

console.log(`===================================================================`);

caff = tea.filter(tea => tea !== "herbal")
console.log(`caffeinated teas; ${caff.length}`);

console.log(`===================================================================`);

// 8. use for loop to create a new array with all tea names in uppercase

let uppercase_teas = [];
for(x in tea){
    uppercase_teas.push(tea[x].toUpperCase())
}
console.log(`8. Uppercase teas: ${uppercase_teas}`);

console.log(`===================================================================`);

// 9. use for loop to find the tea name with most characters
max = 0;
let longestTea = '';
for(x in tea){
    if(tea[x].length > max){
        max = tea[x].length;
        longestTea = tea[x];
    }
}

console.log(`9. Longest tea name: ${longestTea}`);

console.log(`===================================================================`);


// 10. use a for loop to reverse the order of the teas in the array

let reversedTeas = [];
for(x in tea){
    reversedTeas.unshift(tea[x]);
}

console.log(reversedTeas);

console.log(`===================================================================`);
