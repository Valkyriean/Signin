var url = "http://localhost:3000/api/login";

var init = function() {
    $("#Button").click(function(e) {
        e.preventDefault();
        var text = document.getElementById("EnterText").value;
        var password = document.getElementById("EnterPassword").value;
        var data = {username:text,password:password};
        $.post(url,data,function (response) {
           console.log(response);
            alert('login '+response.status);
        },'json');
  });
    $("#SignButton").click(function(e) {
        e.preventDefault();
        window.location.href='Index.html';
    });
};

$(document).ready(init);