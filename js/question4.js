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