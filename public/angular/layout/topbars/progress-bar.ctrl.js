(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ProgressBarCtrl', ProgressBarCtrl);
    
        ProgressBarCtrl.$inject = [''];
    
        /* @ngInject */
        function ProgressBarCtrl(){
            /* jshint validthis: true */
            var vm = this;
            
            vm.need_vote = 0;
            vm.has_comment = 0;
            vm.is_stale = 0;
            vm.has_addendum = 0;
            vm.bankruptcy = 0;
            vm.required_3party = 0;
            vm.added_land = 0;
            vm.controlled_disbursement = 0;
            vm.has_attachments = 0;
            vm.its_list = 0;
            vm.fsa_compliant = 0;
            vm.prev_lien_verified = 0;
            vm.leases_valid = 0;
            vm.bankruptcy_order_received = 0;
            vm.received_3party = 0;
            vm.recommended = 0;
            vm.arm_approved = 0;
            vm.dist_approved = 0;
            vm.loan_closed = 0;
            vm.added_land_verified = 0;
            vm.arm_ucc_received = 0;
            vm.dist_ucc_received = 0;
            vm.aoi_received = 0;
            vm.ccc_received = 0;
            vm.rebate_assignment = 0;
            vm.crop_inspection = 0;
            vm.limit_warning = 0;
            vm.reconciliation = 0;
            vm.account_classification = 0;
            vm.status_id = 0;
            
        } // end function
})();