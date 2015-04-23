(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ModalController', ModalController);
    
        ModalController.$inject = ['$scope', '$upload', '$modalInstance', 'data'];
    
        /* @ngInject */
        function ModalController($scope, $upload, $modalInstance, data){
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

            //////////
            
        } // end function
})();