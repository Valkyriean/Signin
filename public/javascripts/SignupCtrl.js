/**
 * Created by Li on 2016/11/30.
 */

var app = angular.module('CSP');

app.controller('SignupCtrl', function($scope,$state) {
    var SignUPurl = "http://localhost:3000/api/signup";
    
    $scope.signpudata={};

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


        if(!isEmail($scope.signpudata.email)) {
            //wrong email
            alert('Invalid Email Address');
            $("#email").css("color","red");
        }else {
            $("#email").css("color","black");
        }

        if(!goodName($scope.signpudata.firstname)){
            //not good first name
            alert('Invalid First Name');
            $("#firstName").css("color","red");
        }else{
            $("#firstName").css("color","black");
        }

        if(!goodName($scope.signpudata.lastname)){
            //not good last name
            alert('Invalid Last Name');
            $("#lastName").css("color","red");
        }else{
            $("#lastName").css("color","black");
        }

        if(!goodPassword($scope.signpudata.password)){
            //not good password
            alert('Invalid Password');
            $("#password").css("color","red");
        }else {
            $("#password").css("color","black");
        }

        if($scope.signpudata.password!=$scope.signpudata.verifypassword){
            alert('Two Password Are Not Same');
            $("#verifyPassword").css("color","red");
        }else {
            $("#verifyPassword").css("color","black");
        }

        if( isEmail($scope.signpudata.email) && goodPassword($scope.signpudata.password) && ($scope.signpudata.password == $scope.signpudata.verifypassword) && goodName($scope.signpudata.firstname) && goodName($scope.signpudata.lastname) ) {
            //If user input is all good
            $.post(SignUPurl,$scope.signpudata,function (response) {
                console.log(response);
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
                    //TODO Jump to login page code here
                    $state.go("login");
                }else{
                    alert('There are some issue with server \nPlease contact with website administrator\n phantomgale@hotmail.com');
                }
            },'json');
        }
    };



});
