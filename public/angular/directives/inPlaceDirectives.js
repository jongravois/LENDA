(function(){

    angular.module('ARM')
      .directive('editInPlace', EditInPlaceDirective)
      .directive('noCentsEditInPlace', NoCentsEditInPlaceDirective)
      .directive('currencyQuadEditInPlace', CurrencyQuadEditInPlaceDirective)
      .directive('digitEditInPlace', DigitEditInPlaceDirective)
      .directive('nullEditInPlace', NullEditInPlaceDirective)
      .directive('nullIntEditInPlace', NullIntEditInPlaceDirective)
      .directive('percentEditInPlace', PercentEditInPlaceDirective)
      .directive('phoneEditInPlace', PhoneEditInPlaceDirective)
      .directive('socialEditInPlace', SocialEditInPlaceDirective)
      .directive('textEditInPlace', TextEditInPlaceDirective)


    function EditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '=',
                decimals: '=?'
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | currency }}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"/>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function NoCentsEditInPlaceDirective($filter) {
        return {
            restrict: 'E',
            scope: {
                value: '=',
                decimals: '=?'
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | flexCurrency:0 }}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"/>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function CurrencyQuadEditInPlaceDirective($filter) {
        return {
            restrict: 'E',
            scope: {
                value: '=',
                decimals: '=?'
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | flexCurrency:4 }}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"/>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function NullEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | displaynullcurrency }}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"/>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function NullIntEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | displaynullsingle }}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"/>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function PercentEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | number:1}}%</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"></input>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function DigitEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | number:1}}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"></input>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function PhoneEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | phone}}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"></input>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function SocialEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value | ssnum}}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"/>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

    function TextEditInPlaceDirective() {
        return {
            restrict: 'E',
            scope: {
                value: '='
            },
            template: '<span ng-click="edit()" ng-show="!editing">{{ value}}</span><input ng-model="value" ng-blur="onBlur()" ng-show="editing"></input>',
            link: function ($scope, element, attrs) {
                var inputElement = element.find('input');

                // reference the input element
                element.addClass('edit-in-place');

                // Initially, we're not editing.
                $scope.editing = false;

                // ng-click handler to activate edit-in-place
                $scope.edit = function () {
                    $scope.editing = true;

                    // element not visible until digest complete
                    // timeout causes this to run after digest
                    setTimeout(function() {
                        inputElement[0].focus();
                    });
                };

                $scope.onBlur = function() {
                    $scope.editing = false;
                };
            }
        };
    }

})();