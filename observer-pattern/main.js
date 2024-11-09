const Publisher = require('./Publisher')
const Subscriber = require('./Subscriber')
// Create a subject
const newsPublisher = new Publisher();

// Create observers
const subscriber1 = new Subscriber("Subscriber 1");
const subscriber2 = new Subscriber("Subscriber 2");

// Subscribe to the subject
newsPublisher.addObserver(subscriber1);
newsPublisher.addObserver(subscriber2);

// Notify observers
newsPublisher.notifyObservers("New article published!");

// Unsubscribe an observer
newsPublisher.removeObserver(subscriber1);

// Notify observers again
newsPublisher.notifyObservers("Another article published!");
