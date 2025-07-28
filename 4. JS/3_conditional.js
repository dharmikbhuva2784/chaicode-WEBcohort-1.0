// server call

let weather = "cloudy";

if (weather === "rainy"){
    console.log("it's raining, carry an umbrella");
}else if (weather === "cloudy"){
    console.log("it's cloudy, take the jacket");
} else{
    console.log("it's sunny, wear sunglasses");
}

let no_of_guest = 1;
let pizza_size;

//small<=2
//medium <= 5
//large <= 10

// exercise

if(no_of_guest <= 2){
    pizza_size = 'small';
    console.log(`you will require a ${pizza_size} pizza for ${no_of_guest} persons`);
    
} else if(no_of_guest <= 5){
    pizza_size = 'medium';
    console.log(`you will require a ${pizza_size} pizza for ${no_of_guest} persons`);
} else if (no_of_guest <= 10) {
    pizza_size = 'large';
    console.log(`you will require a ${pizza_size} pizza for ${no_of_guest} persons`);
} else{
    pizza_size = 'multiple pizzas';
    console.log(`you will require multiple pizzas for ${no_of_guest} persons`);
}

// (if else) is greedy algorithm

console.log(pizza_size);


year = 2004;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }
    } else {
        console.log(`${year} is a leap year`);
    }
} else {
    console.log(`${year} is not a leap year`);
}


// exercise

//90+ = a
//80 = b
//70 = c
//60 = d
//f

function gradeCalculator(score){
    if(score>=90){
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let grade = gradeCalculator(78)
console.log(grade);
