(function(){
  'use strict';
  angular
      .module('ARM')
      .controller('EditQuestsController', EditQuestsController);

      EditQuestsController.$inject = ['$scope'];

      function EditQuestsController(
          $scope
      ){
        $scope.updateQuestions = function(){
          console.log($scope.quests);
        }
      } // end function
})();