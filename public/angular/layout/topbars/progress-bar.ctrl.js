(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ProgressBarCtrl', ProgressBarCtrl);
    
        ProgressBarCtrl.$inject = ['$scope', 'ModalService'];
    
        /* @ngInject */
        function ProgressBarCtrl($scope, ModalService){
            /* jshint validthis: true */

            $scope.showModal = function() {
                var data = {
                    title: 'Modal Test',
                    message: 'This is a test of the LENDA Modal Service. In the event of a real modal, instuctions will be provided.',
                    buttons: ['ok', 'cancel']
                };
                ModalService.confirm(data)
                    .then(function() {
                        alert('OK, then!');
                    }, function() {
                        alert('Dismissed!');
                    });
            };
            
        } // end controller
})();