function Bike(make, model, cc, engineType, topSpeed) {
  if (!new.target) {
    // throw new Error("bike should be called with new keyword!");
  }
  this.make = make;
  this.model = model;
  this.cc = cc;
  this.engineType = engineType;
  this.topSpeed = topSpeed;

  this.sound = function () {
    return `${this.model} goes like brrrrrrrr!`;
  };
}

try {
  let s1krr = Bike("BMW", "S1000rr", 1000, "inline", 300);
  console.log(s1krr.sound());
} catch (err) {
  console.log(`this is error`,err);
}
