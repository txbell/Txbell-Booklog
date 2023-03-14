// Require the Mongoose package
const mongoose = require('mongoose');
const reviewSchema = require('./review');

// Create a schema to define the properties of the pets collection
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true},
    genres: [{ type: String }],
    dateReleased: { type: Date, default: Date.now},
    photo: { type: String, required: true },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    dateAdded: { type: Date, default: Date.now },
    rating: { type: String, default: 'N/A'},
    reviews: [reviewSchema],
},
{ timestamps: true }
);

// const productSchema = new mongoose.Schema({
    
// });

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Book', bookSchema);