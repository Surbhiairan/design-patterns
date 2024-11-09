class Product {
    constructor(price) {
        this.price = price;
        this.pricingStrategy = new RegularPricingStrategy();  // Default strategy
    }

    setPricingStrategy(strategy) {
        this.pricingStrategy = strategy;
    }

    getFinalPrice() {
        return this.pricingStrategy.calculate(this.price);
    }
}
