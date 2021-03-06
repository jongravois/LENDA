(function(){
    'use strict';
    angular
        .module('ARM')
        .factory('LoaderService', LoaderService);

    LoaderService.$inject = ['$http', '$q', 'toastr', 'API_URL', 'GlobalsFactory', 'UsersProcessorService'];

    /* @ngInject */
    function LoaderService($http, $q, toastr, API_URL, GlobalsFactory, UsersProcessorService) {
        var publicAPI = {
            getData: getData
        };
        return publicAPI;

        //////////
        function getData() {}

        function getUsers() {
            UsersProcessorService.getUsersWithExtraData()
                .then(function success(rsp) {
                    var users = rsp;
                    $scope.users = users;
                    //console.log('Users from Main', users);
                    toastr.success('Loaded All Users', 'Success!');
                });
        }

        function getGlobals() {
            GlobalsFactory.getGlobals()
                .then(function success(rsp){
                    $scope.globals = rsp.data[0];
                    toastr.success('Loaded Global Values', 'Success!');
                });
        }

        // defaults
        // feeders
        // loans
        // farmers
        // applicants

    } // end factory
})();