// function groceryList(groceries) {

//     for (let i = 0; i <= groceries.length - 1; i++) {
//         console.log(`${i + 1}.${groceries[i]}`)
//     }
// }
// let groceries = ['kales', 'bread', 'milk', 'sugar']
// groceryList(groceries)



// function showMarks(details) {
//     for (let i = 0; i < details.length; i++) {
//         let student = details[i];
//         let total = 0;
//         console.log(`\nName: ${student.studentName}`);
//         console.log("Subjects and Marks")
//         for (let j = 0; j < student.marks.length; j++) {
//             let subject = student.marks[j]
//             console.log(`${subject.subject}: ${subject.score}`)
//             total += subject.score;
//         }
//         let average = total / student.marks.length;
//         let status;
//         if(average >= 50){
//             status = "Pass"
//         } else {
//             status = "Fail"
//         }
//         console.log(`Average: ${average.toFixed(2)}`)
//         console.log(`Result: ${status}`);
//     }
// }

// let details = [
//     {
//         studentName: 'Hannah',

//         marks: [{ subject: "Math", score: 95 }, { subject: "Language", score: 90 }, { subject: "Science", score: 80 }, { subject: "Comp", score: 90 }]
//     },
//     {
//         studentName: 'Mary',

//         marks: [{ subject: "Math", score: 90 }, { subject: "Language", score: 70 }, { subject: "Science", score: 68 }, { subject: "Comp", score: 57 }]
//     },
//     {
//         studentName: 'James',

//         marks: [{ subject: "Math", score: 64 }, { subject: "Language", score : 79 }, { subject: "Science", score: 78 }, { subject: "Comp", score: 49 }]
//     },

//     {
//         studentName: 'Ben',

//         marks: [{ subject: "Math", score: 46 }, { subject: "Language", score : 30 }, { subject: "Science", score: 28 }, { subject: "Comp", score: 49 }]
//     }

// ]
// showMarks(details)



// function showStock(stock) {
//     for (let i = 0; i < stock.length; i++) {
//         let total = 0;
//         let item = stock[i]
//         console.log(`\nProduct: ${item.product}`)
//         console.log(`Quantity: ${item.quantity}`)
//         console.log(`Price: ${item.price}`)
//         let moneyTiedUp = item.quantity * item.price;
//         total += moneyTiedUp
//         console.log(`Money tied up: ${total}`)
//         let status;
//         if (item.quantity <= 1) {
//             status = 'Restock'
//         } else {
//             status = 'Okay'
//         }
//         console.log(`Status: ${status}`)

//     }
// }

// let stock = [
//     {
//         product: 'Sugar',
//         quantity: 10,
//         price: 150
//     }, {
//         product: 'Wheat flour',
//         quantity: 15,
//         price: 250
//     },
//     {
//         product: 'Maize flour',
//         quantity: 1,
//         price: 120
//     },
//     {
//         product: 'Tea leaves',
//         quantity: 0,
//         price: 120
//     }

// ]

// showStock(stock)




function searchBooks(catalog) {
    for (let i = 0; i < catalog.length; i++) {
        let book = catalog[i]
        let title = book.title
        let author = book.author
        let isAvailable = book.isAvailable
        if (isAvailable) {
            console.log(`
            Title: ${title} 
            Author: ${author} 
            Availablity: ${isAvailable}`)

        } else {
            console.log(`Not available`)
        }
    }
}




let catalog = [{
    title: "The Alchemist",
    author: "Paulo Coelho",
    isAvailable: true
},
{
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    isAvailable: false
},
{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isAvailable: true
}, {
    title: "1984",
    author: "George Orwell",
    isAvailable: true
},
{
    title: "The Silent Patient",
    author: "Alex Michaelides",
    isAvailable: true
},
{
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: false
}
]


searchBooks(catalog)