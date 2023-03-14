/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/books`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all books
router.get('/', function (req, res) {
    db.Book.find({})
        .then(books => {
            res.render('book-index', {
                books: books
            })
        })
})


// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new', (req, res) => {
    res.render('new-form')
})

// Create Route (POST/Create): This route receives the POST request sent from the new route,
// creates a new pet document using the form data, 
// and redirects the user to the new pet's show page
router.post('/', (req, res) => {
    db.Pet.create(req.body)
        .then(pet => res.redirect('/pets/' + pet._id))
})

// Show Route (GET/Read): Will display an individual book document
// using the URL parameter (which is the document _id)
router.get('/:id', function (req, res) {
    db.Book.findById(req.params.id)
        .then(book => {
            res.render('book-details', {
                book: book,
                reviews: book.reviews,
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router