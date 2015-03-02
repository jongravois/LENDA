(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('ModalsService', ModalsService);

    ModalsService.$inject = ['$modal'];

    /* @ngInject */
    function ModalsService($modal) {
        var service = {
            confirm: confirm
        };

        return service;

        //////////
        function confirm(message, title, buttons, size){
            var modalInstance = $modal.open({
                templateUrl: 'angular/shared/modal.html',
                controller: 'ModalController',
                controllerAs: 'vm',
                resolve: {
                    data: {
                        message: message,
                        title: title,
                        buttons: buttons
                    }
                },
                size: size
            });

            return modalInstance.result;
        }
    }
})();