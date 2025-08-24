class Phone{
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
}

class SamsungPhone extends Phone{
    constructor(make,model,proccessor){
        super(make,model);
        this.proccessor = proccessor;
    }

    extends(){
        return `This class is derived from ${Object.getPrototypeOf(SamsungPhone.prototype).constructor.name} class`;
    }
}

let s23u = new SamsungPhone("Samsung","S23 Ultra", "Snapdragon 8 Gen 2")

console.log(s23u.extends());

