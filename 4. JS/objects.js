const obj = {
    fname: "dharmik",
    lname: "bhuva",
    getfullname: function(){
        return `${this.fname} ${this.lname}`
    },
}
console.log(obj.getfullname());

const obj2 = {
    fname: "manav",
    lname: "bhuva",
}

obj2.__proto__ = obj
//this is prototype inheritance
// also called as prototype chaining

// DRY - do not repeat yourself

console.log(obj2.getfullname());


class A{
    funInsideA(){
        console.log("calling from a");

    }
}

class B{
    funInsideB(){
        console.log("calling from b");
        
    }
}



const p = new B
B.prototype.__proto__ = A.prototype

p.funInsideA()


