const inventory = {
    Milk: 1900,
    Coffee: 1088,
    Sugar: 1344
};

const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
        // Use setTimeout() to ensure that the checkInventory() promise settles asynchronously.
        setTimeout(() => {
            //order[['A',200], ['B',300]]
            let inStock = order.every(item => inventory[item[0]] >= item[1]);
            if (inStock) {
                resolve(`Thank you. Your order was successful.`);
            } else {
                reject(`We're sorry. Your order could not be completed because some items are sold out.`);
            }
        }, 1000);
    });
};

module.exports = { checkInventory };