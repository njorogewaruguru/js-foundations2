function showStock(stock) {
    for (let i = 0; i < stock.length; i++) {
        let total = 0;
        let item = stock[i]
        console.log(`\nProduct: ${item.product}`)
        console.log(`Quantity: ${item.quantity}`)
        console.log(`Price: ${item.price}`)
        let moneyTiedUp = item.quantity * item.price;
        total += moneyTiedUp
        console.log(`Money tied up: ${total}`)
        let status;
        if (item.quantity <= 1) {
            status = 'Restock'
        } else {
            status = 'Okay'
        }
        console.log(`Status: ${status}`)

    }
}

let stock = [
    {
        product: 'Sugar',
        quantity: 10,
        price: 150
    }, {
        product: 'Wheat flour',
        quantity: 15,
        price: 250
    },
    {
        product: 'Maize flour',
        quantity: 1,
        price: 120
    },
    {
        product: 'Tea leaves',
        quantity: 0,
        price: 120
    }

]

showStock(stock)
