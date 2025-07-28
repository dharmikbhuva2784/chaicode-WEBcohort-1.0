Function.prototype.describe = function(){
    console.log(`Function name is ${this.name}`);
}

function masalachai(){};

function gingerchai(){};

function greet(name){
    return `Hello ${name}`;
}

greet.describe();
masalachai.describe();
gingerchai.describe();