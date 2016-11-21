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
        var email = $("#emailInput").val();
        var firstname = $("#firstnameInput").val();
        var lastname = $("#lastnameInput").val();
        var password = $("#passwordInput").val();
        var verifypassword = $("#verifypasswordInput").val();

        if(!isEmail(email)) {
            //wrong email
            alert('Invalid Email Address');
            $("#email").css("color","red");
        }else {
            $("#email").css("color","black");
        }

        if(!goodPassword(password)){
            //not good password
            alert('Invalid Password');
            $("#password").css("color","red");
        }else {
            $("#password").css("color","black");
        }

        if(password!=verifypassword){
            alert('Two Password Are Not Same');
            $("#verifyPassword").css("color","red");
        }else {
            $("#verifyPassword").css("color","black");
        }

        if( isEmail(email) && goodPassword(password) && password == verifypassword) {
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
    });
};

$(document).ready(init);