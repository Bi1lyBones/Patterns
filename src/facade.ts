class Engine {
  engineOn(): void {
    console.log("Двигатель запущен");
  }
  engineOff(): void {
    console.log("Двигатель выключен");
  }
}

class Electricity {
  electricityOn(): void {
    console.log("Электричество включено");
  }
  electricityOff(): void {
    console.log("Электричество выключено");
  }
}

class Facade {
  private engine: Engine;
  private electricity: Electricity;

  constructor() {
    this.engine = new Engine();
    this.electricity = new Electricity();
  }

  carStart(): void {
    this.electricity.electricityOn();
    this.engine.engineOn();
  }
}

const facade = new Facade();

facade.carStart();
