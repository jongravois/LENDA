(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('ClassroomController', ClassroomController);

        ClassroomController.$inject = [''];

        /* @ngInject */
        function ClassroomController(

        ){
            /* jshint validthis: true */
            var vm = this;

            vm.activate = activate();

            activate();

            //////////
            function activate(){}

        } // end function
})();