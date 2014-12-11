(function(){

  angular.module('ARM')
    .directive('editInPlace', EditInPlaceDirective)
    .directive('percentEditInPlace', PercentEditInPlaceDirective)
    .directive('phoneEditInPlace', PhoneEditInPlaceDirective)
    .directive('socialEditInPlace', SocialEditInPlaceDirective)
    .directive('textEditInPlace', TextEditInPlaceDirective)
    .directive('sglclick', SglClickDirective)
    .directive('ngReallyClick', NgReallyClickDirective)
    .directive('loanStatusIcon', LoanStatusIconDirective)


  SglClickDirective.$inject = ['$parse'];
  LoanStatusIconDirective.$inject = ['$compile'];
  //LoanProgressIconDirective.$inject = ['$compile'];

  function EditInPlaceDirective() {
    return {
      restrict: 'E',
      scope: {
        value: '='
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

  function PercentEditInPlaceDirective() {
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

  function SglClickDirective($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var fn = $parse(attr['sglclick']);
        var delay = 300, clicks = 0, timer = null;
        element.on('click', function (event) {
          clicks++;  //count clicks
          if(clicks === 1) {
            timer = setTimeout(function() {
              scope.$apply(function () {
                fn(scope, { $event: event });
              });
              clicks = 0;             //after action performed, reset counter
            }, delay);
          } else {
            clearTimeout(timer);    //prevent single-click action
            clicks = 0;             //after action performed, reset counter
          }
        });
      }
    };
  }

  function NgReallyClickDirective() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('click', function() {
          var message = attrs.ngReallyMessage;
          if (message && confirm(message)) {
            scope.$apply(attrs.ngReallyClick);
          }
        });
      }
    }
  }

  function LoanStatusIconDirective($compile) {
    var templateMap = {
      '1': '<span class="glyphicon glyphicon-wrench" tooltip="In_Progress" style="color: #009;"></span>',
      '2': '<span class="glyphicon glyphicon-ok" tooltip="Paid" style="color: #090;"></span>',
      '3': '<span class="glyphicon glyphicon-share-alt" tooltip="Recommended"></span>',
      '4': '<span class="glyphicon glyphicon-thumbs-up" tooltip="Approved"></span>',
      '5': '<span class="glyphicon glyphicon-thumbs-down" tooltip="Denied" style="color: #900;"></span>',
      'default': '<span class="glyphicon glyphicon-wrench" tooltip="In_Progress" style="color: #009;"></span>'
    }

    function linker(scope, element, attrs) {
      var template = templateMap[scope.status] || templateMap.default;
      element.append($compile(template)(scope));
    }

    return {
      restrict: 'A',
      link: linker,
      scope: {
        status: '@'
      }
    };

  }

})();