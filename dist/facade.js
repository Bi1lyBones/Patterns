"use strict";
class Engine {
    engineOn() {
        console.log("Двигатель запущен");
    }
    engineOff() {
        console.log("Двигатель выключен");
    }
}
class Electricity {
    electricityOn() {
        console.log("Электричество включено");
    }
    electricityOff() {
        console.log("Электричество выключено");
    }
}
class Facade {
    constructor() {
        this.engine = new Engine();
        this.electricity = new Electricity();
    }
    carStart() {
        this.electricity.electricityOn();
        this.engine.engineOn();
    }
}
const facade = new Facade();
facade.carStart();
