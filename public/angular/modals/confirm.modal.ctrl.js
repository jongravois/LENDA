(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ConfirmModalController', ConfirmModalController);
    
        ConfirmModalController.$inject = ['$modalInstance', 'data'];
    
        /* @ngInject */
        function ConfirmModalController(
            $modalInstance, data
        ){
            /* jshint validthis: true */
            var vm = this;
            
            vm.cancel = cancel;
            vm.ok = ok;
            vm.properties = data;

            function cancel() {
                $modalInstance.dismiss();
            }
            function ok() {
                $modalInstance.close();
            }
            
        } // end function
})();