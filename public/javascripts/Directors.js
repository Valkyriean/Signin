angular.module('CSP').directive('fname', function($http) {
    var USERNAME_REGEX=/^[a-zA-Z0-9]*$/;
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            ctrl.$validators.fname = function(modelValue, viewValue) {
                if (USERNAME_REGEX.test(modelValue)) {
                    // it is valid
                    return true;
                }
                return false;
            }
        }
    }
});

angular.module('CSP').directive('lname', function($http) {
    var USERNAME_REGEX=/^[a-zA-Z0-9]*$/;
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            ctrl.$validators.lname = function(modelValue, viewValue) {
                if (USERNAME_REGEX.test(modelValue)) {
                    // it is valid
                    return true;
                }
                return false;
            }
        }
    }
});

angular.module('CSP').directive('pass', function($http) {
    var EMAIL=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            ctrl.$validators.pass = function(modelValue, viewValue) {
                if (EMAIL.test(modelValue)) {
                    // it is valid
                    return true;
                }
                return false;
            }
        }
    }
});

angular.module('CSP').directive('vpass', function($http) {
    var password = $scope.signupdata.password;
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, elem, attr, ctrl) {
            ctrl.$validators.vpass = function(modelValue, viewValue) {
                if (modelValue == password) {
                    // it is valid
                    return true;
                }
                return false;
            }
        }
    }
});
