// Create a product with a base price
const product = new Product(100);

// Regular pricing
console.log("Regular price:", product.getFinalPrice());  // Outputs 100

// Apply a discount pricing strategy
product.setPricingStrategy(new DiscountPricingStrategy(0.1));  // 10% discount
console.log("Discounted price:", product.getFinalPrice());  // Outputs 90

// Apply a premium pricing strategy
product.setPricingStrategy(new PremiumPricingStrategy(0.2));  // 20% premium
console.log("Premium price:", product.getFinalPrice());  // Outputs 120
