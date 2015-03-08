(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('ModalService', ModalService);

    ModalService.$inject = ['$modal'];

    /* @ngInject */
    function ModalService($modal) {
        var service = {
            confirm: confirm,
            confirmDelete: confirmDelete
        };

        return service;

        //////////
        function confirm (data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/confirm-modal.html',
                controller: 'ConfirmModalController',
                controllerAs: 'vm',
                resolve: {
                    data: function(){
                        return {
                            title: data.title,
                            message: data.message,
                            buttons: data.buttons
                        };
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }

        function confirmDelete (data) {
            var modalInstance = $modal.open({
                templateUrl: 'angular/modals/confirm-delete-modal.html',
                controller: 'ConfirmModalController',
                controllerAs: 'vm',
                resolve: {
                    data: function(){
                        return {};
                    }
                },
                size: 'sm'
            });

            return modalInstance.result;
        }
    }
})();