var url = "http://localhost:3000/api/login";

var token;
var init = function() {
    $("#Button").click(function(e) {
        e.preventDefault();
        var text = document.getElementById("EnterText").value;
        var password = document.getElementById("EnterPassword").value;
        var data = {username:text,password:password};
        $.post(url,data,function (response) {
           console.log(response);
           if(response.status=='success'){
               alert('Welcome back '+response.lastname);
               token = response.token;
               console.log(token);
                //TODO save token as cookies

                //TODO forward to home page
           }else{
               alert('login '+response.status);
           }
        },'json');
  });
    $("#SignButton").click(function(e) {
        e.preventDefault();
        //TODO use single page application thing here to forward it to signup page
        // window.location.href='Index.html';
    });
};

$(document).ready(init);