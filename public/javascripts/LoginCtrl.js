/**
 * Created by Li on 2016/11/30.
 */

var app = angular.module('CSP');

app.controller('LoginCtrl', function($scope,$state) {

    var Loginurl = "http://localhost:3000/api/login";
    var token;

    $scope.login=function() {
        var text = document.getElementById("EnterText").value;
        var password = document.getElementById("EnterPassword").value;
        var data = {username: text, password: password};
        $.post(Loginurl, data, function (response) {
            console.log(response);
            if (response.status == 'success') {
                alert('Welcome back ' + response.lastname);
                token = response.token;
                console.log(token);
                //TODO save token as cookies

                //TODO forward to home page(not needed yet)
            } else {
                alert('login ' + response.status);
            }
        }, 'json');
    }

    $scope.signupbut=function(){
        $state.go("signup");
    }
});
