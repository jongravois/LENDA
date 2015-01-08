(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('SboxController', SboxController);

      SboxController.$inject = ['$scope', '$state', '$stateParams', 'toastr'];

      function SboxController(
          $scope, $state, $stateParams, toastr
      ){

      } // end function
})();