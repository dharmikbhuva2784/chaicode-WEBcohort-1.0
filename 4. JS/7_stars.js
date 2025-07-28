//ts-worksheet-with-variables
function pattern(n){
    let result = "";
    for(let i=n; i>0;i--){
        let row = "";
        for(let j=0;j<i;j++){
            row+="*"
        }
        if(i === 1){
            result += row;
            break;
        }else{
            result += row+"\n";
        }
  }
  return result;
}

console.log(pattern(4))