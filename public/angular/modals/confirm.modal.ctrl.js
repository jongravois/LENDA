(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ConfirmModalController', ConfirmModalController);
    
        ConfirmModalController.$inject = ['$scope', '$modalInstance', 'data'];
    
        /* @ngInject */
        function ConfirmModalController($scope, $modalInstance, data){
            /* jshint validthis: true */
            $scope.cancel = cancel;
            $scope.ok = ok;
            $scope.properties = data;

            function cancel() {
                $modalInstance.dismiss();
            }
            function ok() {
                $modalInstance.close();
            }
            
        } // end function
})();