interface newStrategy {
  paymentProcess(): void;
}

class newCreditCard implements newStrategy {
  paymentProcess(): void {
    console.log("Payment by Card");
  }
}

class newPayPal implements newStrategy {
  paymentProcess(): void {
    console.log("Payment by paypal");
  }
}

class newPayment {
  private newStrategy: newStrategy;
  constructor(newStrategy: newStrategy) {
    this.newStrategy = newStrategy;
  }
  setNewProcess(newStrategy: newStrategy) {
    this.newStrategy = newStrategy;
  }
  newProcessPayment(): void {
    this.newStrategy.paymentProcess();
  }
}

const visaCard = new newCreditCard();
const PayPalNew = new newPayPal();

const newPaymentProcess = new newPayment(visaCard);

newPaymentProcess.newProcessPayment();

newPaymentProcess.setNewProcess(PayPalNew);

newPaymentProcess.newProcessPayment();
