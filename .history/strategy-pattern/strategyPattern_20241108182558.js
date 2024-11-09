// Define different strategies
class RegularPricingStrategy {
    calculate(price) {
        return price;
    }
}

class DiscountPricingStrategy {
    constructor(discount) {
        this.discount = discount;
    }
    calculate(price) {
        return price * (1 - this.discount);
    }
}

class PremiumPricingStrategy {
    constructor(premiumRate) {
        this.premiumRate = premiumRate;
    }
    calculate(price) {
        return price * (1 + this.premiumRate);
    }
}
