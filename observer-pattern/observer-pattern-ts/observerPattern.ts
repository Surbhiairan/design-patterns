// Observer interface
interface Observer {
    update(data: string): void;
}

// Subject class
class Subject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data: string): void {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Concrete Observer class
class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(data: string): void {
        console.log(`${this.name} received notification: ${data}`);
    }
}

// Running the Observer Pattern
const newsPublisher = new Subject();

const subscriber1 = new ConcreteObserver("Subscriber 1");
const subscriber2 = new ConcreteObserver("Subscriber 2");

newsPublisher.addObserver(subscriber1);
newsPublisher.addObserver(subscriber2);

newsPublisher.notifyObservers("New article published!");

newsPublisher.removeObserver(subscriber1);

newsPublisher.notifyObservers("Another article published!");
