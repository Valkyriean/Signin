var url = "http://localhost:3000/api/signin";

function isEmail(str){
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}

function goodPassword(str){
    var reg =/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
    return reg.test(str);
}

var init = function() {

    $("#Button").click(function(e) {
        e.preventDefault();
        var email = document.getElementById("emailInput").value;
        var firstname = document.getElementById("firstnameInput").value;
        var lastname = document.getElementById("lastnameInput").value;
        var password = document.getElementById("passwordInput").value;
        var verifypassword = document.getElementById("verifpasswordInput").value;

        if(!isEmail(email)){
            //wrong email
        }else if(!goodPassword(password)){
            //not good password
        }else if(password!=verifypassword){
            //not same password
        }else{
            //all good
            var data = {email:email,firstname:firstname,lastname:lastname,password:password,verifypassword:verifypassword};
            $.post(url,data,function (response) {
                console.log(response);
                alert('login '+response.status);
            },'json');
        }


        //validation goes here


    });
};

$(document).ready(init);