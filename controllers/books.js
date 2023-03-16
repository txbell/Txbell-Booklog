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

// Show Route (GET/Read): Will display an individual book document
// using the URL parameter (which is the document _id)
router.get('/:title', function (req, res) {
    let title = req.params.title
    title.split('').join('%20')
    db.Book.find({title: `${title}`})
        .then(book => {
            res.render('book-details', {
                book: book,
                reviews: book[0].reviews,
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router