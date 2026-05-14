// Array containing product details
const products = [
  { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
  { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
  { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
  { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

// Returns product details using product ID
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// Returns all available products
export function getAllProducts() {
  return products;
}

// Returns products belonging to a specific category
export function getProductsByCategory(category) {
  return products.filter(m => m.category === category);
}

// Searches product by product name
export function searchProducts(query) {
  return products.find(k => k.name === query);
}

// Checks whether required stock quantity is available
export function checkStock(productId, quantity) {
  // Get product details
  let y = getProductById(productId);

  // Return true if stock is sufficient
  if (y && y.stock >= quantity) return true;

  // Return false if stock is insufficient or product does not exist
  return false;
}

// Reduces stock quantity after purchase
export function reduceStock(productId, quantity) {
  // Get product details
  let p = getProductById(productId);

  // Return false if product does not exist
  if (!p)
    return false;

  // Return false if available stock is less than required quantity
  if (p.stock < quantity) return false;

  // Reduce stock quantity
  p.stock -= quantity;

  return true;
}