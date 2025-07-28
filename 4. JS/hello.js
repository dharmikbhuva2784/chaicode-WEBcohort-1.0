function printchai(){
    console.log("chaai lo");
    
}

function brush(n){
    console.log(`${n} brush laao`);
}

function add(a,b){
    return a+b;
}

console.log(add(7,8));
brush(10);
printchai();

function totalcupcakes(t1,t2){
    return t1+t2;
}

function totalchocolates(barsperbox,totalbox){
    return barsperbox * totalbox;
}
console.log(totalcupcakes(12,20));
console.log(totalcupcakes(2,20));
console.log(totalchocolates(4,9));

function square(n){
    return n*n;
}

console.log(square(4));
console.log(square(7));
console.log(square(69));
console.log(square(10));


function calc(a,b,op){
    switch(op){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            if(b!==0){
                return a/b;
                break
            }else{
                return "division by 0 is not possible";
                break;
            }
        default:
            return "Invalid operation!!!"
    }
}

console.log(calc(10,5,'*'));

