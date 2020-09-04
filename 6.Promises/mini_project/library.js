
// Apple product inventory & price
const inventory = {
    'iphone': {
        'inventory' : 1000,
        'price': 999.99
    },
    'macbook': {
        'inventory': 2000,
        'price': 2000.00
    },
    'ipad': {
        'inventory': 2500,
        'price': 599.95 
    }
};

 
// Check inventory system function
// the `order` parameter is array structure [['A',100],['B',200]...]
const checkInventory = (order) => {
    // Promise
    return new Promise((resolve, reject) => {
        //setTimeout()
        setTimeout(() => {
            // Check the Stock
            // Access to inventory, inventory['milk'] return  # of milk
            let inStock = order.every(item => inventory[[item[0]]].inventory >= item[1]);
            if (inStock) {
                // Price
                let totalPrice = 0;
                inventory.forEach(item=> {
                    totalPrice += item[1] * inventory[item[0]].price;
                });
                
                // resolve
                console.log(`All of your order items are in stock. Your order was successful. The total price is ${totalPrice}.`);
                resolve([order,totalPrice]);
            } else {
                reject(`We're sorry. The order could not be completed becuase some items are sold out.`);
            }
        },generateDelayTime());
    });
};

function generateDelayTime(){
    return Math.floor(Math.random()*2000);
}

// Export module
module.exports = {checkInventory};