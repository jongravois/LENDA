(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LoansProcessor', LoansProcessor);

    LoansProcessor.$inject = ['$http', '$q', 'API_URL'];

    /* @ngInject */
    function LoansProcessor($http, $q, API_URL) {

        //PUBLIC API
        return {
            getLoansWithExtraData: getLoansWithExtraData
        };

        function getLoansWithExtraData() {
            return $http.get(API_URL + '/loans').then(updateLoansData);
        }

        function getInsurance(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/insurance')
                .then(function (rsp){
                    var policyList = rsp.data.data;

                    var ins = {
                        agencies: processAgencies(policyList),
                        policies: policyList,
                        byCrop: processByCrop(policyList),
                        totals: 'totals'
                    };
                    console.log('LoanInsurance: ', ins);
                    return (ins);
                });
        }

        function getLoanQuestions(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/quests')
                .then(function (response) {
                    //console.log('LoanQuestions: ', response);
                    return (response.data.data[0]);
                });
        }

        function getPendingComments(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/commentstatus')
                .then(function (response) {
                    //console.log(response);
                    if(response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }
                });
        }

        function getPendingVotes(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/pendingvotes')
                .then(function (response) {
                    if(response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }

                });
        }

        function getTotalInsValue(loan) {
            return $http.get(API_URL + '/insurance/' + loan.id + '/value')
                .then(function (response) {
                    return response.data;
                });
        }

        function processAgencies(policies) {
            var result = [];
            var exists = {};
            var arrayOfFinalProduct = [];
            var agentExists = {};

            var firstPass = _.forEach(policies, function(policy){
                if(!exists[policy.agent_id]){
                    result.push(policy);
                    exists[policy.agent_id] = true;
                }
            });

            var secondPass = _.forEach(result, function(policy){
                var idealProduct = {};
                var allreadyHappend = _.find(arrayOfFinalProduct, {'id': policy.agency_id});
                if(!_.isUndefined(allreadyHappend)){
                    allreadyHappend.agents.push({id: policy.agent_id, agent: policy.agent, agent_email: policy.agent_email, agent_phone: policy.agent_phone});
                }else if(!agentExists[policy.agent_id]){
                    idealProduct.agents = [];
                    idealProduct.id = policy.agency_id;
                    idealProduct.name = policy.agency;
                    idealProduct.address = policy.agency_address;
                    idealProduct.address_city = policy.agency_city;
                    idealProduct.address_state = policy.agency_state;
                    idealProduct.address_zip = policy.agency_zip;
                    idealProduct.address_email = policy.agency_email;
                    idealProduct.address_phone = policy.agency_phone;
                    idealProduct.agents.push({id: policy.agent_id, agent: policy.agent, agent_email: policy.agent_email, agent_phone: policy.agent_phone});
                    arrayOfFinalProduct.push(idealProduct);
                    agentExists[policy.agent_id] = true;
                }
            });
            return arrayOfFinalProduct;;
        }

        function processByCrop(policies) {
            return policies;
        }

        function updateLoanData(loan) {
            return $q.all({
                need_vote: getPendingVotes(loan),
                has_comment: getPendingComments(loan),
                total_ins_value: getTotalInsValue(loan),
                quests: getLoanQuestions(loan),
                insurance: getInsurance(loan)
            })
                .then(function (updatedData) {
                    angular.extend(loan, updatedData);
                    return loan;
                });
        }

        function updateLoansData(response) {
            var allLoans = response.data.data;
            return $q.all(allLoans.map(updateLoanData));
        }

    } // end factory
})();
