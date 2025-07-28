//we want individual delay
// like we get data1 after 2sec delay, then we get data2 after another 2 sec delay, then we get data3 after another 2 sec delay

//we can do that by using callbacks

function getData(dataID, getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){
            getNextData();
        }
    },2000)
}

getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("data fetching completed!");
        });
    });
});

// the upper code is called as a callback hell in js
//bcs we stacked callbacks inside a callback, so it's a nested callback
//nested callbacks stacked below one another

//this code is difficult to understand

// to solve the problem of callback hell we have the concept called "promises"

