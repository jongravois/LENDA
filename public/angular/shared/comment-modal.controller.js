(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CommentModalController', CommentModalController);

    CommentModalController.$inject = ['$modalInstance', 'data'];

    /* @ngInject */
    function CommentModalController($modalInstance, data) {
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
