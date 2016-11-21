/**
 * Created by Alexander on 17/10/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/api');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongo connection error. Please check Mongo is running on the host');
    console.log(err);
});
db.once('open', function () {
    console.log('MongoDb connected.');
});

var app = express();

app.listen(3000);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',api);
