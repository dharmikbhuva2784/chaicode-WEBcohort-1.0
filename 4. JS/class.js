class Person {
    constructor(fname,lname){
        this.fullname = fname;
        this.lastname = lname;
    }

    getfullname(){
        return `${this.fullname} ${this.lastname}`
    }
}

const p1 = new Person("dharmik","bhuva");
const p2 = new Person("manav","bhuva");

console.log(p1.getfullname());
console.log(p2.getfullname());

//constructors
// default constructor
// we do not require any parameters here to create an object

// parametrized constructor
// we required th defined parameters inside constructor to create an object

// when we use new keyword , it allocates new memory in heap
// then it stores it's address in p1 and p2

//we can have only one constructor in js