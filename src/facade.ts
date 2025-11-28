//Система классов (FirstClass и SecondClass)
export class FirstClass {
  method(): string {
    return "Применение метода из FirstClass";
  }
}

export class SecondClass {
  method(value: string): string {
    return value; // метод возвращает переданное значение
  }
}

//упрощаем вызов методов из классов FirstClass и SecondClass с помощью Facade
export class Facade {
  FirstClass(): string {
    return new FirstClass().method();
  }
  SecondClass(value: string): string {
    return new SecondClass().method(value);
  }
}
