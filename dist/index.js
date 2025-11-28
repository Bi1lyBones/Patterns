"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const facade_1 = require("./facade");
const factory_1 = require("./factory");
const singleton_1 = require("./singleton");
const strategy_1 = require("./strategy");
const decorator_1 = require("./decorator");
console.log("ПРОВЕРКА РАБОТЫ FACTORY");
//вызов метода createTransport
const transport1 = factory_1.TransportFactory.createTransport("truck");
transport1 === null || transport1 === void 0 ? void 0 : transport1.deliver();
const transport2 = factory_1.TransportFactory.createTransport("ship");
transport2 === null || transport2 === void 0 ? void 0 : transport2.deliver();
//---------------------------------------------------------------------------------------------------------------------
console.log("ПРОВЕРКА РАБОТЫ SINGLETON");
const myClassInstance1 = singleton_1.MyClass.Instance;
myClassInstance1.sayHello();
myClassInstance1.doSomething();
const myClassInstance2 = singleton_1.MyClass.Instance;
console.log(myClassInstance1 === myClassInstance2);
//---------------------------------------------------------------------------------------------------------------------
console.log("ПРОВЕРКА РАБОТЫ STRATEGY");
//Создание нового экземпляра класса CreditCardPayment который реализует интерфейс PaymentStrategy
const creditCardCart = new strategy_1.ShoppingCart(new strategy_1.CreditCardPayment());
creditCardCart.addItem();
creditCardCart.addItem();
creditCardCart.checkout();
//Создание нового экземпляра класса ShoppingCart который реализует интерфейс PaymentStrategy
const paypalCart = new strategy_1.ShoppingCart(new strategy_1.PayPalPayment());
paypalCart.addItem();
paypalCart.addItem();
paypalCart.checkout();
//---------------------------------------------------------------------------------------------------------------------
console.log("ПРОВЕРКА РАБОТЫ FACADE");
console.log(new facade_1.FirstClass().method());
console.log(new facade_1.SecondClass().method("Новое сообщение"));
const FACADE = new facade_1.Facade();
console.log(FACADE.FirstClass());
console.log(FACADE.SecondClass("Новое сообщение"));
//---------------------------------------------------------------------------------------------------------------------
console.log("ПРОВЕРКА РАБОТЫ DECORATOR");
const someDecorator = new decorator_1.ConcreteDecorator(new decorator_1.ConcreteSubject());
someDecorator.operationOne();
