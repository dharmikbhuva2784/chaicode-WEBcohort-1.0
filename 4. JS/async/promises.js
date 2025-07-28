const { resolve } = require("bun");

let promise = new Promise ((resolve, reject) =>{
    console.log("I am a promise");
    resolve("success")
});

// let promise2 = new Promise ((resolve, reject) =>{
//     console.log("I am a promise");
//     reject("error occurred")
// });

console.log(promise);
//here resolve and reject are the callbacks provided by js
// if resolved, then our task performed successfully
// if not , then it will also perform the task but we will get an error

function getData(dataID, getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}
//we dont create promises, we just use them

console.log('--------------------------');


const getpromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve("success")
        // reject("some error occurred");
    });
}

let promise3 = getpromise();
promise3.then(() => {
    console.log("promise fulfilled!");  
});