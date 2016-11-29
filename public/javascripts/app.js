var app = angular.module('MainCtrl', ['ui.router']);
app.config(function($stateProvider,$urlRouterProvider) {

    var login = {
        name: 'login',
        url: '/login',
        controller: 'Ctrl',
        templateUrl: 'template/Login.html'
    };

    var signup = {
        name: 'signup',
        url: '/signup',
        controller: 'Ctrl',
        templateUrl: 'template/SignUp.html'
    };

    $stateProvider.state(login);
    $stateProvider.state(signup);

    $urlRouterProvider.otherwise('/login');

});

app.controller('Ctrl',function ($scope,$location) {
    $scope.go = function (add) {
        $location.path(add);
    }
});
