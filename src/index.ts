import { calculateTotalAmount } from "./lib/calculate-total-amount";
import { Order } from "./lib/order";
import { ShoppingCart } from "./lib/shopping-cart";

const cart = new ShoppingCart();
console.log(`The carts total is ${calculateTotalAmount(cart)}`);
const order = new Order();
console.log(`The orders total is ${calculateTotalAmount(order)}`);
