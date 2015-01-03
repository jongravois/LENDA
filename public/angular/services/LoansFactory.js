(function(){
  'use strict';
  angular.module('ARM')
    .factory('LoansFactory', function LoansFactory(
      $http,
      $q,
      $stateParams,
      API_URL,
      AppFactory,
      GlobalsFactory
    ){
      return {
        createAffiliate: createAffilate,
        createDistributor: createDistributor,
        createFinancials: createFinancials,
        createLoan: createLoan,
        createReference: createReference,
        getAffiliates: getAffiliates,
        getComments: getComments,
        getCommittee: getCommittee,
        getCropExpenses: getCropExpenses,
        getCrops: getCrops,
        getDistributor: getDistributor,
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
        getScreens: getScreens,
        getSelectedCrops: getSelectedCrops,
        getSystemics: getSystemics,
        getTotalAcres: getTotalAcres,
        insertAgent: insertAgent,
        insertFarm: insertFarm,
        insertLoan: insertLoan,
        insertLoanCrop: insertLoanCrop,
        insertPolicy: insertPolicy,
        localeFromCounty: localeFromCounty
      };

      function createAffilate(o){
        return $http.post(API_URL + '/affiliates', o);
      }

      function createDistributor(o){
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
        return $http.post(API_URL + '/distributors', dist).then(function success(response){

          //insert into loanDistributor
          lDist.distributor_id = response.data.message;
          return $http.post(API_URL + '/loandistributor', lDist);
        });;
      }

      function createFinancials(o){
        return $http.post(API_URL + '/loanfinancials', o);
      }

      function createLoan(type){
        var globals = {};
        var obj = {};

        GlobalsFactory.getGlobals().then(function success(response){
          globals = response.data.data[0];

          obj = {
            loan_type_id: type,
            crop_year: globals.crop_year
          };
        });

        return obj;
      }

      function createReference(o){
        return $http.post(API_URL + '/references', o);
      }

      function getAffiliates(id){
        return $http.get(API_URL + '/loans/' + id + '/affiliates');
      }

      function getComments(id){
        return $http.get(API_URL + '/loans/' + id + '/comments');
      }

      function getCommittee(id){
        return $http.get(API_URL + '/loans/' + id + '/committee');
      }

      function getCropExpenses(id){
        return $http.get(API_URL + '/loans/' + id + '/cropexpenses');
      }

      function getCrops(){
        return $http.get(API_URL + '/crops');
      }

      function getDistributor(id){
        return $http.get(API_URL + '/loans/' + id + '/distributor');
      }

      function getFarmExpenses(id){
        return $http.get(API_URL + '/loans/' + id + '/farmexpenses');
      }

      function getFarmPractices(id){
        return $http.get(API_URL + '/loans/' + id + '/farmpractices');
      }

      function getFarms(id){
        return $http.get(API_URL + '/loans/' + id + '/farms');
      }

      function getFinancials(id){
        return $http.get(API_URL + '/loans/' + id + '/financials');
      }

      function getGuarantors(id){
        return $http.get(API_URL + '/loans/' + id + '/guarantors');
      }

      function getGrader(id){
        // TODO: create loan.selectedCrops from crops and acres
        return $http.get('angular/json/grader.json');
      }

      function getInsuranceDefaults(id){
        return $http.get(API_URL + '/counties/' + id + '/defaults');
      }

      function getInsurancePolicies(id){
        return $http.get(API_URL + '/loans/' + id + '/insurance');
      }

      function getInsuranceTotal(id){
        return $http.get(API_URL + '/insurance/' + id + '/value');
      }

      function getLoan(id){
        return $http.get(API_URL + '/loans/' + id);
      }

      function getLoanCounties(id){
        return $http.get(API_URL + '/loans/' + id + '/counties');
      }

      function getLoanCrops(id){
        return $http.get(API_URL + '/loans/' + id + '/loancrops');
      }

      function getLoans(){
        return $http.get(API_URL + '/loans');
      }

      function getPendingComments(id){
        return $http.get(API_URL + '/loans/' + id + '/commentstatus');
      }

      function getPendingVotes(id){
        return $http.get(API_URL + '/loans/' + id + '/pendingvotes');
      }

      function getPracticeLabel(cropID, practiceID){
        var crops = ['Corn', 'Soybeans', 'Sorghum', 'Wheat', 'Cotton', 'Rice', 'Peanuts', 'Sugar Cane'];
        var practs = ['IRR', 'NI', 'FACIR', 'FACNI'];
        return crops[cropID] + ' ' + practs[practiceID];
      }

      function getPrerequisites(id){
        return $http.get(API_URL + '/loans/' + id + '/prerequisites');
      }

      function getPriorLiens(id){
        return $http.get(API_URL + '/loans/' + id + '/priorliens');
      }

      function getQuests(id){
        return $http.get(API_URL + '/loans/' + id + '/quests');
      }

      function getReferences(id){
        return $http.get(API_URL + '/loans/' + id + '/references');
      }

      function getScreens(type){
        return $http.get(API_URL + '/loantypes/' + type + '/screens');
      }

      function getSelectedCrops(id){
        // TODO: create loan.selectedCrops from crops and acres
        return $http.get('angular/json/selectedCrops.json');
      }

      function getSystemics(id){
        return $http.get(API_URL + '/loans/' + id + '/systemics');
      }

      function getTotalAcres(id){
        return $http.get(API_URL + '/loans/' + id + '/totalacres')
          .then(function(res){
            return res.data;
          });
      }

      function insertAgent(obj){
        return $http.post(API_URL + '/agents', obj);
      }

      function insertFarm(obj){
        return $http.post(API_URL + '/farms', obj);
      }

      function insertLoan(obj){
        return $http.post(API_URL + '/loans', obj);
      }

      function insertLoanCrop(obj){
        return $http.post(API_URL + '/loancrops', obj);
      }

      function insertPolicy(obj){
        return $http.post(API_URL + '/insurance', obj);
      }

      function localeFromCounty(id){
        $http.get(API_URL + '/counties/' + id + '/locale')
          .then(function success(rsp){
            //console.log(rsp);
            return rsp.data[0].locale;
          });

      }

    });
})();