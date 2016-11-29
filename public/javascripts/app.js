var app = angular.module('MainCtrl', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider) {

    var login = {
        name: 'login',
        url: '/login',
        controller: 'MainCtrl',
        templateUrl: 'template/Login.html'
    };

    var signin = {
        name: 'signin',
        url: '/signin',
        templateUrl: 'template/SignUp.html'
    };

    $stateProvider.state(login);
    $stateProvider.state(signin);

    $urlRouterProvider.otherwise('/login');

});