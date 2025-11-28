"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClass = void 0;
class MyClass {
    // Закрытый конструктор для предотвращения создания экземпляров класса извне
    constructor() { }
    //ключевой метод для единождого создания экземпляра класса и предоставления
    //глобальной точки доступа
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    //методы класса
    sayHello() {
        console.log("выполнение метода sayHello");
    }
    doSomething() {
        console.log("выполнение метода doSomething");
    }
}
exports.MyClass = MyClass;
