class Subscriber {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received notification: ${data}`);
    }
}

module.exports = Subscriber