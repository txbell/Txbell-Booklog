// Require the Mongoose package & your environment configuration
require('dotenv').config()
const mongoose = require('mongoose');
const mongodbUri = process.env.MONGODBURI;

// Create an immediately invoked async function.
// It will wait for Mongoose to connect to MongoDB Atlas
(async function () {
    await mongoose.connect(mongodbUri);
    console.log('Mongoose is connected to', mongodbUri);
})().catch(err => console.log('MongoDB connection error:\n' + err))

module.exports = {
    Book: require('./book'),
    seedBooks: require('./seed'),
}