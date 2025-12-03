"use strict";
class CreditCardPaymentStrategy {
    newprocess() {
        console.log("Оплата с помощью карты");
    }
}
class PayPalPaymentStrategy {
    newprocess() {
        console.log("Оплата с помощью ПэйПала");
    }
}
class NewPaymentProcessor {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
}
