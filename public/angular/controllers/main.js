(function(){
    'use strict';
  angular.module('ARM')
    .controller('MainController', function(
      $scope,
      $state,
      toastr,
      GlobalsFactory,
      UsersFactory,
      FeederFactory,
      LoansFactory
    ){
      $scope.landing_view = 'my_settings_view';

      UsersFactory.getUsers().then(function success(response){
        $scope.users = response.data.data;
      });

      //TODO: harvest user_id from login
      //TODO: create UsersFactory.getBadges
      UsersFactory.getUser('2').then(function success(response){
        $scope.user = response.data.data;
        $scope.user.badged = UsersFactory.getBadges('2');
      });

      GlobalsFactory.getGlobals().then(function success(response){
        $scope.globals = response.data.data[0];
        $scope.cropYears = [
          {id: $scope.globals.CY, year: $scope.globals.CY},
          {id: $scope.globals.PY1, year: $scope.globals.PY1},
          {id: $scope.globals.PY2, year: $scope.globals.PY2},
          {id: $scope.globals.PY3, year: $scope.globals.PY3},
          {id: $scope.globals.PY4, year: $scope.globals.PY4},
          {id: $scope.globals.PY5, year: $scope.globals.PY5},
          {id: $scope.globals.PY6, year: $scope.globals.PY6},
        ];
      });

      FeederFactory.init();
      $scope.feeder = FeederFactory.getObject();

      LoansFactory.getLoans().then(function success(response){
        $scope.loans = response.data.data;
        toastr.success('Loaded all loans', 'Success!');
      });

      $scope.getColor = function(val){
        var colors = ['gray', 'green', 'yellow', 'red', 'blue', 'green_off', 'yellow_off'];
        return colors[val] || 'gray';
      };

      $scope.newLoan = function(val){
        for(var l=0; l<$scope.loantypes.length; l++){
          if( val === $scope.loantypes[l].ltPath){
            $scope.chosenLT = $scope.loantypes[l].loantype;
            $scope.chosenLT_id = parseInt($scope.loantypes[l].id);
            $state.go('new.farmer');
          } // end if
        } // end for
      }; // end newLoan fn

      $scope.getReport = function(val){
        var url = '';
        for(var r=0; r<$scope.reports.length; r++){
          if(val === $scope.reports.rptPath){
            url = 'reports.' + val;
            $state.go(url);
          } // end if
        } // end for
      }; // end getReport fn

      $scope.gtZero = function(value){
        if(value <= 0) {
          return 'text-center';
        }
        else {
          return 'text-right';
        }
      }; // end gtZero fn

      $scope.status = {
        isopen: false
      };

      $scope.toggled = function(open) {
        //$log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      /* FOR PENDING SORT */
      // compoundSort = 4 * need_vote + 2 * has_comment + is_stale
      $scope.orderOptions = ['applicant','-categoryOrder']
      $scope.myOrder = 'applicant';
      $scope.orderOption = 0;

      $scope.nextOrder = function() {
        $scope.orderOption ++
        if ($scope.orderOption >= $scope.orderOptions.length) $scope.orderOption = 0

        $scope.myOrder = $scope.orderOptions[$scope.orderOption]
      }
    });
})();