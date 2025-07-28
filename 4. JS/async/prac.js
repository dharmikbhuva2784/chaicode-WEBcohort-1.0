function getData(dataID){
    setTimeout(() => {
        console.log("data",dataID);
    },2000);
}

//suppose this data fetching from database is taking time of 2 sec
// and sends users the data after 2 secs

getData(456)

//we are writing a code for fetching data1, then data2, then data3
//not every data at once, we want data1 at first, data2 next, then data3 at last

getData(1)
getData(2)
getData(3)

// we might be thinking this way will work, but it actually doesn't
// it gives all the data at once
