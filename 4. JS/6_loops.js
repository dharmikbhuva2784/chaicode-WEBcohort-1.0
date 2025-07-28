//ts-worksheet-with-variables
let tea = ['green','black','herbal','orange','oolong'];

// want to print
let h = 0;
console.log(tea[h]);

// loop - iteration

// for (let i = 0; i < tea.length; i++) {
//     const x = tea[i];
//     console.log(`tea at index ${i} = ${x}`);
// }

// console.log('------------------');

// while(h < tea.length){
//     console.log(`tea at index ${h} = ${tea[h]}`);
//     h++;
// }

let myArray= [1,2,3,4,5,6,7,8,9,10];
let myArray2 = [10,20,30,40,50,60,70,80,90,100]


function sumArray(array){

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = 0;
    let i = 0;
    let j = 0;


    //using for in loop
    for (const x in array) {
        sum1+= array[x];
    }
    //output of for in loop
    console.log(`Sum of the array elements using for in loop = ${sum1}`);

    console.log('------------------');
    
    //using for loop
    for (let i = 0; i < array.length; i++) {
        sum2 += array[i];
    }
    //output of for loop
    console.log(`Sum of the array elements using for loop = ${sum2}`);

    console.log('------------------');

    //using while loop
    while (i < array.length) {
        sum3 += array[i];
        i++        
    }
    //output of while loop
    console.log(`Sum of the array elements using while loop = ${sum3}`);

    console.log('------------------');

    //using do while loop
    do {
        sum4 += array[j];
        j++
    } while (j < array.length);
    //output of do while loop
    console.log(`Sum of the array elements using do while loop = ${sum3}`);
    
    console.log(`==================================================`);
}


sumArray(myArray);
sumArray(myArray2);