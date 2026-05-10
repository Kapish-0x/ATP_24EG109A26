// Object representing an order with customer and item details
const order = {
  orderId: "ORD1001",

  // Customer details
  customer: {
    name: "Anita",

    // Customer address details
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },

  // List of ordered items
  items: [
    { product: "Laptop", price: 70000 }
  ],
};

// Creating a deep copy of the order object
let copy = structuredClone(order);

// Modifying values in the copied object
copy.customer.address.city = "Chennai";
copy.items[0].price = 50000;

// Displaying original object
console.log(order);

// Displaying modified copied object
console.log(copy);