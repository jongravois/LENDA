(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('OptimizerFactory', OptimizerFactory);

    OptimizerFactory.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function OptimizerFactory($http, API_URL) {
        var publicAPI = {
            makeFarmPractice: makeFarmPractice
        };
        return publicAPI;

        //////////
        function makeFarmPractice(cropID, practice, loan) {
            //console.log('practice', practice);
            var xps = [], feeARM = 0;
            _.find(loan.expenses, function(i){
                if(cropID === i.loancrop_id){
                    xps.push(i);
                }
            });
            var exp_arm = _.sumCollection(xps, 'arm_adj');
            var exp_dist = _.sumCollection(xps, 'dist_adj');
            var exp_other = _.sumCollection(xps, 'other_adj');

            var exps = {
                arm: exp_arm,
                dist: exp_dist,
                other: exp_other
            };
            //console.log('expenses', exps);

            if(practice.length > 0){
                if(practice[0]){
                    practice = practice[0];
                }
                //console.log('Practice', practice);
                return {
                    expenses: exps,
                    c_acres: practice.acres,
                    c_share_rent: practice.share_rent,
                    c_aph: practice.aph,
                    c_ins_share: practice.ins_share,
                    c_ins_price: practice.ins_price,
                    c_ins_level: practice.ins_level,
                    c_ins_premium: practice.ins_premium,
                    c_ins_type: practice.ins_type,
                    c_prod_yield: practice.prod_yield,
                    c_prod_share: practice.prod_share,
                    c_prod_price: practice.prod_price,
                    c_var_harv: practice.harvest,
                    c_rebate: practice.rebates,
                    c_crop_disc: practice.crop_disc,
                    c_fsa_disc: practice.fsa_disc,
                    c_cropins_disc: practice.cropins_disc,
                    c_nonrp_disc: practice.nonrp_disc,
                    c_sco_disc: practice.sco_disc
                };
            } else {
                return {
                    expenses: exps,
                    c_acres: 0,
                    c_share_rent: 0,
                    c_aph: 0,
                    c_ins_share: 0,
                    c_ins_price: 0,
                    c_ins_level: 0,
                    c_ins_premium: 0,
                    c_ins_type: '',
                    c_prod_yield: 0,
                    c_prod_share: 0,
                    c_prod_price: 0,
                    c_var_harv: 0,
                    c_rebate: 0,
                    c_crop_disc: 0,
                    c_fsa_disc: 0,
                    c_cropins_disc: 0,
                    c_nonrp_disc: 0,
                    c_sco_disc: 0
                };
            }
        }


    } // end factory
})();