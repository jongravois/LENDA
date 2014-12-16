(function(){
  'use strict';
  angular.module('ARM')
    .controller('MainController', function(
      $scope,
      $state,
      $q,
      toastr,
      AppFactory,
      CommentsFactory,
      FarmersFactory,
      FeederFactory,
      GlobalsFactory,
      LendaFactory,
      LoansFactory,
      UsersFactory
      ){
      $scope.user_id = $('#user_id').data('id');
      $scope.landing_view = 'my_settings_view';

      UsersFactory.getUsers().then(function success(response){
        $scope.users = response.data.data;
      });

      // TODO: Use notifications to determine NeedsVote
      UsersFactory.getUser($scope.user_id).then(function success(response){
        $scope.user = response.data.data;
        UsersFactory.getNotifications($scope.user_id).then(function success(response){
          $scope.user.notifications = response.data.data;
          $scope.user.badged = response.data.data.length;
        });
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

      GlobalsFactory.getAdminGrader().then(function success(response){
              $scope.grads = response.data.data;
            });

      FeederFactory.init();
      $scope.feeder = FeederFactory.getObject();
      
      LoansFactory.getCrops().then(function success(response){
              $scope.crops = response.data.data;
            });
      
      FarmersFactory.getFarmers().then(function success(response){
              $scope.farmers = response.data.data;
            });

      LoansFactory.getLoans().then(function success(response){
        var allLoans = response.data.data;
        $q.all(
          _.map(allLoans, function(obj){
            //true if
            return LoansFactory.getPendingVotes(obj.id)
              .then(function(pvs){
                if(pvs.data.data.length == 0){
                  obj.need_vote = false;
                } else {
                  obj.need_vote = true;
                } // end if
                return obj;
              })
          })
        ).then(function(loans){
            $scope.loans = loans;
          })
      });
      //toastr.success('Loaded all loans', 'Success!');

      $scope.getColor = function(val){
        var colors = ['gray', 'green', 'yellow', 'red', 'blue', 'green_off', 'yellow_off'];
        return colors[val] || 'gray';
      };

      $scope.newLoan = function(val){
        var obj = {};
        for(var l=0; l<$scope.feeder.loantypes.length; l++){
          if( val === $scope.feeder.loantypes[l].ltPath){
            $scope.chosenLT = $scope.feeder.loantypes[l].loantype;
            $scope.chosenLT_id = parseInt($scope.feeder.loantypes[l].id);
            LoansFactory.getScreens($scope.feeder.loantypes[l].id).then(function success(response){
              $scope.screens = response.data.data;
              angular.forEach(response.data.data, function(obj, index){
                if(obj.screen == 'farmer'){
                  obj.status = 1;
                } else {
                  obj.status = 0;
                }
              });
              return obj;
            });
            //TODO: Calculation to get season_full
            var obj = {
              app_date: moment(new Date()).format('YYYY-MM-DD'),
              due_date: moment(new Date(AppFactory.getDefaultDueDate($scope.chosenLT_id, $scope.globals.crop_year))).format('YYYY-MM-DD'),
              loan_type_id: $scope.chosenLT_id,
              crop_year: $scope.globals.crop_year,
              season: $scope.globals.season,
              loc_id: $scope.user.loc_id,
              region_id: $scope.user.region_id,
              user_id: $scope.user.id
            };
            LoansFactory.insertLoan(obj).then(function success(response){
              $state.go('new.farmer', {loantypeID: $scope.chosenLT_id, loanID: response.data.message.id});
            });
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

      $scope.clkNotificationBadge = function(id){
        alert(id);
      };

      $scope.toggled = function(open) {
        //$log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

      $scope.createLenda = function(){
        return LendaFactory.create({
          loan_id: 1,
          type: 'LENDA',
          user_id: 2,
          comment: 'This is a test LENDA comment generated in Main.js'
        });
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