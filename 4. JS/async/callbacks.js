function calc (a,b,sumCallback){
    sumCallback(a,b);
}

function sum(a,b){
    console.log(a+b);
    
}

calc(1,2,(a,b)=>{
    console.log(a+b);
});

