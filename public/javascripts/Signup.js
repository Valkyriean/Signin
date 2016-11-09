var url = "http://localhost:3000/api/login";

var init = function() {
    $("#Button").click(function(e) {
        e.preventDefault();
        var email = document.getElementById("emailInput").value;
        var firstname = document.getElementById("firstnameInput").value;
        var lastname = document.getElementById("lastnameInput").value;
        var password = document.getElementById("passwordInput").value;
        var verifypassword = document.getElementById("verifpasswordInput").value;

        //validation goes here

        var data = {email:email,firstname:firstname,lastname:lastname,password:password,verifypassword:verifypassword};
        $.post(url,data,function (response) {
            console.log(response);
            alert('login '+response.status);
        },'json');
    });
};

$(document).ready(init);