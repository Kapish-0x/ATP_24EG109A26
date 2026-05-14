import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// Validates whether the payment method is supported
export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method.toLowerCase());
}

// Generates a unique order ID using current timestamp
function generateOrderId() {
  return 'ORD' + Date.now();
}

// Processes payment and places the order
export function processPayment(paymentMethod, couponCode = null) {
  // Get all items currently in the cart
  const cartItems = getCartItems();

  // Check if cart is empty
  if (cartItems.length === 0)
    return { status: "failed", message: "Cart is empty" };

  // Validate selected payment method
  if (!validatePaymentMethod(paymentMethod))
    return { status: "failed", message: "Invalid payment method" };

  // Calculate subtotal of cart items
  const subtotal = getCartTotal();

  // Default payment summary before applying discount
  let finalData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal,
    message: ""
  };

  // Apply coupon discount if coupon code is provided
  if (couponCode) {
    finalData = applyDiscount(subtotal, couponCode, cartItems);
  }

  // Reduce stock quantity for each purchased item
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  // Create final order summary object
  const orderSummary = {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal: finalData.originalTotal,
    discount: finalData.discount,
    total: finalData.finalTotal,
    paymentMethod,
    status: "success",
    message: "Order placed successfully"
  };

  // Clear cart after successful order placement
  clearCart();

  // Return order details
  return orderSummary;
}