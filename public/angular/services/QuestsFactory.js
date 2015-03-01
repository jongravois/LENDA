(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('QuestsFactory', QuestsFactory);

    QuestsFactory.$inject = ['$http', 'API_URL'];

    /* @ngInject */
    function QuestsFactory($http, API_URL) {
        return {
            create: create,
            update: update
        };

        function create(o) {
            //return $http.post(API_URL + '/loanquestions', o);
        }

        function update(id, o) {
            return $http.put(API_URL + '/loanquestions/' + id, o);
        }
    } // end factory
})();
