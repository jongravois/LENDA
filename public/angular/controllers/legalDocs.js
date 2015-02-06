(function(){
    'use strict';
    angular
        .module('ARM')
        .controller('LegalDocsController', LegalDocsController);
    
        LegalDocsController.$inject = ['$scope'];
    
        function LegalDocsController(
            $scope
        ){} // end function
})();