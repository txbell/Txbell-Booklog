/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/reviews`
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
// Index Route (All reviews): 
// GET localhost:3000/reviews/
router.get('/', (req, res) => {
	db.Book.find({}, { reviews: true, _id: false })
        .then(books => {
		    // format query results to appear in one array, 
		    // rather than an array of objects containing arrays 
	    	const flatList = []
	    	for (let book of books) {
	        	flatList.push(...book.reviews)
	    	}
	    	res.json(flatList)
		}
	)
});

// New Route (GET/Read): This route renders a form 
// which the user will fill out to POST (create) a new location
router.get('/new/:bookID', (req, res) => {
    db.Book.findById(req.params.bookID)
        .then(book => {
            res.render('review-new', {
                book: book
            })
        })
        .catch(() => res.send('404 Error: Page Not Found'))
})

// Create Route: POST localhost:3000/reviews/
router.post('/create/:bookId', (req, res) => {
    db.Book.findByIdAndUpdate(
        req.params.bookId,
        { $push: { reviews: req.body } },
        { new: true }
    )
    .then(book => res.redirect('/books/' + req.params.bookId))
});

// Show Route: GET localhost:3000/reviews/:id
router.get('/:id', (req, res) => {
    db.Book.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(book => {
	        // format query results to appear in one object, 
	        // rather than an object containing an array of one object
            res.json(book.reviews[0])
        })
});

// Edit Route (GET/Read): This route renders a form
// the user will use to PUT (edit) properties of an existing product
router.get('/:id/edit', (req, res) => {
    db.Book.findOne(
        { 'reviews._id': req.params.id },
        { 'reviews.$': true, _id: false }
    )
        .then(rev => {
            res.render('review-edit', {
                review: rev,
            })
        })
})

// Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', (req, res) => {
    db.Book.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { reviews: { _id: req.params.id } } },
        { new: true }
    )
        .then(book => res.json(book))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router