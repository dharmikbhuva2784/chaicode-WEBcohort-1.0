function asyncf1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 1");
            resolve("successfully");
        },4000)
    })
}

function asyncf2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data 2");
            resolve("kaam puru");
        },6000)
    })
}

console.log("fetching data 1...");

let p1 = asyncf1();
p1.then((res)=>{
    console.log("complete", res);

    console.log("fetching data 2...");
    let p2 = asyncf2();
    p2.then((res)=>{
        console.log("thai gayu bhai", res);
    })
})


//we can also write like this

asyncf1().then((res)=>{
    console.log("complete", res);

    console.log("fetching data 2...");
    asyncf2().then((res)=>{
        console.log("thai gayu bhai", res);
    })
})
