(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('MatrixController', MatrixController);
    
        MatrixController.$inject = ['InitialData'];
    
        /* @ngInject */
        function MatrixController( InitialData ){
            /* jshint validthis: true */
            var vm = this;

            //vm.grid = InitialData;
            vm.roles = InitialData;

            activate();

            //////////
            function activate(){
                //initializeRoles();
                //console.log(vm.roles);
            } // end activate function

            function initializeRoles(){
                vm.roles =
                    _.chain(vm.grid)
                    .sortBy('responsibility')
                    .groupBy('group_heading')
                    .pairs()
                    .map(function(item){
                        return {
                            group_heading: item[0],
                            responsibilities: item[1],
                            isOpen: true
                        };
                    })
                    .sortBy('group_heading')
                    .value();
            } // end initializeRoles function
        } // end function
})();
