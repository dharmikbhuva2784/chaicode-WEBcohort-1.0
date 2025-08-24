let computer = {
  cpu: 12,
  ram: "32gb"
};

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);


let genericCar = {
    tyres: 4,
}

let tesla = {
    driver: "Ai"
}

Object.setPrototypeOf(tesla, genericCar);
console.log(Object.getPrototypeOf(tesla));
