const { resolve } = require("bun");

async function Hello() {
    console.log("hello");
}

function api() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000)
    });
}

async function getweatherdata() {
    await api();
    await api();
}