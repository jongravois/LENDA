(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('LoansFactory', LoansFactory);

    LoansFactory.$inject = ['$http', '$q', '$stateParams', 'toastr', 'API_URL', 'AppFactory', 'ConditionsFactory', 'GlobalsFactory'];

    function LoansFactory($http, $q, $stateParams, toastr, API_URL, AppFactory, ConditionsFactory, GlobalsFactory) {
        return {
            calcGrade: calcGrade,
            createAffiliate: createAffilate,
            createDistributor: createDistributor,
            createFinancials: createFinancials,
            createLoanCondition: createLoanCondition,
            createReference: createReference,
            finalizeNewLoan: finalizeNewLoan,
            getAffiliates: getAffiliates,
            getAgencies: getAgencies,
            getAgency: getAgency,
            getAgents: getAgents,
            getAgent: getAgent,
            getAttachments: getAttachments,
            getComments: getComments,
            getCommittee: getCommittee,
            getConditions: getConditions,
            getCropExpenses: getCropExpenses,
            getCrops: getCrops,
            getDefaultYields: getDefaultYields,
            getDistributor: getDistributor,
            getExceptions: getExceptions,
            getFarmExpenses: getFarmExpenses,
            getFarmPractices: getFarmPractices,
            getFarms: getFarms,
            getFinancials: getFinancials,
            getGuarantors: getGuarantors,
            getGrader: getGrader,
            getInsuranceDefaults: getInsuranceDefaults,
            getInsurancePolicies: getInsurancePolicies,
            getInsuranceTotal: getInsuranceTotal,
            getLoan: getLoan,
            getLoanCounties: getLoanCounties,
            getLoanCrops: getLoanCrops,
            getLoans: getLoans,
            //getLocale: getLocale,
            getPrerequisites: getPrerequisites,
            getPriorLiens: getPriorLiens,
            getQuests: getQuests,
            getPendingComments: getPendingComments,
            getPendingVotes: getPendingVotes,
            getPracticeLabel: getPracticeLabel,
            getReferences: getReferences,
            getRequiredDocuments: getRequiredDocuments,
            getScreens: getScreens,
            getSelectedCrops: getSelectedCrops,
            getStorage: getStorage,
            getSystemics: getSystemics,
            getTotalAcres: getTotalAcres,
            getTotalExpenses: getTotalExpenses,
            insertAgent: insertAgent,
            insertFarm: insertFarm,
            insertLoan: insertLoan,
            insertLoanCrop: insertLoanCrop,
            insertPolicy: insertPolicy,
            localeFromCounty: localeFromCounty
        };

        function calcGrade(fins, grads) {
            //console.log(fins);
            //console.log(grads);
            var grade = 'F';
            _(grads).find(function (grad) {
                //debt to asset
                if (grad.debt2asset >= fins.debt2asset_ratio_adj) {
                    return false;
                }
                //current ratio
                if (grad.current_ratio <= fins.current_assets_adj) {
                    return false;
                }
                //working capital
                if (grad.working_capital <= fins.capWork_adj) {
                    return false;
                }
                //borrowing capital
                if (grad.borrowing_capacity <= fins.capBorrow_adj) {
                    return false;
                }
                //credit_score
                if (grad.credit_score <= fins.credit_score) {
                    return false;
                }
                //experience
                if (grad.years_farming < fins.experience) {
                    return false;
                }
                //cpa_financials
                if (grad.cpa_financials !== fins.cpa_financials) {
                    return false;
                }
                //bankruptcy
                if (grad.bankruptcy !== fins.bankruptcy) {
                    return false;
                }
                //judgements
                if (grad.judgements !== fins.judgements) {
                    return false;
                }

                grade = grad.grade;
                return true;
            });
            return grade;
        }

        function createAffilate(o) {
            return $http.post(API_URL + '/affiliates', o);
        }

        function createDistributor(o) {
            var dist = {
                'distributor': o.distributor,
                'name': o.distributor,
                'address': o.address,
                'city': o.city,
                'state_id': o.state_id,
                'zip': o.zip,
                'phone': o.phone,
                'email': o.email,
                'loan_id': $stateParams.loanID
            };
            var lDist = {
                'loan_id': o.loan_id,
                'contact': o.contact,
                'phone': o.contact_phone,
                'email': o.contact_email
            };
            //insert in distributor unless exists
            return $http.post(API_URL + '/distributors', dist).then(function success(response) {

                //insert into loanDistributor
                lDist.distributor_id = response.data.message;
                return $http.post(API_URL + '/loandistributor', lDist);
            });
        }

        function createFinancials(o) {
            return $http.post(API_URL + '/loanfinancials', o);
        }

        function createLoanCondition(o) {
            return $http.post(API_URL + '/loanconditions', o);
        }

        function createReference(o) {
            return $http.post(API_URL + '/references', o);
        }

        function finalizeNewLoan(o) {
            //console.log(o);

            //WE NEED A FARMER
            if (!o.farmer_id || parseInt(o.farmer_id) < 1) {
                toastr.error('You have not connected a Farmer to this loan yet. You cannot continue until you have done so. Please click the "Farmer Tab" to the left.', 'Farmer Required', {timeOut: 0});
            } // end farmer test

            //WE NEED AN APPLICANT
            if (!o.applicant_id || parseInt(o.applicant_id) < 1) {
                toastr.error('You have not connected an Applicant to this loan yet. You cannot continue until you have done so. Please click the "Applicant Tab" to the left.', 'Applicant Required', {timeOut: 0});
            } // end applicant test

            //TODO: Based on loan_type_id, test for partners, joints, corps and spouses

            //WE NEED A DISTRIBUTOR FOR SOME LOANS
            if (o.loan_type_id === '2' || o.loan_type_id === '6') {
                if (!o.distributor_id || parseInt(o.distributor_id) < 1) {
                    toastr.error('You have not connected a Distributor to this loan yet. You cannot continue until you have done so. Please click the "Distributor Tab" to the left.', 'Distributor Required', {timeOut: 0});
                }
            } // end if

            // TODO: CREATE LOAN CONDITIONS
            // conditions_pg - Personal Guarantee
            switch (parseInt(o.loan_type_id)) {
                case 1: //All In
                    ConditionsFactory.createASA(o.crop_year, o.id);
                    ConditionsFactory.createAREB(o.crop_year, o.id);
                    ConditionsFactory.createAFSA(o.crop_year, o.id);
                    ConditionsFactory.createACI(o.crop_year, o.id);
                    break;
                case 2: //Ag Input
                    //conditions_adis
                    ConditionsFactory.createASA(o.crop_year, o.id);
                    ConditionsFactory.createAREB(o.crop_year, o.id);
                    ConditionsFactory.createAFSA(o.crop_year, o.id);
                    ConditionsFactory.createACI(o.crop_year, o.id);
                    ConditionsFactory.createADIS(o.crop_year, o.id, o.distributor);
                    break;
                case 3: //Ag Pro
                    ConditionsFactory.createASA(o.crop_year, o.id);
                    ConditionsFactory.createAREB(o.crop_year, o.id);
                    ConditionsFactory.createAFSA(o.crop_year, o.id);
                    ConditionsFactory.createACI(o.crop_year, o.id);
                    break;
                case 4: //Ag Pro Fasttrack
                    ConditionsFactory.createASA(o.crop_year, o.id);
                    ConditionsFactory.createAREB(o.crop_year, o.id);
                    ConditionsFactory.createAFSA(o.crop_year, o.id);
                    ConditionsFactory.createACI(o.crop_year, o.id);
                    break;
                case 5: //Capital Bridge
                    break;
                case 6: //Ag-Vest
                    ConditionsFactory.createADIS(o.crop_year, o.id, o.distributor);
                    break;
                case 7: //Grain Storage
                    break;
            } // end switch

            //TODO: return true if all tests pass
            return false;
        }

        function getAffiliates(id) {
            return $http.get(API_URL + '/loans/' + id + '/affiliates');
        }

        function getAgencies() {
            return $http.get(API_URL + '/agencies');
        }

        function getAgency(id) {
            return $http.get(API_URL + '/agencies/' + id);
        }

        function getAgents() {
            return $http.get(API_URL + '/agents');
        }

        function getAgent(id) {
            return $http.get(API_URL + '/agents/' + id);
        }

        function getAttachments(id) {
            return $http.get(API_URL + '/loans/' + id + '/attachments');
        }

        function getComments(id) {
            return $http.get(API_URL + '/loans/' + id + '/comments');
        }

        function getCommittee(id) {
            return $http.get(API_URL + '/loans/' + id + '/committee');
        }

        function getConditions(id) {
            return $http.get(API_URL + '/loans/' + id + '/conditions');
        }

        function getCropExpenses(id) {
            return $http.get(API_URL + '/loans/' + id + '/cropexpenses');
        }

        function getCrops() {
            return $http.get(API_URL + '/crops');
        }

        function getDefaultYields(id) {
            return $http.get(API_URL + '/locations/' + id + '/yields');
        }

        function getDistributor(id) {
            return $http.get(API_URL + '/loans/' + id + '/distributor');
        }

        function getExceptions(id) {
            return $http.get(API_URL + '/loans/' + id + '/exceptions');
        }

        function getFarmExpenses(id) {
            return $http.get(API_URL + '/loans/' + id + '/farmexpenses');
        }

        function getFarmPractices(id) {
            return $http.get(API_URL + '/loans/' + id + '/farmpractices');
        }

        function getFarms(id) {
            return $http.get(API_URL + '/loans/' + id + '/farms');
        }

        function getFinancials(id) {
            return $http.get(API_URL + '/loans/' + id + '/financials');
        }

        function getGuarantors(id) {
            return $http.get(API_URL + '/loans/' + id + '/guarantors');
        }

        function getGrader(id) {
            // TODO: create loan.selectedCrops from crops and acres
            return $http.get('angular/json/grader.json');
        }

        function getInsuranceDefaults(id) {
            return $http.get(API_URL + '/counties/' + id + '/defaults');
        }

        function getInsurancePolicies(id) {
            return $http.get(API_URL + '/loans/' + id + '/insurance');
        }

        function getInsuranceTotal(id) {
            return $http.get(API_URL + '/insurance/' + id + '/value');
        }

        function getLoan(id) {
            return $http.get(API_URL + '/loans/' + id);
        }

        function getLoanCounties(id) {
            return $http.get(API_URL + '/loans/' + id + '/counties');
        }

        function getLoanCrops(id) {
            return $http.get(API_URL + '/loans/' + id + '/loancrops');
        }

        function getLoans() {
            return $http.get(API_URL + '/loans');
        }

        function getPendingComments(id) {
            return $http.get(API_URL + '/loans/' + id + '/commentstatus');
        }

        function getPendingVotes(id) {
            return $http.get(API_URL + '/loans/' + id + '/pendingvotes');
        }

        function getPracticeLabel(cropID, practiceID) {
            var crops = ['Corn', 'Soybeans', 'Sorghum', 'Wheat', 'Cotton', 'Rice', 'Peanuts', 'Sugar Cane'];
            var practs = ['IRR', 'NI', 'FACIR', 'FACNI'];
            return crops[cropID] + ' ' + practs[practiceID];
        }

        function getPrerequisites(id) {
            return $http.get(API_URL + '/loans/' + id + '/prerequisites');
        }

        function getPriorLiens(id) {
            return $http.get(API_URL + '/loans/' + id + '/priorliens');
        }

        function getQuests(id) {
            return $http.get(API_URL + '/loans/' + id + '/quests');
        }

        function getReferences(id) {
            return $http.get(API_URL + '/loans/' + id + '/references');
        }

        function getRequiredDocuments(id) {
            return $http.get(API_URL + '/requireddocuments/' + id);
        }

        function getScreens(type) {
            return $http.get(API_URL + '/loantypes/' + type + '/screens');
        }

        function getSelectedCrops(id) {
            // TODO: create loan.selectedCrops from crops and acres
            return $http.get('angular/json/selectedCrops.json');
        }

        function getStorage(id) {
            return $http.get(API_URL + '/loans/' + id + '/storage');
        }

        function getSystemics(id) {
            return $http.get(API_URL + '/loans/' + id + '/systemics');
        }

        function getTotalAcres(id) {
            return $http.get(API_URL + '/loans/' + id + '/totalacres')
                .then(function (res) {
                    return res.data;
                });
        }

        function getTotalExpenses(id) {
            //TODO: Hard Coded!!
            var totalExpenses = $q.defer();
            var total_expenses = {
                fertilizer: {
                    arm: 0,
                    dist: 72688,
                    other: 0,
                    total: 72688
                },
                seed: {
                    arm: 0,
                    dist: 0,
                    other: 74769,
                    total: 74769
                },
                fungicide: {
                    arm: 0,
                    dist: 7254,
                    other: 0,
                    total: 7254
                },
                herbicide: {
                    arm: 0,
                    dist: 23084,
                    other: 0,
                    total: 23084
                },
                insecticide: {
                    arm: 0,
                    dist: 6192,
                    other: 0,
                    total: 6192
                },
                custom: {
                    arm: 19020,
                    dist: 0,
                    other: 0,
                    total: 19020
                },
                fuel: {
                    arm: 31305,
                    dist: 0,
                    other: 0,
                    total: 31305
                },
                labor: {
                    arm: 18554,
                    dist: 0,
                    other: 0,
                    total: 18554
                },
                repairs: {
                    arm: 12751,
                    dist: 0,
                    other: 0,
                    total: 12751
                },
                insurance: {
                    arm: 0,
                    dist: 0,
                    other: 12454,
                    total: 12454
                },
                harvesting: {
                    arm: 0,
                    dist: 0,
                    other: 0,
                    total: 0
                },
                misc_acres: {
                    arm: 18554,
                    dist: 0,
                    other: 0,
                    total: 18554
                },
                living_expenses: {
                    arm: 50000,
                    dist: 0,
                    other: 0,
                    total: 50000
                },
                fees_and_others: {
                    arm: 5815,
                    dist: 0,
                    other: 0,
                    total: 5815
                },
                total_expenses: {
                    arm: 155999,
                    dist: 36530,
                    other: 87223,
                    total: 279752
                },
                estimated_interest: {
                    arm: 4360,
                    dist: 3686,
                    other: 2944,
                    total: 10990
                },
                deficit: {
                    arm: 0,
                    dist: 0,
                    other: 0,
                    total: 22718
                }
            };

            totalExpenses.resolve(total_expenses);
            return totalExpenses.promise;
        }

        function insertAgent(obj) {
            return $http.post(API_URL + '/agents', obj);
        }

        function insertFarm(obj) {
            return $http.post(API_URL + '/farms', obj);
        }

        function insertLoan(obj) {
            return $http.post(API_URL + '/loans', obj);
        }

        function insertLoanCrop(obj) {
            return $http.post(API_URL + '/loancrops', obj);
        }

        function insertPolicy(obj) {
            return $http.post(API_URL + '/insurance', obj);
        }

        function localeFromCounty(id) {
            $http.get(API_URL + '/counties/' + id + '/locale')
                .then(function success(rsp) {
                    //console.log(rsp);
                    return rsp.data[0].locale;
                });

        }

    }
})();
