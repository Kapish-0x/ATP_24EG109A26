// Object containing available coupon codes and their details
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': {
    type: 'percentage',
    value: 20,
    minAmount: 10000,
    category: 'electronics'
  }
};

// Validates whether a coupon can be applied
export function validateCoupon(code, cartTotal, cartItems) {
  // Get coupon details using coupon code
  const coupon = coupons[code];

  // Check if coupon exists
  if (!coupon)
    return { valid: false, message: "Invalid coupon" };

  // Check if minimum cart amount condition is satisfied
  if (cartTotal < coupon.minAmount)
    return { valid: false, message: "Minimum amount not reached" };

  // Check category condition if coupon is category-specific
  if (coupon.category) {
    const hasCategory = cartItems.some(item =>
      item.category === coupon.category
    );

    // Return error if required category item is not present
    if (!hasCategory)
      return {
        valid: false,
        message: "Coupon valid only for specific category"
      };
  }

  // Coupon is valid
  return { valid: true, message: "Coupon applied" };
}

// Calculates discount amount based on coupon type
export function calculateDiscount(code, cartTotal) {
  // Get coupon details
  const coupon = coupons[code];

  // Calculate percentage discount
  if (coupon.type === 'percentage')
    return (cartTotal * coupon.value) / 100;

  // Return flat discount amount
  if (coupon.type === 'flat')
    return coupon.value;

  // Return 0 if coupon type is invalid
  return 0;
}

// Applies discount to cart total
export function applyDiscount(cartTotal, code, cartItems) {
  // Validate coupon before applying
  const validation = validateCoupon(code, cartTotal, cartItems);

  // Return original total if coupon is invalid
  if (!validation.valid)
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };

  // Calculate discount amount
  const discount = calculateDiscount(code, cartTotal);

  // Return updated cart details after discount
  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied successfully"
  };
}