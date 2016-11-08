/**
 * Created by Alexander on 19/10/2016.
 */
var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
    console.log("connected");
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


module.exports = router;
