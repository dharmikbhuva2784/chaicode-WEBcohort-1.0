const getpromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a promise");
        resolve("success")
        // reject("network error occurred");
    });
}

let promise3 = getpromise();
promise3.then((res) => {
    console.log("promise fulfilled!",res);  
});

promise3.catch((err) => {
    console.log("rejected",err);
})