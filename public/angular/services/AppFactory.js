(function(){
    'use strict';
  angular.module('ARM')
    .factory('AppFactory', function GlobalsFactory(
      $http,
      API_URL,
      $state
    ){
      return {
        averageArray: averageArray,
        diffInDates: diffInDates,
        getDefaultDueDate: getDefaultDueDate,
        getFullSeason: getFullSeason,
        gtZero: gtZero,
        moveToNextNewLoanScreen: moveToNextNewLoanScreen,
        patchIt: patchIt,
        putIt: putIt,
        returnColor: returnColor
      };

      function averageArray(arr){
        var sum = arr.reduce(function(a,b) {return a+b;},0);
        var avg = sum / arr.length;
        return avg;
      }
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
      function getFullSeason(initial){
        switch(initial){
          case 'F':
            return 'Fall';
            break;
          case 'S':
            return 'Spring';
            break;
        } // end switch
      }
      function gtZero(value){
        if(value <= 0) {
          return 'text-center';
        }
        else {
          return 'text-right';
        }
      }
      function moveToNextNewLoanScreen(screenName, $stateParams) {
        $state.go('new.' + screenName, $stateParams);
      }
      function patchIt(end, id, data){
        return $http.patch(API_URL + end + id, data);
      }
      function putIt(end, id, data){
        return $http.put(API_URL + end + id, data);
      }
      function returnColor(val){
        var colors = ['gray', 'green', 'yellow', 'red', 'blue', 'green_off', 'yellow_off'];
        return colors[val] || 'gray';
      }
    });
})();