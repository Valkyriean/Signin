/**
 * Created by Li on 2016/11/30.
 */

var app = angular.module('CSP');

app.controller('SignupCtrl', function($scope,$state,$http) {
    $scope.signpudata={};
    var Signupurl = "/api/signup";

    function isEmail(str){
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }

    function goodPassword(str){
        var reg =/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
        return reg.test(str);
    }

    function goodName(str) {
        var reg = /^[A-Za-z]{1,}$/;
        return reg.test(str);
    }

    $scope.signupcli=function(){
        var allgood=true;
        if(!isEmail($scope.signpudata.email)) {
            //wrong email
            alert('Invalid Email Address');
            //TODO use angular form instead of jquery
            $("#email").css("color","red");
            allgood=false;
        }else {
            $("#email").css("color","black");
            allgood=true;
        }

        if(!goodName($scope.signpudata.firstname)){
            //not good first name
            alert('Invalid First Name');
            $("#firstName").css("color","red");
            allgood=false;
        }else{
            $("#firstName").css("color","black");
            allgood=true;
        }

        if(!goodName($scope.signpudata.lastname)){
            //not good last name
            alert('Invalid Last Name');
            $("#lastName").css("color","red");
            allgood=false;
        }else{
            $("#lastName").css("color","black");
            allgood=true;
        }

        if(!goodPassword($scope.signpudata.password)){
            //not good password
            alert('Invalid Password');
            $("#password").css("color","red");
            allgood=false;
        }else {
            $("#password").css("color","black");
            allgood=true;
        }

        if($scope.signpudata.password!=$scope.signpudata.verifypassword){
            alert('Two Password Are Not Same');
            $("#verifyPassword").css("color","red");
            allgood=false;
        }else {
            $("#verifyPassword").css("color","black");
            allgood=true;
        }

        if(allgood) {
            //If user input is all good
            $http.post(Signupurl,$scope.signpudata).success(function(response){
                console.log($scope.signpudata);
                var res = response.status;
                if(res == 'we'){
                    alert('Invalid Email Address');
                }else if(res == 'wp'){
                    alert('Invalid Password');
                }else if(res == 'dp'){
                    alert('Two Password Are Not Same');
                }else if(res == 'wf'){
                    alert('Invalid First Name');
                }else if(res == 'wl'){
                    alert('Invalid Last Name');
                }else if(res == 'repeat'){
                    alert('The email address has already been registered ')
                }else if(res == 'success'){
                    alert('Sign In Success');
                    $state.go("login");
                }else{
                    alert('There are some issue with server \nPlease contact with website administrator\n phantomgale@hotmail.com');
                }
            });
        }
    };



});
