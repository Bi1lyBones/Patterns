"use strict";
class Car {
    drive() {
        console.log("Машина едет");
    }
    driveRight() {
        console.log("Машина поворачивает");
    }
}
class CarDecorator {
    constructor(car) {
        this.car = car;
    }
    drive() {
        this.car.drive();
    }
    driveRight() {
        this.car.driveRight();
        console.log("... + включается парктроник");
    }
}
const usualCar = new Car();
const newCar = new CarDecorator(usualCar);
newCar.driveRight();
