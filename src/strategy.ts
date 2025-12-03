interface PaymentStrategy {
  process(amount: number): string;
}

class CreditCardPayment implements PaymentStrategy {
  process(amount: number): string {
    return `Оплата ${amount} с помощью кредитки`;
  }
}

class PayPalPayment implements PaymentStrategy {
  process(amount: number): string {
    return `Оплата ${amount} с помощью Пэйпал`;
  }
}

class CryptoPayment implements PaymentStrategy {
  process(amount: number): string {
    return `Оплата ${amount} с помощью Криптовалюты`;
  }
}

class PaymentProcessor {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  processPayment(amount: number): string {
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
