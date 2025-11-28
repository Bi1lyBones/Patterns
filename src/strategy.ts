//определение интерфейса для реализации методов классов
export interface PaymentStrategy {
  pay(amount: number): void;
}

//Алгоритмы выполняющие схожую задачу (класс CreditCardPayment и PayPalPayment)
export class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата ${amount}$ с помощью кредитной карты`);
  }
}

export class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Оплата ${amount}$ с помощью PayPal`);
  }
}

export class ShoppingCart {
  private items: number = 0; //константа для хранения количества товаров в корзине
  constructor(private paymentStrategy: PaymentStrategy) {} // конструктор для реализации интерфейса PaymentStrategy в пределах класса

  //метод для увеличения количества товаров
  addItem(): void {
    this.items++;
  }
  // метод для вычисления общей суммы и инициализации процесса оплаты
  checkout(): void {
    const totalAmount = this.items * 10;
    console.log(`Итого: ${totalAmount}$`);
    this.paymentStrategy.pay(totalAmount);
  }
}
