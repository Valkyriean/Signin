/**
 * Created by Alexander on 14/11/2016.
 */

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var signup = new Schema({
    emailaddress: String,
    firstname: String,
    lastname: String,
    password: { type: String, required: true }
});


module.exports = mongoose.model('Signup', signup);