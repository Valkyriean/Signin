/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();
var Signin = require('../models/postModels');
const crypto = require('crypto');


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

        //add code to encrypt
        // sha(password+"asjhkdfalhs")
        //add code to save in data base here
        var cipher = crypto.createCipher('aes192', 'alexsupreme');
        var encrypted = cipher.update('some clear text data', 'utf8', 'hex');
        encrypted += cipher.final('hex');


        console.log(encrypted);
        var newUser = new Signin({
            emailaddress: email,
            firstname: firstname,
            lastname: lastname,
            password: encrypted
        });

        newUser.save(function(err) {
            if (err) throw err;
            console.log('User saved successfully!');
        });

    }
});


module.exports = router;
