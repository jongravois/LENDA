(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('FarmersController', FarmersController);

    FarmersController.$inject = ['$scope', '$state', '$stateParams', 'toastr', 'AppFactory', 'FarmersFactory', 'ExceptionsFactory', 'LoansFactory'];

    function FarmersController($scope, $state, $stateParams, toastr, AppFactory, FarmersFactory, ExceptionsFactory, LoansFactory) {
        activate();

        if (!$scope.loan) {
            $scope.loan = _.find($scope.loans, function (i) {
                return i.id == $stateParams.loanID;
            });
        } // end if

        if($scope.loan && !$scope.loan.farmer_id) {
            $scope.loan.farmer = {
                new_client: true
            };
        }

        $scope.createFarmer = function (obj) {
            // HANDLE CREATING/UPDATING FARMER
            if (angular.isDefined($scope.loan.farmerID) && obj.id === $scope.loan.farmerID) {
                AppFactory.patchIt('/loans/', $stateParams.loanID, {farmer_id: $scope.loan.farmerID});
                AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
            } else {
                var thisYear = new Date().getFullYear();
                var exp = 0;
                if($scope.loan.farmer) {
                    exp = $scope.loan.farmer.farm_exp;
                } else {
                    exp = AppFactory.diffInDates(thisYear, parseInt(obj.first_year_farmer));
                } // end if
                console.log(exp);
                checkExceptions(exp);
               // AppFactory.patchIt('/loanfinancials/', $scope.loan.id, {experience: exp});

                obj.farm_exp = exp;
                return FarmersFactory.createFarmer(obj)
                    .then(function (res) {
                        AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: res.data.message});
                        //AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
                    });
            } // end if
        }; // end createFarmer function

        $scope.updateFarmer = function(obj) {
            AppFactory.putIt('/farmers/', obj.id, obj);
            toastr.success('Modified farmer.', 'Success!');
        }; // end updateFarmer function

        $scope.onFarmerSelect = function ($item, $model, $label) {
            if ($item) {
                $scope.farmerID = $item.id;
                $scope.loan.farmerID = $item.id;
                $scope.loan.farmer = $item;
                $scope.loan.farmer.new_client = false;
            }
        };

        function checkExceptions(experience) {
            //TODO: Exception - Previous Loans???
            if (parseInt(experience) === 1) {
                ExceptionsFactory.handler($stateParams.loanID, 'firstTimeFarmer', false, {});
            } else if (parseInt(experience) < 4) {
                ExceptionsFactory.handler($stateParams.loanID, 'farmerHistory', false, {});
            } // end if
        }

        function activate() {
            var curr = $state.current.url;
            var currScreen = curr.substring(1, curr.length);
            $scope.newapplication = $state.current.data.newapplication;

            if ($scope.newapplication && $scope.screens) {
                angular.forEach($scope.screens, function (obj) {
                    if (obj.screen === currScreen) {
                        obj.status = 1;
                    }
                });
            }// end if
        }
    } // end controller
})();
