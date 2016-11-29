var app = angular.module('MainCtrl', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider) {

    var login = {
        name: 'login',
        url: '/login',
        controller: 'MainCtrl',
        templateUrl: 'template/Login.html'
    };

    var signup = {
        name: 'signup',
        url: '/signup',
        templateUrl: 'template/Signin.html'
    };

    $stateProvider.state(login);
    $stateProvider.state(signup);

    $urlRouterProvider.otherwise('/login');

});