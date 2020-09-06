
const readline = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
});

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
            // The order objects has 2 keys, 'items', 'giftCardBalance'

            // Get only Item Array
            let itemArray = order.items;
            // Check the Stock status
            let inStock = itemArray.every(item => inventory[[item[0]]].inventory >= item[1]);

            if (inStock) {
                // Price
                let totalPrice = 0;
                itemArray.forEach(item=> {
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

// Another Promise for payement process
const processPayment = (responseArray) => {
    const order = responseArray[0];
    const totalPrice = responseArray[1];
    
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            // Check the Money status
            let hasEnoughMoney = order.giftCardBalance >= totalPrice;

            // check the gift Card balance
            let yourGiftCardBalace = order.giftCardBalance;

            console.log(`This is your Gift Card balace: ${yourGiftCardBalace} `);
            readline.question(`Do you want to use your Gift Card Balace?: (Y/N)`,(input) => {

                if(input==='Y' || input ==='y') {
                    let hasEnoughMoney = order.giftCardBalance >= totalPrice;
                    if(hasEnoughMoney) {
                        let remainBalance = order.giftCardBalance - totalPrice;
                        console.log(`Payment processed with giftcard. The remain balance in Gift Card is ${remainBalance}`);
                        console.log(`Generating shipping label.`);
                        let trackingNumber = generateTrackingNumber();
                        resolve([order,trackingNumber]);
                    } else {
                        let lastPayment = totalPrice - order.giftCardBalance;
                        console.log(`Payment processed with giftcard. The reamin balance to pay is ${lastPayment}`);
                        console.log(`Payment will be processed with your credit.`);
                        let underCreditLimit = order.creditLimit > lastPayment;
                        if(underCreditLimit) {
                            console.log(`Payment with your credit card is succeed.   Generating shipping label.`);
                            let trackingNumber = generateTrackingNumber();
                            resolve([order,trackingNumber]);
                        } else {
                            reject(`Caanot process order: Check your credit limit`);
                        }
                    }
                } else if(input === 'N' || input ==='n') {
                    console.log(`Payment will be processed with your credit.`);
                        let underCreditLimit = order.creditLimit > totalPrice;
                        if(underCreditLimit) {
                            console.log(`Payment with your credit card is succeed.   Generating shipping label.`);
                            let trackingNumber = generateTrackingNumber();
                            resolve([order,trackingNumber]);
                        } else {
                            reject(`Caanot process order: Check your credit limit`);
                        }
                }
            });
        }, generateDelayTime());
    });
};

// Another Promise for shipping process when processPayment Promise resolved. 
const shipOrder = (responseArray) => {
    const order = responseArray[0];
    const trackingNumber = responseArray[1];
    // return chaining promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`The order has been shipped. The tracking number is: ${trackingNumber}. `);
        },generateDelayTime());
    });
};

function generateDelayTime(){
    return Math.floor(Math.random()*2000);
}

// function for gererating tracking number
function generateTrackingNumber() {
    return Math.floor(Math.random() * 10000);
}
// Export modules
module.exports = {checkInventory, processPayment, shipOrder};