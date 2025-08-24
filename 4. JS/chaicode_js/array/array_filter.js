const ages = [32, 33, 16, 40];
const result = ages.filter(age => age > 18);

console.log(result);

const ages1 = [32, 33, 16, 40];
const result1 = ages1.filter(function(age){
    if(age > 18){
        return age
    }else{
        return;
    }
})

console.log(result1);

const ages2 = [32, 33, 16, 40];
const result2 = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

console.log(result2);
