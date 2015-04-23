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

        function getCrops(loan) {
            return [];
            //return $http.get(API_URL + '/loans/' + loan.id + '/budgets');
        }

        function getInsurance(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/insurance')
                .then(function (rsp){
                    var policyList = rsp.data.data;
                    //console.log('List', policyList);

                    var ins = {
                        agencies: processAgencies(policyList),
                        policies: policyList,
                        byCrop: processByCrop(policyList),
                        totals: processInsTotals(processByCrop(policyList))
                    };
                    //console.log('LoanInsurance: ', ins);
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
            var bycrop = [];
            var crops = [
                {id: 1, crop: "Corn"},
                {id: 2, crop: "Soybeans"},
                {id: 3, crop: "BeansFAC"},
                {id: 4, crop: "Sorghum"},
                {id: 5, crop: "Wheat"},
                {id: 6, crop: "Cotton"},
                {id: 7, crop: "Rice"},
                {id: 8, crop: "Peanuts"},
                {id: 9, crop: "SugarCane"}
            ];

            var grped = _.chain(policies).groupBy('crop').value();
            var byCrop = _.map(grped, function(item, key) {
                return item.reduce(function(crp, plcy) {
                    crp.crop_id = plcy.crop_id;
                    crp.name = plcy.name;
                    crp.type = plcy.type;
                    crp.option = plcy.option;
                    crp.price = Number(plcy.price); //wgt avg
                    crp.level = Number(plcy.level);
                    crp.premium = Number(plcy.premium); //wgt avg
                    crp.share = Number(plcy.share); //wgt avg
                    crp.acres = Number(plcy.acres);
                    crp.ins_yield = Number(plcy.yield);
                    crp.guarantee += calcGuarantee(plcy.level, plcy.price, plcy.yield);
                    crp.value += calcInsValue(plcy.acres, plcy.price, plcy.yield, plcy.share);
                    return crp;
                }, { crop_id: 0, crop: key, name: 0, type: 0, option: 0, price: 0, level: 0, premium: 0, share: 0, acres: 0, ins_yield: 0, guarantee: 0, value: 0 });
            });
            return byCrop;
        }

        function processInsTotals(obj) {
            var lone = { acres: 0, value: 0 };
            var byLoan = _.forEach(obj, function(item, key) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return lone;
        }

        function updateLoanData(loan) {
            return $q.all({
                need_vote: getPendingVotes(loan),
                has_comment: getPendingComments(loan),
                total_ins_value: getTotalInsValue(loan),
                quests: getLoanQuestions(loan),
                crops: getCrops(loan),
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

        //////////
        function calcGuarantee(level, price, insyield) {
            //console.log('Guarantee', level, price, insyield);
            return (Number(level)/100) * Number(price) * Number(insyield);
        }
        function calcInsValue(acres, price, insyield, share) {
            return Number(acres) * Number(price) * Number(insyield) * (Number(share)/100);
        }
    } // end factory
})();
