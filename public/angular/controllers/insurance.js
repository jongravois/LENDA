(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('InsuranceController', InsuranceController);

    InsuranceController.$inject = ['$scope', '$state', '$stateParams', 'AppFactory', 'InsuranceFactory', 'LoansFactory'];

    function InsuranceController($scope, $state, $stateParams,
                                 AppFactory, InsuranceFactory, LoansFactory) {
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

        if (!$scope.loan) {
            LoansFactory.getLoan($stateParams.loanID)
                .then(function success(rsp) {
                    var loan = rsp.data.data;
                    LoansFactory.getInsuranceTotal($stateParams.loanID)
                        .then(function (rsp) {
                            loan.total_ins_value = rsp.data;
                        });
                    $scope.loan = loan;
                });
        }
        $scope.insurance = InsuranceFactory.data;
        $scope.newPolicy = {
            acres: 0,
            agency: '',
            agent: '',
            agent_phone: '',
            agent_email: '',
            aph: 0,
            level: 75,
            loancounty_id: '',
            option: '',
            policy: '',
            premium: 0.00,
            price: 0.00,
            share: 100,
            type: 'RP'
        };

        $scope.addNewOne = false;

        $scope.newPolicy = {
            acres: 0,
            agency: '',
            agent: '',
            agent_phone: '',
            agent_email: '',
            aph: 0,
            level: 75,
            loancounty_id: '',
            option: '',
            policy: '',
            premium: 0.00,
            price: 0.00,
            share: 100,
            type: 'RP'
        };

        $scope.practiceDD = [
            {id: 1, practice: 'Corn IR'},
            {id: 2, practice: 'Corn NI'},
            {id: 3, practice: 'Soybeans IR'},
            {id: 4, practice: 'Soybeans NI'},
            {id: 5, practice: 'Soybeans FACIR'},
            {id: 6, practice: 'Soybeans NI'},
            {id: 7, practice: 'Sorghum IR'},
            {id: 8, practice: 'Sorghum NI'},
            {id: 9, practice: 'Wheat IR'},
            {id: 10, practice: 'Wheat NI'},
            {id: 11, practice: 'Cotton IR'},
            {id: 12, practice: 'Cotton IR'},
            {id: 13, practice: 'Rice IR'},
            {id: 14, practice: 'Rice NI'},
            {id: 15, practice: 'Peanuts IR'},
            {id: 16, practice: 'Peanuts NI'},
            {id: 17, practice: 'Sugar Cane IR'},
            {id: 18, practice: 'Sugar Cane NI'},
        ];

        $scope.ins_sum = [
            {
                crop: 'Corn',
                type: 'RP',
                option: 'EU',
                price: 4.25,
                level: 75,
                guarantee: 431.34,
                premium: 11.88,
                share: 84,
                value: 122985.31,
                risk: 40,
                cash_flow: 300
            },
            {
                crop: 'Soybeans',
                type: 'RP',
                option: 'EU',
                price: 11.25,
                level: 75,
                guarantee: 305.83,
                premium: 14.35,
                share: 80.7,
                value: 136480.66,
                risk: 28,
                cash_flow: -10
            },
            {
                crop: 'Sorghum',
                type: 'RP',
                option: 'EU',
                price: 4.00,
                level: 75,
                guarantee: 0,
                premium: 20.00,
                share: 100,
                value: 0,
                risk: 0,
                cash_flow: 0
            },
            {
                crop: 'Wheat',
                type: 'RP',
                option: 'EU',
                price: 6.64,
                level: 75,
                guarantee: 0,
                premium: 20.00,
                share: 100,
                value: 0,
                risk: 0,
                cash_flow: 0
            },
            {
                crop: 'Cotton',
                type: 'RP',
                option: 'EU',
                price: 0.70,
                level: 75,
                guarantee: 0,
                premium: 20.00,
                share: 100,
                value: 0,
                risk: 0,
                cash_flow: 0
            },
            {
                crop: 'Rice',
                type: 'RP',
                option: 'EU',
                price: 0.140,
                level: 75,
                guarantee: 0,
                premium: 20.00,
                share: 100,
                value: 0,
                risk: 0,
                cash_flow: 0
            },
            {
                crop: 'Peanuts',
                type: 'RP',
                option: 'EU',
                price: 2.30,
                level: 75,
                guarantee: 0,
                premium: 20.00,
                share: 100,
                value: 0,
                risk: 0,
                cash_flow: 0
            },
            {
                crop: 'Sugar Cane',
                type: 'RP',
                option: 'EU',
                price: 0.28,
                level: 75,
                guarantee: 0,
                premium: 20.00,
                share: 100,
                value: 0,
                risk: 0,
                cash_flow: 0
            }
        ];

        $scope.toggleAddNewOne = function () {
            $scope.addNewOne = !$scope.addNewOne;
        };

        $scope.onAgencySelect = function ($item, $model, $label) {
            if ($item) {
                AppFactory.agentsInAgency($item.id)
                    .then(function success(response) {
                        $scope.newPolicy.agency_id = $item.id;
                        $scope.agencyAgents = response.data.data;
                    });
            } // end if
        }; // end onAgencySelect

        $scope.onAgentSelect = function ($item, $model, $label) {
            if ($item) {
                $scope.newPolicy.agent_id = $item.id;
                $scope.newPolicy.agent_phone = $item.agent_phone;
                $scope.newPolicy.agent_email = $item.agent_email;
            }
        }; // end onAgentSelect

        $scope.getPracticeDefaults = function (county, crop, practice) {
            LoansFactory.getInsuranceDefaults(county)
                .then(function success(rsp) {
                    var res = rsp.data[0];
                    $scope.newPolicy.aph = res[crop][practice]['aph'];
                    $scope.newPolicy.price = res[crop][practice]['ins_price'];
                });
        }; // end getPracticeDefaults

        $scope.addNewPolicy = function (obj) {
            obj.loan_id = $stateParams.loanID;

            //TODO: when pushing into $scope.insurance, obj.Locale not set
            //TODO: when pushing into $scope.insurance, obj.practice not set
            if (!obj.agent_id) {
                var newAgent = {
                    agency_id: obj.agency_id,
                    agent: obj.agent,
                    agent_phone: obj.agent_phone,
                    agent_email: obj.agent_email
                };
                LoansFactory.insertAgent(newAgent)
                    .then(function success(rsp) {
                        //TODO: agent_id is not set when inserting new agent
                        obj.agent_id = rsp.data.message;
                    });
            } // end if

            obj.practice = LoansFactory.getPracticeLabel(obj.loancrop_id, obj.croppractice_id);
            obj.locale = LoansFactory.localeFromCounty(obj.loancounty_id);
            obj.guaranty = AppFactory.calcInsuranceGuaranty(obj);
            obj.value = AppFactory.calcInsuranceValue(obj);

            $scope.loan.total_ins_value = $scope.loan.total_ins_value + obj.value;
            console.log(obj);

            LoansFactory.insertPolicy(obj)
                .then(function success(rsp) {
                });
            $scope.insurance.push(obj);
            $scope.newPolicy = {
                acres: 0,
                agency: '',
                agent: '',
                agent_phone: '',
                agent_email: '',
                aph: 0,
                level: 75,
                loancounty_id: '',
                option: '',
                policy: '',
                premium: 0.00,
                price: 0.00,
                share: 100,
                type: 'RP'
            };
        }; //end addNewPolicy

    } // end controller function
})();
