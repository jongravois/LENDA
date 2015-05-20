(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('FarmersController', FarmersController);

    FarmersController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', 'toastr', 'AppFactory', 'FarmersFactory', 'ExceptionsFactory', 'LoansFactory'];

    function FarmersController($scope, $rootScope, $state, $stateParams, toastr, AppFactory, FarmersFactory, ExceptionsFactory, LoansFactory) {
        activate();

        if (!$scope.loan) {
            $scope.loan = _.find($scope.loans, function (i) {
                return i.id == $stateParams.loanID;
            });
        } // end if

        if ($scope.loan && !$scope.loan.farmer_id) {
            $scope.loan.farmer = {
                new_client: true
            };
        }

        $scope.createFarmer = function (obj) {
            if (AppFactory.nullOrNot($scope.loan.farmer_id)) {
                // new loan has no user so save a new or update an matched
                if(obj.id) {
                    //existing farmer - add farmer_id to loan
                    AppFactory.patchIt('/loans/', $stateParams.loanID, {farmer_id: $scope.loan.farmerID});
                    $rootScope.farmerID = $scope.loan.farmerID;
                    toastr.success('Added existing farmer.', 'Success!');
                    $state.go('new.applicant', $stateParams);
                } else {
                    // or new farmer - insert farmer and add new id to loan
                    var thisYear = new Date().getFullYear();
                    var farm_exp = 0;
                    if ($scope.loan.farmer) {
                        farm_exp = $scope.loan.farmer.farm_exp;
                    } else {
                        farm_exp = Number(new Date().getFullYear()) - Number(obj.first_year_farmer);
                    } // end if

                    //console.log(thisYear, obj, farm_exp);
                    checkExceptions(farm_exp);
                    AppFactory.patchIt('/loanfinancials/', $scope.loan.id, {experience: farm_exp});

                    obj.farm_exp = farm_exp;
                    var birth = obj.dob;
                    obj.dob = birth.substr(0,2) + '/' + birth.substr(2,2) + '/' + birth.substr(5,4);
                    obj.loan_id = $stateParams.loanID;
                    //console.log('OBJECT', obj);
                    return FarmersFactory.createFarmer(obj)
                        .then(function (res) {
                            AppFactory.patchIt('/loans/', $scope.loan.id, {farmer_id: res.data.message});
                            $rootScope.farmerID = res.data.message;
                            $state.go('new.applicant', $stateParams);
                        });
                }
            } else {
                // user must have refreshed, save any changes
                AppFactory.putIt('/farmers/', obj.id, obj);
                $rootScope.farmerID = obj.id;
                    toastr.success('Modified farmer.', 'Success!');
                $state.go('new.applicant', $stateParams);
            }
        }; // end createFarmer function

        $scope.updateFarmer = function (obj) {
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
