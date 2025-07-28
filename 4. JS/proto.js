const arr = [1,2,3]

arr.fill()

const str = "db"

str.length // 2

const obj = {
    x: 1,
}

obj.x
//dot operator object ke properties ko access karne mein help karta hai

Array.prototype.db = function(){
    console.log("This is the custom function added by DB");   
}

const arr2 = [1,2,3,4]
arr2.db();

Object.prototype.chai = function(){
    console.log("Chai pee lo");
}

const obj1 = {
    x: 10
}

obj1.chai();

const arr3 = [4,3,2]
arr3.map(a=>a*3)

if(!Array.prototype.fill){
    //fallback - polyfill function -backup function
    Array.prototype.fill = function(){

    }
}

const arr1 = [1,2,3,4,5,6,7,8,9,10]

// polyfill for .foreach()
// do write polyfill func. , first understand the real signature

const ret = arr1.forEach(function(value,index){
    console.log(`Value at Index ${index} is ${value}`);
});

console.log(`Return ${ret}`);

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this

        for(let i = 0; i < originalArr.length; i++){
            userFn(originalArr[i],i)
        }
    }
}

arr1.myForEach(function(value,index){
    console.log(`MyForEach value at index ${index} is ${value}`);
});

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const originalArr = this
        const result = []
        for(let i = 0; i < originalArr.length; i++){
            const value = userFn(originalArr[i],i)
            result.push(value)
        }
        return result
    }
}

const newArr = arr1.myMap(a => a * 2);
console.log(newArr);

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const originalArr = this
        const result = [];

        for(let i = 0; i < originalArr.length; i++){
            const value = userFn(originalArr[i],i);
            if(value === true){
                result.push(value);
            }
        }
        return result;
    }
}

const newOne = arr1.filter((a) => a % 3 == 0);
console.log(newOne);

