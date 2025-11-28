export interface Subject {
  operationOne(): void;
  operationTwo(): void;
}

export class ConcreteSubject implements Subject {
  operationOne(): void {
    console.log("Выполнение первой операции");
  }

  operationTwo(): void {
    console.log("Выполнение второй операции");
  }
}

export abstract class Decorator implements Subject {
  protected subject: Subject;

  constructor(subject: Subject) {
    this.subject = subject;
  }

  operationOne(): void {
    this.subject.operationOne();
  }

  operationTwo(): void {
    this.subject.operationTwo();
  }
}

export class ConcreteDecorator extends Decorator {
  constructor(subject: Subject) {
    super(subject);
  }

  public operationOne(): void {
    this.subject.operationOne();
    console.log("Выполнение дополнительной операции в ConcreteDecorator");
  }
}
