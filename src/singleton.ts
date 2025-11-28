export class MyClass {
  //релазизуем возможность наличия только одного экхемпляра класа и
  //предоставления ему глобальной точки доступа
  private static _instance: MyClass;

  // Закрытый конструктор для предотвращения создания экземпляров класса извне
  private constructor() {}

  //ключевой метод для единождого создания экземпляра класса и предоставления
  //глобальной точки доступа
  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  //методы класса
  public sayHello(): void {
    console.log("выполнение метода sayHello");
  }

  public doSomething(): void {
    console.log("выполнение метода doSomething");
  }
}
