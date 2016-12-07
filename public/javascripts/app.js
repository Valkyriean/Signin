var app = angular.module('CSP', ['ui.router','ngMessages','ngCookies']);
app.config(function($stateProvider,$urlRouterProvider) {

    var login = {
        name: 'login',
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'template/Login.html'
    };

    var signup = {
        name: 'signup',
        url: '/signup',
        controller: 'SignupCtrl',
        templateUrl: 'template/SignUp.html'
    };

    $stateProvider.state(login);
    $stateProvider.state(signup);

    $urlRouterProvider.otherwise('/login');

});