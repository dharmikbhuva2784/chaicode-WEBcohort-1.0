//nesting
//callback hell - nested callbacks

let age = 20;
if(age>= 18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
}else{
    console.log("child");
}

//nested loops

for(let i = 0; i < 5 ; i++){
    let str = "";
    for(let j = 0; j < 5; j++){
        str = str + j;
    }
    console.log(i,str);
}

//jab callbacks ki nesting bohot deeper level pe chali jaati hai to callback hell ki problem ho jaati hai.