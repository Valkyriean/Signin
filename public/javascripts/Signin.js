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

    $("#submit").click(function(e) {
        e.preventDefault();
        var email = document.getElementById("emailInput").value;
        var firstname = document.getElementById("firstnameInput").value;
        var lastname = document.getElementById("lastnameInput").value;
        var password = document.getElementById("passwordInput").value;
        var verifypassword = document.getElementById("verifypasswordInput").value;

        if(!isEmail(email)){
            //wrong email
            alert('Invalid Email Address');
        }else if(!goodPassword(password)){
            //not good password
            alert('Invalid Password');
        }else if(password!=verifypassword){
            //not same password
            alert('Two Password Are Not Same');
        }else{
            //all good
            var data = {email:email,firstname:firstname,lastname:lastname,password:password,verifypassword:verifypassword};


            $.post(url,data,function (response) {
                console.log(response);
                var res = response.status;
                if(res=='we'){
                    alert('Invalid Email Address');
                }else if(res=='wp'){
                    alert('Invalid Password');
                }else if(res == 'dp'){
                    alert('Two Password Are Not Same');
                }else if(res=='success'){
                    alert('Sign In Success');
                }else{
                    alert('WTF???');
                }
            },'json');

            /* substituted solution
            var settings = {
                "url": url,
                "method": "POST",
                "headers": {
                    "content-type": "application/json",
                },
                "data": data
            }
            $.ajax(settings).done(function (response) {
                console.log(response.status);
                var res = response.status;
                if(res=='we'){
                    alert('Invalid Email Address');
                }else if(res='wp'){
                    alert('Invalid Password');
                }else if(res = 'dp'){
                    alert('Two Password Are Not Same');
                }else if(res='success'){
                    alert('Sign In Success');
                }else{
                    alert('WTF???');
                }
            });
            */


        }


        //validation goes here


    });
};

$(document).ready(init);