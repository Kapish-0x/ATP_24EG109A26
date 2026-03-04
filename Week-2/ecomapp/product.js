const products = [
{ id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
{ id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
{ id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
{ id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
{ id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

export function getProductById(id) {
    return products.find(p => p.id === id)
}
export function getAllProducts() {
    return products
}
export function getProductsByCategory(category) {
    return products.filter(m=>m.category === category);
}
export function searchProducts(query) {
    return products.find(k=>k.name === query)
}
 export function checkStock(productId, quantity) {
    let y = getProductById(productId)
    if(y && y.stock >= quantity) return true
    return false
}
 export function reduceStock(productId, quantity) {
    let p = getProductById(productId)
    if(!p) 
        return false
    if(p.stock < quantity) return false

    p.stock -= quantity
    return true
}