// Subject class
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Subject.prototype.notifyObservers = function (data) {
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return Subject;
}());
// Concrete Observer class
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (data) {
        console.log("".concat(this.name, " received notification: ").concat(data));
    };
    return ConcreteObserver;
}());
// Running the Observer Pattern
var newsPublisher = new Subject();
var subscriber1 = new ConcreteObserver("Subscriber 1");
var subscriber2 = new ConcreteObserver("Subscriber 2");
newsPublisher.addObserver(subscriber1);
newsPublisher.addObserver(subscriber2);
newsPublisher.notifyObservers("New article published!");
newsPublisher.removeObserver(subscriber1);
newsPublisher.notifyObservers("Another article published!");
