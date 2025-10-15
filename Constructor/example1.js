class Vechicle {
  constructor(model, brand) {
    this.model = model;
    this.brand = brand;
  }
  start() {
    console.log(`${this.model} ${this.brand} is starting..`);
  }
}
class Car extends Vechicle {
  constructor(model, brand, color, fueltype) {
    // calling parent constructor
    super(model, brand);
    this.color = color;
    this.fueltype = fueltype;
  }
  //Overriding the start method
  start() {
    super.start();
    console.log(`${this.color} ${this.fueltype}`);
  }
}
let car1 = new Car("Testla", 5, "Red", "Electric");

car1.start();
