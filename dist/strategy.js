"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = exports.PayPalPayment = exports.CreditCardPayment = void 0;
//Алгоритмы выполняющие схожую задачу (класс CreditCardPayment и PayPalPayment)
class CreditCardPayment {
    pay(amount) {
        console.log(`Оплата ${amount}$ с помощью кредитной карты`);
    }
}
exports.CreditCardPayment = CreditCardPayment;
class PayPalPayment {
    pay(amount) {
        console.log(`Оплата ${amount}$ с помощью PayPal`);
    }
}
exports.PayPalPayment = PayPalPayment;
class ShoppingCart {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
        this.items = 0; //константа для хранения количества товаров в корзине
    } // конструктор для реализации интерфейса PaymentStrategy в пределах класса
    //метод для увеличения количества товаров
    addItem() {
        this.items++;
    }
    // метод для вычисления общей суммы и инициализации процесса оплаты
    checkout() {
        const totalAmount = this.items * 10;
        console.log(`Итого: ${totalAmount}$`);
        this.paymentStrategy.pay(totalAmount);
    }
}
exports.ShoppingCart = ShoppingCart;
