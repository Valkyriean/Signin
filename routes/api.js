/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();
var db = mongoose.connection;



function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}

function goodPassword(str){
    var reg =/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
    return reg.test(str);
}

router.post('/login', function (req, res) {
    console.log("login connected");
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    if (username=="alex" && password=='alex') {
        res.json({"status": "success"});
        console.log("success");
    } else {
        res.json({"status":"failed"});
        console.log("failed");
    }
});

router.post('/signin',function(req,res) {
    console.log("Sign connected");

    var email = req.body.email;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var password = req.body.password;
    var verifypassword = req.body.verifypassword;

    if(!isEmail(email)){
        //wrong email
        res.json({"status": "we"});
        console.log("wrong email");
    }else if(!goodPassword(password)){
        //not good password
        res.json({"status": "wp"});
        console.log("wrong password");
    }else if(password!=verifypassword){
        //not same password
        res.json({"status": "dp"});
        console.log("different password");
    }else{
        //all good
        res.json({"status": "success"});
        console.log("success");
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function (callback) {
            // yay!
        });

        //add code to save in data base here
    }
});


module.exports = router;
