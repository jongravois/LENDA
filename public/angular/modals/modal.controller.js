(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$modalInstance', 'data'];

    /* @ngInject */
    function ModalController($modalInstance, data) {
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
