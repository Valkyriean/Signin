/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();

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
        res.send({"status":"failed"});
        console.log("failed");
    }
});

router.post('/signin',function(req,res) {
    console.log("Sign connected");
    var email = req.body.email;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var password = req.body.password;
    
});


module.exports = router;
