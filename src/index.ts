import { Facade, FirstClass, SecondClass } from "./facade";
import { TransportFactory } from "./factory";
import { MyClass } from "./singleton";
import { ShoppingCart, CreditCardPayment, PayPalPayment } from "./strategy";
import { ConcreteDecorator, ConcreteSubject } from "./decorator";

console.log("ПРОВЕРКА РАБОТЫ FACTORY");

//вызов метода createTransport

const transport1 = TransportFactory.createTransport("truck");
transport1?.deliver();

const transport2 = TransportFactory.createTransport("ship");
transport2?.deliver();

//---------------------------------------------------------------------------------------------------------------------

console.log("ПРОВЕРКА РАБОТЫ SINGLETON");

const myClassInstance1 = MyClass.Instance;
myClassInstance1.sayHello();
myClassInstance1.doSomething();

const myClassInstance2 = MyClass.Instance;
console.log(myClassInstance1 === myClassInstance2);

//---------------------------------------------------------------------------------------------------------------------

console.log("ПРОВЕРКА РАБОТЫ STRATEGY");

//Создание нового экземпляра класса CreditCardPayment который реализует интерфейс PaymentStrategy
const creditCardCart = new ShoppingCart(new CreditCardPayment());
creditCardCart.addItem();
creditCardCart.addItem();
creditCardCart.checkout();

//Создание нового экземпляра класса ShoppingCart который реализует интерфейс PaymentStrategy
const paypalCart = new ShoppingCart(new PayPalPayment());
paypalCart.addItem();
paypalCart.addItem();
paypalCart.checkout();

//---------------------------------------------------------------------------------------------------------------------

console.log("ПРОВЕРКА РАБОТЫ FACADE");

console.log(new FirstClass().method());
console.log(new SecondClass().method("Новое сообщение"));

const FACADE = new Facade();
console.log(FACADE.FirstClass());
console.log(FACADE.SecondClass("Новое сообщение"));

//---------------------------------------------------------------------------------------------------------------------

console.log("ПРОВЕРКА РАБОТЫ DECORATOR");

const someDecorator = new ConcreteDecorator(new ConcreteSubject());
someDecorator.operationOne();
