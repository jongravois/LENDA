(function(){

  angular.module('ARM')
    .directive('editInPlace', EditInPlaceDirective)
    .directive('eip', EditInPlaceDirective)
    .directive('nullEditInPlace', NullEditInPlaceDirective)
    .directive('nullEip', NullEditInPlaceDirective)
    .directive('nullIntEditInPlace', NullIntEditInPlaceDirective)
    .directive('nullIntEip', NullIntEditInPlaceDirective)
    .directive('percentEditInPlace', PercentEditInPlaceDirective)
    .directive('percentEip', PercentEditInPlaceDirective)
    .directive('phoneEditInPlace', PhoneEditInPlaceDirective)
    .directive('phoneEip', PhoneEditInPlaceDirective)
    .directive('socialEditInPlace', SocialEditInPlaceDirective)
    .directive('socialEip', SocialEditInPlaceDirective)
    .directive('textEditInPlace', TextEditInPlaceDirective)
    .directive('textEip', TextEditInPlaceDirective)
    .directive('sglclick', SglClickDirective)
    .directive('ngReallyClick', NgReallyClickDirective)
    .directive('loanStatusIcon', LoanStatusIconDirective)
    .directive('loanProgressIcon', LoanProgressIconDirective)


  SglClickDirective.$inject = ['$parse', '$timeout'];
  LoanStatusIconDirective.$inject = ['$compile'];
  LoanProgressIconDirective.$inject = ['$compile', '$timeout'];

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

  function SglClickDirective($parse, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var fn = $parse(attr['sglclick']);
        var delay = 300,
          clicks = 0,
          timer = null;
        element.on('click', function(event) {
          clicks++; //count clicks
          if (clicks === 1) {
            timer = $timeout(function() {
              fn(scope, {
                $event: event
              });
              clicks = 0;
            }, delay);
          } else {
            $timeout.cancel(timer); //prevent single-click action
            clicks = 0; //after action performed, reset counter
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

  function LoanProgressIconDirective($compile, $timeout) {
    var progressMarkers = [{
      'id': 1,
      'cat': 'its_list',
      'glyph': 'list-alt',
      'tip': 'ITS List Verfified'
    }, {
      'id': 2,
      'cat': 'fsa_compliant',
      'glyph': 'home',
      'tip': 'FSA Eligibility'

    }, {
      'id': 3,
      'cat': 'has_liens',
      'glyph': 'star',
      'tip': 'Prior Lien Verfied'
    }, {
      'id': 4,
      'cat': 'valid_leases',
      'glyph': 'leaf',
      'tip': 'Leases Valid'
    },
      {
        'id': 5,
        'cat': 'bankruptcy_order_received',
        'glyph': 'fire',
        'tip': 'Bankruptcy Order Received'
      },
      {
        'id': 6,
        'cat': 'received_3party',
        'glyph': 'stats',
        'tip': 'Third Party Credit Verified'
      },
      {
        'id': 7,
        'cat': 'recommended',
        'glyph': 'share-alt',
        'tip': 'Recommended'
      },
      {
        'id': 8,
        'cat': 'arm_approved',
        'glyph': 'thumbs-up',
        'tip': 'ARM Approved'
      },
      {
        'id': 9,
        'cat': 'dist_approved',
        'glyph': 'hand-up',
        'tip': 'Distributor Approved'
      },
      {
        'id': 10,
        'cat': 'loan_closed',
        'glyph': 'folder-close',
        'tip': 'Loan Closed'
      },
      {
        'id': 11,
        'cat': 'added_land_verified',
        'glyph': 'flag',
        'tip': 'Added Land Verified'
      },
      {
        'id': 12,
        'cat': 'arm_ucc_received',
        'glyph': 'log-in',
        'tip': 'ARM UCC Received'
      },
      {
        'id': 13,
        'cat': 'dist_ucc_received',
        'glyph': 'log-in',
        'tip': 'Distributor UCC Received'
      },
      {
        'id': 14,
        'cat': 'aoi_received',
        'glyph': 'arrow-right',
        'tip': 'AOI Received'
      },
      {
        'id': 15,
        'cat': 'ccc_received',
        'glyph': 'link',
        'tip': 'CCC Received'
      },
      {
        'id': 16,
        'cat': 'rebate_assignment',
        'glyph': 'cog',
        'tip': 'Rebate Assignment'
      },
      {
        'id': 17,
        'cat': 'crop_inspection',
        'glyph': 'tree-deciduous',
        'tip': 'Crop Inspection'
      },
      {
        'id': 18,
        'cat': 'limit_warning',
        'glyph': 'warning-sign',
        'tip': 'Limit Warning'
      },
      {
        'id': 19,
        'cat': 'reconcilliation',
        'glyph': 'retweet',
        'tip': 'Reconciliation'
      },
      {
        'id': 20,
        'cat': 'account_classification',
        'glyph': 'sort-by-order-alt',
        'tip': 'Account Classification'
      }];

    var statusColors = [{
      val: 0,
      color: '#CCC',
      class: 'pending'
    }, {
      val: 1,
      color: '#006837',
      class: 'completed'
    }, {
      val: 2,
      color: '#900',
      class: 'overdue'
    }];

    return {
      restrict: 'A',
      require: 'ngModel',
      link: linker,
      template: '<span sglclick="progClicked()" ng-dblclick="progDblClicked()" class="glyphicon glyphicon-{{loan.glyphicon}}" tooltip="{{loan.tooltip}}" style="font-size:18px;color:{{loan.style}};cursor:pointer;"></span>',
      scope: {
        cat: '@',
        ngModel: '='
      }
    };

    function linker(scope, element, attrs, ctrl) {
      scope.loan = {
        id: progressMarkers[scope.cat]['id'],
        glyphicon: progressMarkers[scope.cat]['glyph'],
        tooltip: progressMarkers[scope.cat]['tip']
      };

      var styleChange = function() {
        scope.loan.style = statusColors[scope.ngModel]['color'];
      };

      styleChange();

      var setter = ctrl.$setViewValue;

      ctrl.$setViewValue = function() {
        setter.apply(this, arguments);
        $timeout(styleChange);
      };

      scope.progClicked = function() {

        if (parseInt(scope.ngModel) === 0) {
          ctrl.$setViewValue(1);
        } else if (parseInt(scope.ngModel) === 1) {
          ctrl.$setViewValue(2);
        } else if (parseInt(scope.ngModel) === 2) {
          ctrl.$setViewValue(1);
        }
      };

      scope.progDblClicked = function() {
        alert('Icon ' + scope.ngModel + ' was double clicked.');
      };
    }
  }

})();