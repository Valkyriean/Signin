/**
 * Created by Li on 2016/11/30.
 */

var app = angular.module('CSP');

app.controller('LoginCtrl', function($scope,$state,$http,$cookies) {
    $scope.logindata = {};

    var Loginurl = "/api/login";
    var token;

    $scope.login=function(form) {
        $http.post(Loginurl,$scope.logindata).success(function(response){
            console.log(response);
            if (response.status == 'success') {
                alert('Welcome back ' + response.lastname);
                token = response.token;
                console.log(token);
                $cookies.put("superlogin-token",token);
                console.log(form);
            } else {
                alert('Login ' + response.status);
            }
        });
    };

    $scope.signupbut=function(){
        $state.go("signup");
    };

    $scope.lost=function(){
        alert('Really? There is no way I can help you. Try to sign up a new account');
    };
});
