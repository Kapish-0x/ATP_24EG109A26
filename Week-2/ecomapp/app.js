import { 
  getAllProducts, 
  searchProducts, 
  getProductsByCategory 
} from './product.js';

import { 
  addToCart, 
  getCartItems, 
  getCartTotal, 
  updateQuantity,
  removeFromCart 
} from './cart.js';

import { processPayment } from './payment.js';

console.log('E-Commerce Store\n');

//Browse products
console.log('All Products:');
console.log(getAllProducts());

//Search for products
console.log('\nSearching for "phone":');
console.log(searchProducts('phone'));

//Filter by category
console.log('\nElectronics Category:');
console.log(getProductsByCategory('electronics'));

//Add items to cart
console.log('\nAdding to Cart');
console.log(addToCart(1, 2));  // 2 Laptops
console.log(addToCart(3, 3));  // 3 Headphones
console.log(addToCart(1, 1));  // 1 more Laptop (should update quantity)

//View cart
console.log('\nCurrent Cart');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

//Update quantity
console.log('\nUpdating Quantities');
console.log(updateQuantity(1, 2));  // Change laptop quantity to 2

//Remove item
console.log('\nRemoving Item');
console.log(removeFromCart(3));  // Remove headphones

//View updated cart
console.log('\nUpdated Cart');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

//Checkout with coupon
console.log('\nCheckout');
const order = processPayment('upi', 'WELCOME10');
console.log(order);