(function () {
    'use strict';

    angular
        .module('ARM')
        .factory('LoansProcessor', LoansProcessor);

    LoansProcessor.$inject = ['$http', '$q', 'API_URL', 'AppFactory'];

    /* @ngInject */
    function LoansProcessor($http, $q, API_URL, AppFactory) {
        var publicAPI = {
            getLoansWithExtraData: getLoansWithExtraData
        };
        return publicAPI;
        //////////
        function getLoansWithExtraData() {
            return $http.get(API_URL + '/loans').then(updateLoansData);
        }

        function updateLoanData(loan) {
            return $q.all({
                collateral: processCollateral(loan.othercollateral),
                crops: getCrops(loan),
                disbursements: processDisbursements(loan),
                expenses: getExpenses(loan),
                fees: getFees(loan),
                has_comment: getPendingComments(loan),
                insurance: getInsurance(loan),
                loanconditions: getLoanconditions(loan),
                loancrops: processLoanCrops(loan),
                need_vote: getPendingVotes(loan),
                practices: getFarmByPractice(loan),
                priorlien: processPriorLien(loan.priorlien),
                quests: processQuests(loan.quests),
                supplements: processSupInsurance(loan.suppins)
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
        function calcFarmAcres(o) {
            //pass in the farmpractices for a single farm
            var practices = o.farmpractices;
            var irr = 0;
            var ni = 0;
            var percent_irrigated = 0;

            _.each(practices, function (practice) {
                if (practice.irrigated === '1') {
                    irr += Number(practice.acres);
                } else {
                    ni += Number(practice.acres);
                }
            });

            return {
                irr: irr,
                ni: ni,
                percent_irrigated: Number(irr) / (Number(irr) + Number(ni))
            };
        }

        function filterByCropAndPractice(col, crop, practice) {
            var results = [];
            var filtered = _.filter(col, function (row) {
                if (row.crop === crop && row.practice === practice) {
                    results.push(row);
                }
            });
            //console.log(filtered);
            return results;
        }

        function flattenExpenses(expenses) {
            var flattened = [];
            angular.forEach(expenses, function (exp) {
                var single = {
                    cat_id: Number(exp.cat_id),
                    expense: exp.expense,
                    loancrop_id: exp.loancrop_id,
                    crop: exp.loancrop.crop.crop,
                    name: exp.loancrop.crop.name,
                    acres: Number(exp.loancrop.acres),
                    arm: Number(exp.arm_adj),
                    dist: Number(exp.dist_adj),
                    other: Number(exp.other_adj),
                    per_acre: Number(exp.arm_adj) + Number(exp.dist_adj) + Number(exp.other_adj),
                    calc_arm: Number(exp.arm_adj) * Number(exp.loancrop.acres),
                    calc_dist: Number(exp.dist_adj) * Number(exp.loancrop.acres),
                    calc_other: Number(exp.other_adj) * Number(exp.loancrop.acres),
                    calc_total: (Number(exp.arm_adj) + Number(exp.dist_adj) + Number(exp.other_adj)) * Number(exp.loancrop.acres)
                };
                this.push(single);
            }, flattened);
            return flattened;
        }

        function getAcresTotal(loan) {
            return _.sumCollection(loan.loancrops, 'acres');
        }

        function getCropExpenses(crop) {
            if (crop.length < 1) {
                return;
            }
            return $http.get(API_URL + '/loans/' + crop[0].loan_id + '/expenses/' + crop[0].crop_id)
                .then(function (rsp) {
                    var dbRec = rsp.data.data;

                    var processed = dbRec;
                    //console.log('From getCropExpenses', processed);
                    return processed;
                });
        }

        function getCrops(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/farmpractices')
                .then(function (rsp) {
                    var cropsList = rsp.data.data;

                    return $q.all({
                        corn: makeCrop(1, cropsList),
                        soybeans: makeCrop(2, cropsList),
                        beansFAC: makeCrop(3, cropsList),
                        sorghum: makeCrop(4, cropsList),
                        wheat: makeCrop(5, cropsList),
                        cotton: makeCrop(6, cropsList),
                        rice: makeCrop(7, cropsList),
                        peanuts: makeCrop(8, cropsList),
                        sugarcane: makeCrop(9, cropsList),
                        other: makeCrop(10, cropsList)
                    }).then(function (allCrops) {
                        //console.log('All Crops', allCrops);
                        return {
                            corn: allCrops.corn,
                            soybeans: allCrops.soybeans,
                            beansFAC: allCrops.beansFAC,
                            sorghum: allCrops.sorghum,
                            wheat: allCrops.wheat,
                            cotton: allCrops.cotton,
                            rice: allCrops.rice,
                            peanuts: allCrops.peanuts,
                            sugarcane: allCrops.sugarcane,
                            other: allCrops.other
                        };
                    });
                });
        }

        function getFarmByPractice(loan) {
            var farms = loan.farms;
            //console.log('Farms', farms);
            var practiced = [];
            var withZero = [];
            var byPractice = [];

            _.each(farms, function (item) {
                var acreage = calcFarmAcres(item);
                //console.log('item', item);
                var splitIR = {
                    id: item.id,
                    state: item.county.states.abr,
                    county: item.county.county,
                    fsn: item.fsn,
                    owner: item.owner,
                    acres: acreage.irr,
                    practice: 'IR',
                    cash_rent: Number(item.cash_rent),
                    waived: Number(item.waived),
                    share_rent: Number(item.share_rent),
                    perm_ins: item.perm_ins,
                    when_due: item.when_due,
                    fsa_paid: Number(item.fsa_paid) * Number(item.irr) / (Number(item.irr) + Number(item.ni)),
                    cash_rent_acre_dist: 0,
                    fsa_acre: (Number(item.fsa_paid) * Number(item.ni) / (Number(item.irr) + Number(item.ni)) / item.irr),
                    practices: []
                };

                var splitNI = {
                    id: item.id,
                    state: item.county.states.abr,
                    county: item.county.county,
                    fsn: item.fsn,
                    owner: item.owner,
                    acres: acreage.ni,
                    practice: 'NI',
                    cash_rent: Number(item.cash_rent),
                    waived: Number(item.waived),
                    share_rent: Number(item.share_rent),
                    perm_ins: item.perm_ins,
                    when_due: item.when_due,
                    fsa_paid: Number(item.fsa_paid) * Number(item.ni) / (Number(item.irr) + Number(item.ni)),
                    fsa_acre: (Number(item.fsa_paid) * Number(item.ni) / (Number(item.irr) + Number(item.ni)) / item.ni),
                    practices: []
                };

                _.each(item.farmpractices, function (crop) {
                    if (crop.irrigated === '1') {
                        splitIR.practices.push(crop);
                    } else {
                        splitNI.practices.push(crop);
                    }
                });

                practiced.push(splitIR);
                practiced.push(splitNI);
            });
            //console.log('Practiced', practiced);

            _.each(practiced, function (item) {
                var processed = {
                    id: item.id,
                    state: item.state,
                    county: item.county,
                    fsn: item.fsn,
                    practice: item.practice,
                    owner: item.owner,
                    acres: item.acres,
                    share_rent: item.share_rent,
                    perm_ins: (item.perm_ins == '1' ? 'Y' : 'N'),
                    cash_rent: Number(item.cash_rent),
                    waived: Number(item.waived),
                    when_due: item.when_due,
                    fsa_paid: item.fsa_paid,
                    cash_rent_acre_ARM: (item.acres !== 0 ? (Number(item.cash_rent) - Number(item.waived)) / Number(item.acres) : 0),
                    cash_rent_acre_dist: 0,
                    cash_rent_acre_other: (item.acres !== 0 ? Number(item.waived) / Number(item.acres) : 0),
                    fsa_acre: (item.acres !== 0 ? Number(item.fsa_paid) / Number(item.acres) : 0),
                    crops: processFarmCrops(item['practices'], loan)
                };
                withZero.push(processed);
            });
            //console.log('With Zero', withZero);

            _.each(withZero, function (item) {
                if (item.acres > 0) {
                    byPractice.push(item);
                }
            });

            //console.log('By Practice', byPractice);
            return byPractice;
        }

        function getLoanconditions(loan) {
            var conds = loan['loanconditions'];
            angular.forEach(conds, function (c) {
                if (!c.action_date) {
                    c.action_date = null;
                } else {
                    c.action_date = moment(c.action_date).format('L');
                }
            });
            return conds;
        }

        function getPendingComments(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/commentstatus')
                .then(function (response) {
                    //console.log(response);
                    if (response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }
                });
        }

        function getPendingVotes(loan) {
            return $http.get(API_URL + '/loans/' + loan.id + '/pendingvotes')
                .then(function (response) {
                    if (response.data.data) {
                        return (response.data.data.length !== 0);
                    } else {
                        return 0;
                    }
                });
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

        function getExpenses(loan) {
            var expenses = loan.expenses;
            //var expenses = loan.expenses.byEntry;

            var exps = {
                byCat: processExpsByCat(flattenExpenses(expenses)),
                byCrop: processExpsByCrop(flattenExpenses(expenses)),
                byEntry: flattenExpenses(expenses),
                totals: processExpsTotals(flattenExpenses(expenses))
            };

            //console.log('Expenses: ', exps);
            return (exps);
        }

        function getFees(loan) {
        }

        function getInsurance(loan) {
            var policyList = loan.inspols;
            //console.log('Fins', policyList);

            var ins = {
                agencies: processAgencies(policyList),
                byCrop: processInsByCrop(loan),
                database: processForInsDB(policyList),
                //not Working
                nonrp: processNonRPInsurance(policyList),
                policies: policyList,
                //not Working
                totals: processInsTotals(processInsByCrop(policyList))
            };
            //console.log('LoanInsurance: ', ins);
            return (ins);

        }

        function makeCrop(id, list) {
            var crop_id = Number(id);
            var crop = _.filter(list, function (item) {
                if (item.crop_id === crop_id) {
                    return item;
                }
            });
            if (!crop.length) {
                return getEmptyCrop();
            } // end if

            return getCropExpenses(crop).then(function (exp) {
                //console.log('fromMakeCrop', exp);

                var expenses = _.chain(exp)
                    .groupBy('expense')
                    .value();

                //console.log('fromMakeCrop', expenses);

                var cropObj = {
                    totals: processCropTotals(crop),
                    byFarm: crop,
                    expenses: expenses
                };
                return cropObj;
            });
        }

        function makeFarmPractice(obj, loan) {
            //console.log('obj', obj);
            //console.log('loan', loan);
            var xps = [], feeARM = 0;
            _.find(loan.expenses, function(i){
                if(obj.crop_id === i.loancrop_id){
                    xps.push(i);
                }
            });
            var exp_arm = _.sumCollection(xps, 'arm_adj');
            var exp_dist = _.sumCollection(xps, 'dist_adj');
            var exp_other = _.sumCollection(xps, 'other_adj');
            //console.log('expenses', xps);

            var exps = {
                arm: exp_arm,
                dist: exp_dist,
                other: exp_other
            };
            return {
                expenses: exps,
                c_acres: obj.acres,
                c_share_rent: obj.share_rent,
                c_aph: obj.aph,
                c_ins_share: obj.ins_share,
                c_ins_price: obj.ins_price,
                c_ins_level: obj.ins_level,
                c_ins_premium: obj.ins_premium,
                c_ins_type: obj.ins_type,
                c_prod_yield: obj.prod_yield, //calc
                c_prod_share: obj.prod_share,
                c_prod_price: obj.prod_price,
                c_var_harv: obj.harvest,
                c_rebate: obj.rebates,
                c_crop_disc: obj.crop_disc,
                c_fsa_disc: obj.fsa_disc,
                c_cropins_disc: obj.cropins_disc,
                c_nonrp_disc: obj.nonrp_disc,
                c_sco_disc: obj.sco_disc
            };
        }

        function makePractice(crop_id) {
            return {
                expenses: {
                    arm: 0,
                    dist: 0,
                    other: 0
                },
                c_crop_id: crop_id,
                c_acres: 0,
                c_aph: 0,
                c_arm_fee: 0,
                c_budget_arm: 0,
                c_budget_dist: 0,
                c_budget_other: 0,
                c_cf: 0,
                c_commit_arm: 0,
                c_commit_dist: 0,
                c_crop_disc: 0,
                c_cropins_disc: 0,
                c_disc_collateral: 0,
                c_disc_crop: 0,
                c_disc_fsa: 0,
                c_disc_ins: 0,
                c_disc_sco: 0,
                c_fsa_disc: 0,
                c_ins_disc_crop: 0,
                c_ins_guarantee: 0,
                c_ins_level: 0,
                c_ins_premium: 0,
                c_ins_price: 0,
                c_ins_share: 0,
                c_ins_type: "RP",
                c_ins_value: 0,
                c_interest_arm: 0,
                c_interest_dist: 0,
                c_nonrp_disc: 0,
                c_prod_price: 0,
                c_prod_rev: 0,
                c_prod_rev_adj: 0,
                c_prod_share: 0,
                c_prod_yield: 0,
                c_rebate: 0,
                c_rm: 0,
                c_sco_disc: 0,
                c_sco_max: 0,
                c_share_rent: 0,
                c_var_harv: 0
            };
        }

        function processAgencies(policies) {
            var result = [];
            var exists = {};
            var arrayOfFinalProduct = [];
            var agentExists = {};

            var firstPass = _.forEach(policies, function (policy) {
                if (!exists[policy.agent_id]) {
                    result.push(policy);
                    exists[policy.agent_id] = true;
                }
            });

            var secondPass = _.forEach(result, function (policy) {
                var idealProduct = {};
                var allreadyHappend = _.find(arrayOfFinalProduct, {'id': policy.agency_id});
                if (!_.isUndefined(allreadyHappend)) {
                    allreadyHappend.agents.push({
                        id: policy.agent_id,
                        agent: policy.agent,
                        agent_email: policy.agent_email,
                        agent_phone: policy.agent_phone
                    });
                } else if (!agentExists[policy.agent_id]) {
                    idealProduct.agents = [];
                    idealProduct.id = policy.agency_id;
                    idealProduct.agency = policy.agency;
                    idealProduct.agency_address = policy.agency_address;
                    idealProduct.agency_city = policy.agency_city;
                    idealProduct.agency_state = policy.agency_state;
                    idealProduct.agency_zip = policy.agency_zip;
                    idealProduct.agency_email = policy.agency_email;
                    idealProduct.agency_phone = policy.agency_phone;
                    idealProduct.agents.push({
                        id: policy.agent_id,
                        agent: policy.agent,
                        agent_email: policy.agent_email,
                        agent_phone: policy.agent_phone
                    });
                    arrayOfFinalProduct.push(idealProduct);
                    agentExists[policy.agent_id] = true;
                }
            });
            return arrayOfFinalProduct;
        }

        function processCollateral(obj) {
            var all = _.chain(obj).groupBy('type').value();
            return all;
        }

        function processCropTotals(arrCrop) {
            var tstActive = false;
            var acres = 0, is_active = false, bkqty = 0, bkprice = 0, harvest = 0, mill_share = 0, percent_irrigated = 0, price = 0, rebate_price = 0, rebate_share = 0, prod_share = 0, value = 0, prod_yield = 0;

            angular.forEach(arrCrop, function (rows) {
                bkqty += Number(rows.bkqty);
                bkprice = Number(rows.bkprice);
                harvest = Number(rows.harvest);
                acres += Number(rows.acres);
                mill_share += Number(rows.mill_share);
                price = Number(rows.price);
                rebate_price = Number(rows.rebate_price);
                rebate_share = Number(rows.rebate_share);
                prod_share += Number(rows.share) * (Number(rows.irr) + Number(rows.ni));
                prod_yield += Number(rows.prod_yield);
            });

            if ((Number(acres)) > 0) {
                tstActive = true;
            } else {
                tstActive = false;
            } // end if

            var croptotals = {
                acres: Number(acres),
                bkqty: Number(bkqty),
                bkprice: Number(bkprice),
                harvest: Number(harvest),
                mill_share: Number(mill_share),
                //percent_irrigated: 100 * (Number(irr) / (Number(irr) + Number(ni))),
                price: Number(price),
                rebate_price: Number(rebate_price),
                rebate_share: Number(rebate_share),
                share: Number(prod_share) / (Number(acres)),
                prod_yield: Number(prod_yield),
                value: (((Number(prod_share) / (Number(acres))) / 100) * (Number(acres)) * Number(prod_yield) * Number(price)) + (((Number(prod_share) / (Number(acres))) / 100) * Number(bkqty) * (Number(bkprice) - Number(price))) + ((Number(acres)) * Number(prod_yield) * Number(harvest)),
                is_active: tstActive
            };
            return croptotals;
        }

        function processExpsByCat(expenses) {
            var grped = _.chain(expenses).groupBy('expense').value();
            var cats = _.uniq(_.pluck(expenses, 'expense'));
            //corn.arm*corn.acres + bean.arm*bean.acres etc
            var totsByCat = [];
            angular.forEach(cats, function (cat) {
                if (!grped[cat]) {
                    totsByCat.push([]);
                } else {
                    var col = grped[cat];
                    //console.log(col);
                    var colTots = {
                        cat_id: _.pluckuniq(col, 'cat_id'),
                        expense: _.pluckuniq(col, 'expense'),
                        acre_dist: _.sumCollection(col, 'dist'),
                        acre_other: _.sumCollection(col, 'other'),
                        acre_total: _.sumCollection(col, 'per_acre'),
                        calc_arm: _.sumCollection(col, 'calc_arm'),
                        calc_dist: _.sumCollection(col, 'calc_dist'),
                        calc_other: _.sumCollection(col, 'calc_other'),
                        calc_total: _.sumCollection(col, 'calc_total')
                    };
                    totsByCat.push(colTots);
                }
            });
            return totsByCat;
        }

        function processDisbursements(loan) {
            var dsp = loan.disbursements;
            angular.forEach(dsp, function (i) {
                i.arm_budget = Number(i.arm_budget);
                i.requested = Number(i.requested);
                i.spent = Number(i.spent);
                i.remaining = Number(i.arm_budget) - Number(i.spent);
            });
            return dsp;
        }

        function processExpsByCrop(expenses) {
            var grped = _.chain(expenses).groupBy('crop').value();

            var byCrop = [];
            angular.forEach(grped, function (crop) {
                var byExp = [];
                angular.forEach(crop, function (exp) {
                    this.push(exp);
                }, byExp);
                this.push(byExp);
            }, byCrop);
            return byCrop;
        }

        function processExpsTotals(expenses) {
            return {
                byCat: processExpsTotalsByCat(expenses),
                byCrop: processExpsTotalsByCrop(expenses),
                byLoan: processExpsTotalsByLoan(expenses)
            };
        }

        function processExpsTotalsByCat(expenses) {
            var grped = _.chain(expenses).groupBy('expense').value();
            var cats = _.uniq(_.pluck(expenses, 'expense'));

            var totsByCat = [];
            angular.forEach(cats, function (cat) {
                if (!grped[cat]) {
                    totsByCat.push([
                        {
                            arm: 0,
                            dist: 0,
                            other: 0,
                            total: 0
                        }
                    ]);
                } else {
                    var col = grped[cat];
                    //console.log(col);
                    var colTots = [
                        {
                            arm: _.sumCollection(col, 'calc_arm'),
                            dist: _.sumCollection(col, 'calc_dist'),
                            other: _.sumCollection(col, 'calc_other'),
                            total: _.sumCollection(col, 'calc_total')
                        }
                    ];
                    totsByCat.push(colTots);
                }
            });

            return totsByCat;
        }

        function processExpsTotalsByCrop(expenses) {
            var grped = _.chain(expenses).groupBy('crop').value();
            var crops = AppFactory.getAllCrops();

            var totsByCrop = [];
            angular.forEach(crops, function (crop) {
                if (!grped[crop]) {
                    totsByCrop.push([
                        {
                            acre_arm: 0,
                            acre_dist: 0,
                            acre_other: 0,
                            acre_total: 0,
                            calc_arm: 0,
                            calc_dist: 0,
                            calc_other: 0,
                            calc_total: 0
                        }
                    ]);
                } else {
                    var col = grped[crop];
                    //console.log(col);
                    var colTots = [
                        {
                            acre_arm: _.sumCollection(col, 'arm'),
                            acre_dist: _.sumCollection(col, 'dist'),
                            acre_other: _.sumCollection(col, 'other'),
                            acre_total: _.sumCollection(col, 'per_acre'),
                            calc_arm: _.sumCollection(col, 'calc_arm'),
                            calc_dist: _.sumCollection(col, 'calc_dist'),
                            calc_other: _.sumCollection(col, 'calc_other'),
                            calc_total: _.sumCollection(col, 'calc_total')
                        }
                    ];
                    totsByCrop.push(colTots);
                }
            });
            return totsByCrop;
        }

        function processExpsTotalsByLoan(expenses) {
            //console.log(expenses);
            return {
                arm: _.sumCollection(expenses, 'calc_arm'),
                dist: _.sumCollection(expenses, 'calc_dist'),
                other: _.sumCollection(expenses, 'calc_other'),
                total: _.sumCollection(expenses, 'calc_total')
            };
        }

        function processFarmCrops(cps, loan) {
            //console.log('cps', cps);
            var returner = [], findcorn = [], findsoybeans = [], findbeansFAC = [], findsorghum = [], findwheat = [], findcotton = [], findrice = [], findpeanuts = [], findsugarcane = [], findother = [], corn = [], soybeans = [], beansFAC = [], sorghum = [], wheat = [], cotton = [], rice = [], peanuts = [], sugarcane = [], other = [];

            findcorn = _.find(cps, function (i) {
                return i.crop_id == '1';
            });
            if (!findcorn) {
                corn = makePractice(1, loan);
            } else {
                corn = makeFarmPractice(findcorn, loan);
            }
            returner.push(corn);

            findsoybeans = _.find(cps, function (i) {
                return i.crop_id == '2';
            });
            if (!findsoybeans) {
                soybeans = makePractice(2, loan);
            } else {
                soybeans = makeFarmPractice(findsoybeans, loan);
            }
            returner.push(soybeans);

            findbeansFAC = _.find(cps, function (i) {
                return i.crop_id == '3';
            });
            if (!findbeansFAC) {
                beansFAC = makePractice(3, loan);
            } else {
                beansFAC = makeFarmPractice(findbeansFAC, loan);
            }
            returner.push(beansFAC);

            findsorghum = _.find(cps, function (i) {
                return i.crop_id == '3';
            });
            if (!findsorghum) {
                sorghum = makePractice(3, loan);
            } else {
                sorghum = makeFarmPractice(findsorghum, loan);
            }
            returner.push(sorghum);

            findwheat = _.find(cps, function (i) {
                return i.crop_id == '4';
            });
            if (!findwheat) {
                wheat = makePractice(4, loan);
            } else {
                wheat = makeFarmPractice(findwheat, loan);
            }
            returner.push(wheat);

            findcotton = _.find(cps, function (i) {
                return i.crop_id == '5';
            });
            if (!findcotton) {
                cotton = makePractice(5, loan);
            } else {
                cotton = makeFarmPractice(findcotton, loan);
            }
            returner.push(cotton);

            findrice = _.find(cps, function (i) {
                return i.crop_id == '6';
            });
            if (!findrice) {
                rice = makePractice(6, loan);
            } else {
                rice = makeFarmPractice(findrice, loan);
            }
            returner.push(rice);

            findpeanuts = _.find(cps, function (i) {
                return i.crop_id == '7';
            });
            if (!findpeanuts) {
                peanuts = makePractice(7, loan);
            } else {
                peanuts = makeFarmPractice(findpeanuts, loan);
            }
            returner.push(peanuts);

            findsugarcane = _.find(cps, function (i) {
                return i.crop_id == '8';
            });
            if (!findsugarcane) {
                sugarcane = makePractice(8, loan);
            } else {
                sugarcane = makeFarmPractice(findsugarcane, loan);
            }
            returner.push(sugarcane);

            findother = _.find(cps, function (i) {
                return i.crop_id == '9';
            });
            if (!findother) {
                other = makePractice(9, loan);
            } else {
                other = makeFarmPractice(findother, loan);
            }
            returner.push(other);

            return returner;
        }

        function processForInsDB(policies) {
            var groupByPractice = _.partial(_.ary(_.groupBy, 2), _, 'practice');

            var mapped = _(policies).chain()
                .groupBy('crop')
                .mapValues(groupByPractice);

            var reduced = _(mapped).chain()
                .map(function (cropGroup) {
                    return _.mapValues(cropGroup, function (v) {
                        var initial = _(v).chain().first().clone().value();
                        return _.reduce(_.rest(v), function (result, n) {
                            result.acres += n.acres;
                            return result;
                        }, initial);
                    });
                });

            var arrRedux = [];
            var redux = reduced.value();
            _.each(redux, function (col) {
                _.each(col, function (row) {
                    arrRedux.push(row);
                });
            });
            return arrRedux;
        }

        function processInsByCrop(loan) {
            var policies = loan.inspols;

            var grped = _.chain(policies).groupBy('loancrop_id').value();
            //console.log('grped', grped);
            var byCrop = [];

            angular.forEach(grped, function (row) {
                var calcer = {
                    level: _.pluckuniq(row, 'level'),
                    price: _.pluckuniq(row, 'price'),
                    yield: _.weighted(row, 'yield', 'acres'),
                    premium: _.pluckuniq(row, 'premium'),
                    share: _.weighted(row, 'share', 'acres'),
                    acres: _.sumCollection(row, 'acres'),
                    disc_prod_percent: loan.fins.disc_prod_percent
                };

                var crop = {
                    loancrop_id: _.pluckuniq(row, 'loancrop_id'),
                    crop: _.pluckuniq(row, 'crop'),
                    name: _.pluckuniq(row, 'name'),
                    type: _.pluckuniq(row, 'type'),
                    option: _.pluckuniq(row, 'option'),
                    price: _.pluckuniq(row, 'price'),
                    premium: _.pluckuniq(row, 'premium'),
                    acres: _.sumCollection(row, 'acres'),
                    share: _.weighted(row, 'share', 'acres'),
                    level: _.pluckuniq(row, 'level'),
                    ins_yield: _.weighted(row, 'yield', 'acres'),
                    proj_crop_discount: Number(loan.fins.disc_prod_percent),
                    guarantee: Number(AppFactory.calcInsuranceGuaranty(calcer)),
                    value: Number(AppFactory.calcCropValue(calcer))
                };
                this.push(crop);
            }, byCrop);
            return byCrop;
        }

        function processInsPol(arr) {
            if (arr.length < 1) {
                return false;
            }
            return {
                crop: arr[0].crop,
                practice: arr[0].practice,
                acres: _.sum(arr, 'acres'),
                premium: _.sum(arr, 'premium')
            };
        } // end function

        function processInsTotals(obj) {
            var lone = {acres: 0, value: 0};
            var byLoan = _.forEach(obj, function (item) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return byLoan;
        }

        function processLoanCrops(loan) {
            var crops = loan.loancrops;
            if (!crops) {
                return;
            }

            var cropplus = _.forEach(crops, function (obj) {
                obj.crop_value = AppFactory.incomeCropValue(obj);
                obj.adj_book_value = AppFactory.incomeBookValue(obj);
                obj.adj_harvest_value = AppFactory.incomeHarvestValue(obj);
                obj.adj_total_value = Number(obj.adj_book_value) + Number(obj.adj_harvest_value);
                obj.crop_total = AppFactory.incomeCropTotal(obj);
                obj.ins_value = 0;
                obj.ins_disc = 0;
                obj.ins_over_disc = 0;
                obj.non_rp = 0;
                obj.break_even = (AppFactory.calcBreakEvenPercent(loan) / 100) * Number(obj.prod_yield);
                return obj;
            });
            //console.log('LoanCrops', cropplus);
            return cropplus;
        }

        function processNonRPInsurance(obj) {
            var nonrp = _.filter(obj, function (item) {
                if (item.type !== 'RP') {
                    return item;
                }
            });
            if (!nonrp) {
                return {
                    acres: 0,
                    value: 0
                };
            } else {
                var lone = {acres: 0, value: 0};
                // TODO: Does nonrp have value to accumulate?
                var byLoan = _.forEach(nonrp, function (item, key) {
                    lone.acres += Number(item.acres);
                    lone.value += Number(item.value);
                });
                return lone;
            }
        }

        function processOthers(obj) {
            if (!obj) {
                return;
            }
            var others = _.forEach(obj, function (obj) {
                obj.value = Number(obj.amount);
                return obj;
            });
            return others;
        }

        function processOthersTotals(obj) {
            if (!obj) {
                return;
            }
            var lone = {value: 0};
            var bySource = _.forEach(obj, function (item, key) {
                lone.value += Number(item.amount);
            });
            return lone;
        }

        function processPriorLien(liens) {
            if (!liens) {
                return [];
            }
            var lienplus = _.map(liens, function (item) {
                return _.extend({
                    lientotal: Number(item.projected_crops) + Number(item.fsa_payments) + Number(item.ins_over_discount) + Number(item.nonrp_discount) + Number(item.equipment) + Number(item.realestate) + Number(item.other)
                }, item);
            });
            return {
                liens: lienplus,
                totals: processPriorLiens(lienplus)
            };
        }

        function processPriorLiens(liens) {
            return {
                lienholder: 'Total',
                projected_crops: _.sumCollection(liens, 'projected_crops'),
                fsa_payments: _.sumCollection(liens, 'fsa_payments'),
                ins_over_discount: _.sumCollection(liens, 'ins_over_discount'),
                nonrp_discount: _.sumCollection(liens, 'nonrp_discount'),
                equipment: _.sumCollection(liens, 'equipment'),
                realestate: _.sumCollection(liens, 'realestate'),
                other: _.sumCollection(liens, 'other'),
                supplemental_coverage: _.sumCollection(liens, 'supplemental_coverage'),
                lientotal: _.sumCollection(liens, 'lientotal')
            };
        }

        function processQuests(quests) {
            quests.plant_own = !!quests.plant_own;
            quests.harvest_own = !!quests.harvest_own;
            quests.equip_obligations = !!quests.equip_obligations;
            quests.other_cash = !!quests.other_cash;
            quests.fsa_good = !!quests.fsa_good;
            quests.fsa_direct_pay = !!quests.fsa_direct_pay;
            quests.insInPlace = !!quests.insInPlace;
            quests.fci_good = !!quests.fci_good;
            quests.premiums_past = !!quests.premiums_past;
            quests.legal_defendant = !!quests.legal_defendant;
            quests.judgements = !!quests.judgements;
            quests.bankruptcy = !!quests.bankruptcy;
            quests.liens = !!quests.liens;
            quests.future_liabilities = !!quests.future_liabilities;
            quests.credit_3p_available = !!quests.credit_3p_available;
            quests.affiliates = !!quests.affiliates;

            return quests;
        }

        function processSupInsurance(obj) {
            var suppins = obj;

            var supp = {
                policies: processSupplements(suppins),
                totals: processSuppInsTotals(suppins)
            };

            return (supp);
        }

        function processSuppInsTotals(obj) {
            if (!obj) {
                return;
            }
            var lone = {acres: 0, value: 0};
            var byPol = _.forEach(obj, function (item, key) {
                lone.acres += Number(item.acres);
                lone.value += Number(item.value);
            });
            return lone;
        }

        function processSupplements(obj) {
            if (!obj) {
                return;
            }
            var supplus = _.forEach(obj, function (obj) {
                obj.value = Number(obj.acres) * (Number(obj.share) / 100) * Number(obj.max_indemnity);
                return obj;
            });
            return supplus;
        }

        function totalCropExpenses(exps) {
            //console.log('totalCropExpenses', exps);
            var armtotal = _.reduce(exps, function (sum, obj) {
                return sum + Number(obj.arm);
            }, 0);
            var disttotal = _.reduce(exps, function (sum, obj) {
                return sum + Number(obj.dist);
            }, 0);
            var othertotal = _.reduce(exps, function (sum, obj) {
                return sum + Number(obj.other);
            }, 0);
            var totaltotal = Number(armtotal) + Number(disttotal) + Number(othertotal);

            var processed = {
                arm: armtotal,
                dist: disttotal,
                other: othertotal,
                total: totaltotal
            };
            return processed;
        }
    } // end factory

})();
