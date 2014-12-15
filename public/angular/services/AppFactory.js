(function(){
    'use strict';
  angular.module('ARM')
    .factory('AppFactory', function GlobalsFactory(
      $http,
      API_URL,
      $state
    ){
      return {
        diffInDates: diffInDates,
        getDefaultDueDate: getDefaultDueDate,
        moveToNextNewLoanScreen: moveToNextNewLoanScreen,
        patchIt: patchIt
      };

      function diffInDates(first,second){
        var intFirst = parseInt(first);
        var intSecond = parseInt(second);

        if(intFirst < intSecond){
          return intSecond - intFirst;
        } else {
          return intFirst - intSecond;
        } // end if
      }
      function getDefaultDueDate(type, year){
        switch(type){
          case '5':
          case '6':
          case '7':
            return '3/15/' + year;
            break;
          default:
            return '12/15/' + year;
            break;
        } // end switch
      }
      function moveToNextNewLoanScreen(screenName, $stateParams) {
        $state.go('new.' + screenName, $stateParams);
      }
      function patchIt(end, id, data){
        return $http.patch(API_URL + end + id, data);
      }
    });
})();