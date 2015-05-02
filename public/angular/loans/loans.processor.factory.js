(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LoansProcessor', LoansProcessor);

    LoansProcessor.$inject = ['$http', '$q', 'API_URL', 'AppFactory'];

    /* @ngInject */
    function LoansProcessor($http, $q, API_URL, AppFactory) {

        //PUBLIC API
        return {
            getLoansWithExtraData: getLoansWithExtraData
        };

        function getLoansWithExtraData() {
            return $http.get(API_URL + '/loans').then(updateLoansData);
        }

        function getCrops(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/farmcrops')
                .then(function (rsp) {
                    var cropsList = rsp.data.data;

                    var crops = {
                        corn: makeCorn(cropsList),
                        soybeans: makeSoybeans(cropsList),
                        beansFAC: makeBeans(cropsList),
                        sorghum: makeSorghum(cropsList),
                        wheat: makeWheat(cropsList),
                        cotton: makeCotton(cropsList),
                        rice: makeRice(cropsList),
                        peanuts: makePeanuts(cropsList),
                        sugarcane: makeCane(cropsList)
                    };
                    return crops;
                });
        }

        function getExpenses(expenses) {
            angular.forEach(expenses, function(row){
                if(!row){ return; }

                row.crop_name = row.loancrop.crop.crop;
                row.acres = Number(row.loancrop.acres);
                row.arm_pa_default = Number(row.arm_adj);
                row.arm_pa = Number(row.arm);
                row.dist_pa_default = Number(row.dist_adj);
                row.dist_pa = Number(row.dist);
                row.other_pa_default = Number(row.other_adj);
                row.other_pa = Number(row.other);

                delete row.created_at;
                delete row.updated_at;
                delete row.arm_adj;
                delete row.arm;
                delete row.dist_adj;
                delete row.dist;
                delete row.other_adj;
                delete row.other;
                delete row.loancrop

                return row;

            });

            var exps = {
                byCrop: processExpByCrop(expenses),
                byCat: processExpByCat(expenses),
                totals: processExpenses(expenses)
            };

            return (exps);
        }

        function getInsurance(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/insurance')
                .then(function (rsp) {
                    var policyList = rsp.data.data;
                    //console.log('List', policyList);

                    var ins = {
                        agencies: processAgencies(policyList),
                        policies: policyList,
                        byCrop: processByCrop(policyList),
                        nonrp: processNonRPInsurance(policyList),
                        totals: processInsTotals(processByCrop(policyList))
                    };
                    //console.log('LoanInsurance: ', ins);
                    return (ins);
                });
        }

        function getLoanQuestions(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/quests')
                .then(function (response) {
                    if(response) {
                        //console.log('LoanQuestions: ', response);
                        if(response.data.data[0]) {
                            return response.data.data[0];
                        } else if(response.data.data) {
                            return response.data.data;
                        }
                    } else {
                        return {};
                    }
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

        function makeBeans(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 3){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeCane(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 9){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeCorn(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 1){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeCotton(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 6){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makePeanuts(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 8){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeRice(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 7){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeSorghum(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 4){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeSoybeans(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 2){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
        }

        function makeWheat(list) {
            var crop = _.filter(list, function(item){
                if(item.crop_id === 5){ return item; }
            });
            if(!crop.length) {
                return getEmptyCrop();
            } // end if

            var cropObj = {
                totals: processCropTotals(crop),
                byFarm: crop
            };
            return cropObj;
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
            return arrayOfFinalProduct;
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

        function processCropTotals(arrCrop) {
            var acres = 0, bkqty = 0, bkprice = 0, harvest = 0, irr = 0, mill_share = 0, ni = 0, percent_irrigated = 0, price = 0, rebate_price = 0, rebate_share = 0, prod_share = 0, value = 0, prod_yield = 0;

            angular.forEach(arrCrop, function(rows){
                bkqty += Number(rows.bkqty);
                bkprice = Number(rows.bkprice);
                harvest = Number(rows.harvest);
                irr += Number(rows.irr);
                mill_share += Number(rows.mill_share);
                ni += Number(rows.ni);
                price = Number(rows.price);
                rebate_price = Number(rows.rebate_price);
                rebate_share = Number(rows.rebate_share);
                prod_share += Number(rows.share) * (Number(rows.irr) + Number(rows.ni));
                prod_yield += Number(rows.prod_yield);
            });

            var croptotals = {
                acres: Number(irr) + Number(ni),
                bkqty: Number(bkqty),
                bkprice: Number(bkprice),
                harvest: Number(harvest),
                irr: Number(irr),
                mill_share: Number(mill_share),
                ni: Number(ni),
                percent_irrigated: 100 * (Number(irr)/(Number(irr) + Number(ni))),
                price: Number(price),
                rebate_price: Number(rebate_price),
                rebate_share: Number(rebate_share),
                share: Number(prod_share)/(Number(irr) + Number(ni)),
                prod_yield: Number(prod_yield),
                value: (((Number(prod_share)/(Number(irr) + Number(ni)))/100)*(Number(irr) + Number(ni))*Number(prod_yield) * Number(price))+(((Number(prod_share)/(Number(irr) + Number(ni)))/100) * Number(bkqty) * (Number(bkprice) - Number(price)))+((Number(irr) + Number(ni))*Number(prod_yield) * Number(harvest))
            };
            return croptotals;
        }

        function processExpByCat(xps) {
            var exp = _.chain(xps)
                .groupBy('expense')
                .value();

            var byCrop = _.map(exp, function(item, key) {
                return item.reduce(function(xp, xps) {
                    xp.id = Number(xps.id);
                    xp.loan_id = Number(xps.loan_id);
                    xp.crop_id = Number(xps.crop_id);
                    xp.crop = xps.crop_name;
                    xp.acres = Number(xps.acres);
                    xp.cat_id = Number(xps.cat_id);
                    xp.expense = xps.expense;
                    xp.arm_pa = Number(xps.arm_pa);
                    xp.arm_pa_default = Number(xps.arm_pa_default);
                    xp.dist_pa = Number(xps.dist_pa);
                    xp.dist_pa_default = Number(xps.dist_pa_default);
                    xp.other_pa = Number(xps.other_pa);
                    xp.other_pa_default = Number(xps.other_pa_default);
                    xp.per_acre = Number(xps.arm) + Number(xps.dist) + Number(xps.other);
                    xp.calc_arm = Number(xps.arm) * Number(xps.acres);
                    xp.calc_dist = Number(xps.dist) * Number(xps.acres);
                    xp.calc_other = Number(xps.other) * Number(xps.acres);
                    xp.calc_total = (Number(xps.arm) * Number(xps.acres)) + (Number(xps.dist) * Number(xps.acres)) + (Number(xps.other) * Number(xps.acres));
                    return xp;
                }, {});
            });
            return byCrop;
        }

        function processExpByCrop(xps) {
            //console.log('xps', xps);
            var exp = _.chain(xps)
                       .groupBy('crop_name')
                       .value();

            var byCrop = _.map(exp, function(item, key) {
                return item.reduce(function(xp, xps) {
                    xp.id = Number(xps.id);
                    xp.loan_id = Number(xps.loan_id);
                    xp.crop_id = Number(xps.crop_id);
                    xp.crop_name = xps.crop_name;
                    xp.acres = Number(xps.acres);
                    xp.cat_id = Number(xps.cat_id);
                    xp.expense = xps.expense;
                    xp.arm_pa = Number(xps.arm_pa);
                    xp.arm_pa_default = Number(xps.arm_pa_default);
                    xp.dist_pa = Number(xps.dist_pa);
                    xp.dist_pa_default = Number(xps.dist_pa_default);
                    xp.other_pa = Number(xps.other_pa);
                    xp.other_pa_default = Number(xps.other_pa_default);
                    xp.per_acre = Number(xps.arm) + Number(xps.dist) + Number(xps.other);
                    xp.calc_arm = Number(xps.arm) * Number(xps.acres);
                    xp.calc_dist = Number(xps.dist) * Number(xps.acres);
                    xp.calc_other = Number(xps.other) * Number(xps.acres);
                    xp.calc_total = (Number(xps.arm) * Number(xps.acres)) + (Number(xps.dist) * Number(xps.acres)) + (Number(xps.other) * Number(xps.acres));
                    return xp;
                }, {});
            });
            return byCrop;
        }

        function processExpenses(xps) {
            //return xps;
            var ARM = 0, DIST = 0, OTHER = 0, TOTAL = 0;
            angular.forEach(xps, function(row){
                ARM += Number(row.arm) * Number(row.acres);
                DIST += Number(row.dist) * Number(row.acres);
                OTHER += Number(row.other) * Number(row.acres);
                TOTAL += (Number(row.arm) * Number(row.acres)) + (Number(row.dist) * Number(row.acres)) + (Number(row.other) * Number(row.acres));
            });
            return {
                exp_arm: ARM,
                exp_dist: DIST,
                exp_other: OTHER,
                exp_total: TOTAL
            };
        }

        function processLoanCrops(crops) {
            if(!crops){ return; }
            var cropplus = _.forEach(crops, function(obj){
                obj.crop_value = AppFactory.incomeCropValue(obj);
                obj.adj_book_value = AppFactory.incomeBookValue(obj);
                obj.adj_harvest_value = AppFactory.incomeHarvestValue(obj);
                obj.crop_total = AppFactory.incomeCropTotal(obj);
                return obj;
            });
            //console.log('LoanCrops', cropplus);
            return cropplus;
        }

        function processNonRPInsurance(obj) {
            var nonrp = _.filter(obj, function(item){
                if( item.type !== 'RP'){
                    return item;
                }
            });
            if(!nonrp){
                return {
                    acres: 0,
                    value: 0
                };
            } else {
                var lone = { acres: 0, value: 0 };
                // TODO: Does nonrp have value to accumulate?
                var byLoan = _.forEach(nonrp, function(item, key) {
                    lone.acres += Number(item.acres);
                    lone.value += Number(item.value);
                });
                return lone;
            }
        }

        function processSupInsurance(obj) {
            var suppins = obj;

            var supp = {
                policies: processSupplements(suppins),
                totals: processSuppInsTotals(suppins)
            };

            return (supp);
        }

        function processInsTotals(obj) {
            var lone = { acres: 0, value: 0 };
            var byLoan = _.forEach(obj, function(item, key) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return lone;
        }

        function processOtherCollateral(obj) {
            var all = obj;

            var others = {
                sources: processOthers(all),
                totals: processOthersTotals(all)
            };

            return (others);
        }

        function processOthers(obj) {
            if(!obj){ return; }
            var others = _.forEach(obj, function(obj){
                obj.value = Number(obj.amount);
                return obj;
            });
            return others;
        }

        function processOthersTotals(obj) {
            if(!obj) { return; }
            var lone = { value: 0 };
            var bySource = _.forEach(obj, function(item, key) {
                lone.value += Number(item.amount);
            });
            return lone;
        }

        function processPriorLien(lien) {
            if(!lien){ return; }
            var lienplus = _.forEach([lien], function(obj){
                obj.lientotal = parseFloat(obj.projected_crops) + parseFloat(obj.fsa_payments) + parseFloat(obj.ins_over_discount) + parseFloat(obj.nonrp_discount) + parseFloat(obj.supplemental_coverage) + parseFloat(obj.claims) + parseFloat(obj.equipment) + parseFloat(obj.realestate) + parseFloat(obj.other);
                return obj;
            });
            return lienplus;
        }

        function processSuppInsTotals(obj) {
            if(!obj) { return; }
            var lone = { acres: 0, value: 0 };
            var byPol = _.forEach(obj, function(item, key) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return lone;
        }

        function processSupplements(obj) {
            if(!obj){ return; }
            var supplus = _.forEach(obj, function(obj){
                obj.value = Number(obj.acres) * (Number(obj.share)/100) * Number(obj.max_indemnity);
                return obj;
            });
            return supplus;
        }

        function updateLoanData(loan) {
            return $q.all({
                crops: getCrops(loan),
                expenses: getExpenses(loan.expenses),
                has_comment: getPendingComments(loan),
                insurance: getInsurance(loan),
                loancrops: processLoanCrops(loan.loancrops),
                need_vote: getPendingVotes(loan),
                othercollateral: processOtherCollateral(loan.othercollateral),
                priorlien: processPriorLien(loan.priorlien),
                quests: getLoanQuestions(loan),
                supplements: processSupInsurance(loan.suppins),
                total_ins_value: getTotalInsValue(loan)
            })
                .then(function (updatedData) {
                    angular.extend(loan, updatedData);
                    return loan;
                });
        }

        function updateLoansData(response) {
            var allLoans = response.data.data;
            //console.log('allLoans', allLoans);
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
        function getEmptyCrop() {
            return {
                totals: {
                    acres: 0,
                    bkqty: 0,
                    bkprice: 0,
                    harvest: 0,
                    irr: 0,
                    mill_share: 0,
                    ni: 0,
                    percent_irrigated: 0,
                    price: 0,
                    rebate_price: 0,
                    rebate_share: 0,
                    share: 0,
                    value: 0,
                    prod_yield: 0
                },
                byFarm: []
            };
        }
    } // end factory
})();
