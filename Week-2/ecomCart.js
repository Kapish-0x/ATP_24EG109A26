import { getProductById, checkStock } from './product.js';

// Array to store cart items
let cartItems = [];

// Adds a product to the cart
export function addToCart(productId, quantity) {
  // Get product details using product ID
  const product = getProductById(productId);

  // Check if product exists
  if (!product) return "Product not found";

  // Check if required quantity is available in stock
  if (!checkStock(productId, quantity))
    return "Not enough stock available";

  // Find if product already exists in cart
  const existingItem = cartItems.find(item => item.productId === productId);

  // Increase quantity if item already exists
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    // Add new item to cart
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}

// Removes a product from the cart
export function removeFromCart(productId) {
  // Find index of the item in cart
  const index = cartItems.findIndex(item => item.productId === productId);

  // Check if item exists
  if (index === -1) return "Item not found in cart";

  // Remove item from cart
  cartItems.splice(index, 1);

  return "Item removed";
}

// Updates quantity of a cart item
export function updateQuantity(productId, newQuantity) {
  // Find item in cart
  const item = cartItems.find(i => i.productId === productId);

  // Check if item exists
  if (!item) return "Item not found in cart";

  // Check stock availability for new quantity
  if (!checkStock(productId, newQuantity))
    return "Not enough stock available";

  // Update item quantity
  item.quantity = newQuantity;

  return "Quantity updated";
}

// Returns all cart items with product details and total price
export function getCartItems() {
  return cartItems.map(item => {
    // Get product details
    const product = getProductById(item.productId);

    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}

// Calculates total price of all cart items
export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

// Clears all items from the cart
export function clearCart() {
  cartItems = [];
}