// function asyncf1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 1");
//             resolve("successfully");
//         },4000)
//     })
// }

// function asyncf2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 2");
//             resolve("kaam puru");
//         },6000)
//     })
// }

// asyncf1().then((res)=>{
//     console.log("complete", res);

//     console.log("fetching data 2...");
//     asyncf2().then((res)=>{
//         console.log("thai gayu bhai", res);
//     })
// })


function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataID);
            resolve("success");
        }, 5000);
    });
    
}


getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
});