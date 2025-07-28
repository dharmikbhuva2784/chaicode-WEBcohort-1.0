

let arr = [2,3,4,5,6,7,8]
let newarr = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(newarr);

// reduce method

const sum = arr.reduce((res, curr) => {
    if(curr > res){
        return res;
    }else{
        return curr;
    }
})

let marks = [10,90,32,78,87,59,43,95,59,98];

let filtered = marks.filter((val) => {
    if(val > 90){
        return val;
    }
})

console.log(filtered);

let n = prompt("enter a number :");

let NewA = [];
for(let i = 1; i <= n ; i++){
    NewA.push(i);
}

console.log(NewA);

console.log(sum);
