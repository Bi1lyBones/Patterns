//определение интерфейса для реализации методов классов
export interface Transport {
  deliver(): void;
}

//Классы Truck и Ship реализуют метод deliver() за счет имплементации.

export class Truck implements Transport {
  public deliver(): void {
    console.log("Доставка будет совершена с помощью грузовика");
  }
}

export class Ship implements Transport {
  public deliver(): void {
    console.log("Доставка будет совершена с помощью корабля");
  }
}

//Класс для создания объектов классов Truck и Ship

export class TransportFactory {
  public static createTransport(transportType: string): Transport | null {
    if (transportType === "truck") {
      return new Truck();
    }
    if (transportType === "ship") {
      return new Ship();
    }
    return null;
  }
}
