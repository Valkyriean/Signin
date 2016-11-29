/**
 * Created by Li on 19/10/2016.
 */
var express = require('express');
var router = express.Router();
var Signup = require('../models/postModels');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

var secretKey = "alexsupreme";

function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}

function goodPassword(str){
    var reg =/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
    return reg.test(str);
}

function goodName(str){
    var reg =/^[A-Za-z]{1,}$/;
    return reg.test(str);
}

function encrypt(str){
    var cipher = crypto.createCipher('aes192', secretKey);
    var encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

router.post('/login', function (req, res) {
    console.log("login connected");

    var username = req.body.username;
    var password = req.body.password;
    console.log("username is " + username + " and the password is " + password);
    var encryptedinput = encrypt(password);
    console.log(encryptedinput);
    Signup.findOne({'emailaddress':username},function(err,user){
        if(err) throw err;
        if(user==null){
            console.log('user '+username+' is not found ');
            res.json({"status": "Failed, Email has not been registered yet"})
        }else{
            console.log(user.toString());
            console.log(user.password);
            if(user.password == encryptedinput){
                res.json({"status": "success"});
                console.log("success");
                //TODO generate the token here


            }else{
                res.json({"status":"Failed, Wrong Password!"});
                console.log("failed");
            }
        }

    });

});

router.post('/signup',function(req,res) {
    console.log("Sign up connected");

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
    }else if(!goodName(firstname)){
        //not good first name
        res.json({"status":"wf"});
        console.log("wrong first name");
    }else if(!goodName(lastname)){
        //not good last name
        res.json({"status":"wl"});
        console.log("wrong last name");
    }else{
        Signup.findOne({'emailaddress':email},function(err,user){
            if(err) throw err;
            if(user==null){
                var encrypted = encrypt(password);
                console.log(encrypted);
                var newUser = new Signup({
                    emailaddress: email,
                    firstname: firstname,
                    lastname: lastname,
                    password: encrypted
                });
                newUser.save(function(err) {
                    if (err) throw err;
                    console.log('User saved successfully!');
                });
                res.json({"status": "success"});
                console.log("success");
            }else{
                res.json({"status":"repeat"});
                console.log('repeat email');
            }
        });



        //all good


    }
});

module.exports = router;
