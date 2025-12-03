interface newCar {
  drive(): void;
  driveRight(): void;
}

class Car implements newCar {
  drive(): void {
    console.log("Машина едет");
  }

  driveRight(): void {
    console.log("Машина поворачивает");
  }
}

class CarDecorator implements newCar {
  protected car: newCar;

  constructor(car: newCar) {
    this.car = car;
  }

  drive(): void {
    this.car.drive();
  }

  driveRight(): void {
    this.car.driveRight();
    console.log("... + включается парктроник");
  }
}

const usualCar = new Car();
const newCar = new CarDecorator(usualCar);

newCar.driveRight();
