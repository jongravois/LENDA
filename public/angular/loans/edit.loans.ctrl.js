(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('EditLoansController', EditLoansController);

    EditLoansController.$inject = ['$scope', '$state', '$stateParams', '$filter', '$timeout', 'toastr', 'AppFactory', 'ApplicantsFactory', 'ExceptionsFactory', 'FarmersFactory', 'LoansFactory', 'InitialData'];

    /* @ngInject */
    function EditLoansController($scope, $state, $stateParams, $filter, $timeout, toastr, AppFactory, ApplicantsFactory, ExceptionsFactory, FarmersFactory, LoansFactory, InitialData) {
        $scope.loans = $scope.loans || InitialData;
        $scope.loantypeID = $stateParams.loantypeID;
        $scope.loan = _.find($scope.loans, function(i) {
            return i.id == $stateParams.loanID;
        });
        $scope.loan.indicon_width = '140px';
        $scope.loan.season_full = AppFactory.getFullSeason($scope.loan.season);

        //console.log('loan', $scope.loan);

        //FARMER
        FarmersFactory.getFarmer($scope.loan.farmer_id)
            .then(function success(rsp) {
                $scope.farmer = rsp.data.data;
            });

        //APPLICANT, PARTNERS, JOINTS & CORPORATION
        ApplicantsFactory.getApplicant($scope.loan.applicant_id)
            .then(function success(rsp) {
                $scope.applicant = rsp.data.data;
                ApplicantsFactory.getPartners($stateParams.loanID)
                    .then(function success(rsp) {
                        $scope.partners = rsp.data.data;
                    });
                ApplicantsFactory.getJointVentures($stateParams.loanID)
                    .then(function success(rsp) {
                        $scope.joints = rsp.data.data;
                    });
                ApplicantsFactory.getCorporations($stateParams.loanID)
                    .then(function success(rsp) {
                        $scope.corps = rsp.data.data;
                    });
            });

        //QUESTS
        $scope.quests = $scope.loan.quests;

        //PRIOR LIENS
        LoansFactory.getPriorLiens($stateParams.loanID)
            .then(function success(rsp) {
                $scope.prior_lien = rsp.data.data[0];
            });

        // GUARANTORS
        LoansFactory.getGuarantors($stateParams.loanID)
            .then(function success(rsp) {
                $scope.loan.guarantors = rsp.data.data;
            });

        //CONDITIONS
        LoansFactory.getConditions($stateParams.loanID)
            .then(function success(rsp) {
                $scope.loanConditions = rsp.data.data;
            });

        //EXCEPTIONS
        LoansFactory.getExceptions($stateParams.loanID)
            .then(function success(rsp) {
                $scope.loanExceptions = rsp.data.data;
            });

        //COMMENTS
        LoansFactory.getComments($stateParams.loanID)
            .then(function success(rsp) {
                $scope.comments = rsp.data.data;
            });

        //PREREQUISITES
        LoansFactory.getPrerequisites($stateParams.loanID)
            .then(function success(rsp) {
                $scope.docs = rsp.data.data;
            });

        //LOANCROPS & PERCENT IRRIGATED
        LoansFactory.getLoanCrops($stateParams.loanID)
            .then(function success(rsp) {
                var IrrPer = '';
                var bEven = [];
                var lc = rsp.data.data;

                _.forEach(lc, function(item){
                    if(item.acres > 0){
                        IrrPer += item.name + ': ' + item.percent_irrigated + '% | ' ;
                    }
                });

                $scope.loanCrops = lc;

                if(IrrPer.length === 0){
                    $scope.IrrPer = 'No crops selected.';
                } else {
                    $scope.IrrPer = IrrPer.slice(0, -2);
                }

                $scope.activeCrops = _.filter(lc, function(item){
                    return item.acres > 0;
                });
            });

        /*LoansFactory.getTotalAcres($scope.loan.id)
            .then(function (rsp) {
                $scope.loan.total_acres = parseFloat(rsp);
        });*/

        LoansFactory.getAttachments($stateParams.loanID)
            .then(function success(rsp) {
                var data = rsp.data;
                if (data && data.length !== 0) {
                    $scope.loan.attachments = true;
                } else {
                    $scope.loan.attachments = false;
                } // end if
            });

        //EXPENSES
        LoansFactory.getFarmExpenses($stateParams.loanID)
            .then(function success(rsp) {
                $scope.farmExpenses = rsp.data.data;
            });

        LoansFactory.getTotalExpenses($stateParams.loanID)
            .then(function success(rsp) {
                $scope.total_expenses = rsp;
            });

        $scope.uomChanged = function (id, uom) {
            alert('Crop ID: ' + id + ' has been changed to ' + uom);
        };
        $scope.addGuarantor = function () {
            $scope.guarantors.push($scope.newGuarantor);
            $scope.newGuarantor = {};
        };
        //TODO: Remove These
        $scope.createExceptions = ExceptionsFactory.createExceptions;
        $scope.createBankruptcy = ExceptionsFactory.bankruptcyHistory;
        $scope.deleteException = function (index) {
            var removee = $scope.loanExceptions[index];
            $scope.loanExceptions.splice(index, 1);
            ExceptionsFactory.deleteException(removee.id);
        };
        //TODO: Remove These
        $scope.getAverage = function (arr) {
            var cnt = 0;
            var tot = 0;
            //console.log(arr);
            for (var a = 0; a < arr.length; a++) {
                if (!_.isNaN(parseFloat(arr[a]))) {
                    tot = tot + parseFloat(arr[a]);
                    cnt = cnt + 1;
                } // end if
            } // end for
            return tot / cnt;
        };

    } // end controller function

})();
