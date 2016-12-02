angular.module('CSP', ['ngMessages']);

angular.module('CSP').directive('pass', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {
                if (/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(ngModelValue)) {
                    ctrl.$setValidity('passwordValidation', true);
                } else {
                    ctrl.$setValidity('passwordValidation', false);
                }
                return ngModelValue;
            }
            ctrl.$parsers.push(customValidator);
        }
    };
});

angular.module('CSP').directive('repeatpassword', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {
                if (ngModelValue==$scope.signupdata.password) {
                    ctrl.$setValidity('passwordVerfValidation', true);
                } else {
                    ctrl.$setValidity('passwordVerfValidation', false);
                }
                return ngModelValue;
            }
            ctrl.$parsers.push(customValidator);
        }
    };
});

angular.module('CSP').directive('name', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {
                if ( /^[A-Za-z]{1,}$/.test(ngModelValue)) {
                    ctrl.$setValidity('nameValidation', true);
                } else {
                    ctrl.$setValidity('nameValidation', false);
                }
                return ngModelValue;
            }
            ctrl.$parsers.push(customValidator);
        }
    };
});

