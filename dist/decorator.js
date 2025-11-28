"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteDecorator = exports.Decorator = exports.ConcreteSubject = void 0;
class ConcreteSubject {
    operationOne() {
        console.log("Выполнение первой операции");
    }
    operationTwo() {
        console.log("Выполнение второй операции");
    }
}
exports.ConcreteSubject = ConcreteSubject;
class Decorator {
    constructor(subject) {
        this.subject = subject;
    }
    operationOne() {
        this.subject.operationOne();
    }
    operationTwo() {
        this.subject.operationTwo();
    }
}
exports.Decorator = Decorator;
class ConcreteDecorator extends Decorator {
    constructor(subject) {
        super(subject);
    }
    operationOne() {
        this.subject.operationOne();
        console.log("Выполнение дополнительной операции в ConcreteDecorator");
    }
}
exports.ConcreteDecorator = ConcreteDecorator;
