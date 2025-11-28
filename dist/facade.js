"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = exports.SecondClass = exports.FirstClass = void 0;
//Система классов (FirstClass и SecondClass)
class FirstClass {
    method() {
        return "Применение метода из FirstClass";
    }
}
exports.FirstClass = FirstClass;
class SecondClass {
    method(value) {
        return value; // метод возвращает переданное значение
    }
}
exports.SecondClass = SecondClass;
//упрощаем вызов методов из классов FirstClass и SecondClass с помощью Facade
class Facade {
    FirstClass() {
        return new FirstClass().method();
    }
    SecondClass(value) {
        return new SecondClass().method(value);
    }
}
exports.Facade = Facade;
