import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method.toLowerCase());
}

function generateOrderId() {
  return 'ORD' + Date.now();
}

export function processPayment(paymentMethod, couponCode = null) {
  const cartItems = getCartItems();
  if (cartItems.length === 0)
    return { status: "failed", message: "Cart is empty" };

  if (!validatePaymentMethod(paymentMethod))
    return { status: "failed", message: "Invalid payment method" };

  const subtotal = getCartTotal();

  let finalData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal,
    message: ""
  };

  if (couponCode) {
    finalData = applyDiscount(subtotal, couponCode, cartItems);
  }

  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

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

  clearCart();
  return orderSummary;
}   