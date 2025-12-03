"use strict";
class CreditCardPayment {
    process(amount) {
        return `Оплата ${amount} с помощью кредитки`;
    }
}
class PayPalPayment {
    process(amount) {
        return `Оплата ${amount} с помощью Пэйпал`;
    }
}
class CryptoPayment {
    process(amount) {
        return `Оплата ${amount} с помощью Криптовалюты`;
    }
}
class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    processPayment(amount) {
        return this.strategy.process(amount);
    }
}
const amount = 50;
const creditCard = new CreditCardPayment();
const processor = new PaymentProcessor(creditCard);
console.log(processor.processPayment(amount));
const payPal = new PayPalPayment();
processor.setStrategy(payPal);
console.log(processor.processPayment(amount));
