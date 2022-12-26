'use strict';
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

// Inhertance from the Car constructor
const EV = function (make, speed, chargeTo) {
  Car.call(this, make, speed);
  this.chargeTo = chargeTo;
};

// Global, mutable variables
let incSpeed = this.speed;
let charge = this.chargeTo;

//  Polymorphsm used to change data as functions are called
EV.prototype.accilerate = function () {
  charge = this.chargeTo--;
  incSpeed = this.speed += 20;
  console.log(
    `${this.make} is going at ${incSpeed}km/hr with a charge of ${charge}%`
  );
};

//Object created
const eleCar = new EV('Tesla', 100, 90);

//The function calls
eleCar.accilerate();
eleCar.accilerate();
