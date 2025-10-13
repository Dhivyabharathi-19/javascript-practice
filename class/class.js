class Car {
  constructor(brand, model, pricepk) {
    console.log("newcar object");
    this.brand = brand;
    this.model = model;
    this.pricepk = pricepk;

    console.log(`${this.brand}${this.model}${this.pricepk}`);
  }
  calculateprice(distance) {
    let price = distance * this.pricepk;
    console.log(`distance:${distance}km`);
    console.log(`pricepk:${this.pricepk}`);
    console.log(`price:${price}`);
    return price;
  }
}
let car1 = new Car("venue", "m1", 150);
let car2 = new Car("Toyato", " m2", 250);

car1.calculateprice(15);
car2.calculateprice(10);
