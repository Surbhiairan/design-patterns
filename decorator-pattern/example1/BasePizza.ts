abstract class BasePizza {
    cost():any {}
}

class Margeritta extends BasePizza {
    cost() {
        return 100
    }
}

class VegDelight extends BasePizza {
    cost() {
        return 120
    }
}

class Farmhouse extends BasePizza {
    cost() {
        return 200
    }
}

//decorator class
abstract class ToppingDecorator extends BasePizza {

}

class ExtraCheese extends ToppingDecorator {
    private basePizza: BasePizza
    constructor(basePizza: BasePizza) {
        super()
        this.basePizza = basePizza
    }

    addExtraCheese(pizza: BasePizza) {
        this.basePizza = pizza
    }

    cost() {
        return this.basePizza.cost() + 20
    }
}

class Mushroon extends ToppingDecorator {
    private basePizza: BasePizza
    constructor(basePizza: BasePizza) {
        super()
        this.basePizza = basePizza
    }


    addMushroom(pizza: BasePizza) {
        this.basePizza = pizza
    }

    cost() {
        return this.basePizza.cost() + 40
    }
}

const myPizza = new Mushroon(new ExtraCheese(new Margeritta()))

console.log(myPizza.cost())