var app = angular.module('CSP', ['ngMessages']);

app.directive('fname', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            ctrl.$validators.fname = function(modelValue, viewValue) {
                if ( /^[A-Za-z]{1,}$/.test(ngModelValue)) {
                    return true;
                }
                return false;
            }
        }
    };
});

app.directive('lname', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            ctrl.$validators.lname = function(modelValue, viewValue) {
                if ( /^[A-Za-z]{1,}$/.test(ngModelValue)) {
                    return true;
                }
                return false;
            }
        }
    };
});

app.directive('pass', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            ctrl.$validators.pass = function(modelValue, viewValue) {
                if (/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(ngModelValue)) {
                    return true;
                }
                return false;
            }
        }
    };
});

app.directive('vpass', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            ctrl.$validators.vpass = function(modelValue, viewValue) {
                if (ngModelValue==$scope.signupdata.password) {
                    return true;
                }
                return false;
            }
        }
    };
});