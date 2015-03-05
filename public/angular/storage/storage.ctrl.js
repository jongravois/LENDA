(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('StorageController', StorageController);

    StorageController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'LoansFactory'];

    function StorageController($scope, $state, $stateParams, AppFactory, LoansFactory) {
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

        if (!$scope.storage) {
            LoansFactory.getStorage($stateParams.loanID)
                .then(function success(rsp) {
                    $scope.storage = rsp.data.data;
                    console.log('false', $scope.storage);
                    $scope.newStorage = {
                        contract_date: $scope.storage.contract_date || new Date(),
                        grain_buyer: $scope.storage.grain_buyer || '',
                        advance_percent: $scope.storage.advance_percent || 75,
                        payment_terms: $scope.storage.payment_terms || 15,
                        amount_requested: $scope.storage.amount_requested || 0
                    };
                });
        } else {
            console.log('true', $scope.storage);
            $scope.newStorage = {
                contract_date: $scope.storage.contract_date || new Date(),
                grain_buyer: $scope.storage.grain_buyer || '',
                advance_percent: $scope.storage.advance_percent || 75,
                payment_terms: $scope.storage.payment_terms || 15,
                amount_requested: $scope.storage.amount_requested || 0
            };
        } // end if

        $scope.newContract = {
            contract_number: '',
            lien_holder: '',
            delivery_due_date: '',
            owner_share: 0.00,
            contract_amount: 0.00,
            uom: 'bu',
            contract_price: 0.0000
        };

        $scope.commodityDD = [
            {id: 1, name: 'corn'},
            {id: 2, name: 'soybeans'},
            {id: 3, name: 'sorghum'},
            {id: 4, name: 'wheat'},
            {id: 5, name: 'cotton'},
            {id: 6, name: 'rice'},
            {id: 7, name: 'peanuts'},
            {id: 8, name: 'sugar cane'}
        ];

        $scope.total_stored = {
            acres: 0,
            revenue: 0,
            eligible: 0,
            remaining: 0
        };

        $scope.saveStorageContract = function () {
            //TODO: Validate form
            if (!$scope.newStorage.grain_buyer || !$scope.newContract.contract_amount || !$scope.newContract.contract_price) {
                alert('Please fill in all Required Fields');
                return;
            } // end if
            var ins = {
                loan_id: $stateParams.loanID,
                contract_number: $scope.newContract.contract_number,
                grain_buyer: $scope.newStorage.grain_buyer,
                commodity: $scope.newContract.commodity,
                lien_holder: $scope.newContract.lien_holder,
                contract_date: $scope.newStorage.contract_date,
                delivery_date: $scope.newContract.delivery_due_date,
                contract_amount: $scope.newContract.contract_amount,
                contract_price: $scope.newContract.contract_price,
                owner_share: $scope.newContract.owner_share,
                amount_requested: $scope.newStorage.amount_requested,
                revenue: 1 * $scope.newContract.contract_amount * 1 * $scope.newContract.contract_price * (1 - (1 * $scope.newContract.owner_share / 100)),
                eligible_proceeds: (1 * $scope.newContract.contract_amount * 1 * $scope.newContract.contract_price * (1 - (1 * $scope.newContract.owner_share / 100))) * (1 * ($scope.newStorage.advance_percent / 100)),
                advance_percent: $scope.newStorage.advance_percent,
                payment_terms: $scope.newStorage.payment_terms
            };
            $scope.storage.push(ins);

            // persist data
            AppFactory.postIt('/storage', ins);
            $scope.total_stored.acres += 1 * ins.contract_amount;
            $scope.total_stored.revenue += 1 * ins.revenue;
            $scope.total_stored.eligible += 1 * ins.eligible_proceeds;
            $scope.total_stored.remaining = (1 * $scope.total_stored.eligible) - $scope.newStorage.amount_requested;

            $scope.newContract = {
                contract_number: '',
                lien_holder: '',
                delivery_due_date: '',
                owner_share: 0.00,
                contract_amount: 0.00,
                uom: 'bu',
                contract_price: 0.0000
            };
        };

        $scope.insertGrain = function () {
            //obj.loan_id = $stateParams.loanID;
            AppFactory.moveToNextNewLoanScreen(currScreen, $stateParams);
        };

        $scope.updateGrain = function () {
        };
    }
})();
