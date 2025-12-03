class Stroitel {
  name: string;
  age: number;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }
}

class Build {
  title: string;
  price: string;

  constructor(private worker: Stroitel, title: string, price: string) {
    this.worker = worker;
    this.title = title;
    this.price = price;
  }

  newBuild(): void {
    console.log(`=== Новый проект ===`);
    console.log(`Дом подназванием ${this.title}`);
    console.log(`Будет строить мастер ${this.worker.name} ${this.worker.age}`);
    console.log(`Стоимость работы ${this.price}`);
  }
}

const newWorker = new Stroitel(25, "Антон");
const newBuilding = new Build(newWorker, "Комплекс Ястреб", "250$");

newBuilding.newBuild();
