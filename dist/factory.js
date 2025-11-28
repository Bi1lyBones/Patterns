"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportFactory = exports.Ship = exports.Truck = void 0;
//Классы Truck и Ship реализуют метод deliver() за счет имплементации.
class Truck {
    deliver() {
        console.log("Доставка будет совершена с помощью грузовика");
    }
}
exports.Truck = Truck;
class Ship {
    deliver() {
        console.log("Доставка будет совершена с помощью корабля");
    }
}
exports.Ship = Ship;
//Класс для создания объектов классов Truck и Ship
class TransportFactory {
    static createTransport(transportType) {
        if (transportType === "truck") {
            return new Truck();
        }
        if (transportType === "ship") {
            return new Ship();
        }
        return null;
    }
}
exports.TransportFactory = TransportFactory;
