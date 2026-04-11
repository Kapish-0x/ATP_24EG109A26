const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
            let copy = structuredClone(order)
            copy.customer.address.city = 'Chennai'
            copy.items[0].price=50000
            console.log(order)
            console.log(copy)