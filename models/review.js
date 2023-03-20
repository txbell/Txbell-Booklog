// Require the Mongoose package
const mongoose = require('mongoose')

// Create a schema to define the properties of the review model
const reviewSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        // a review can only be created if it references an existing user._id
        reviewer: {type: String, required: true},
        // {
        //     type: mongoose.ObjectId,
        //     ref: 'User',
        //     required: false
        // }
    },
    { timestamps: true }
);

// DO NOT export the schema as a Mongoose model. 
// The schema will be accessed in `models/restaurant.js`
module.exports = reviewSchema;