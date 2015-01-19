(function(){
    'use strict';
  angular.module('ARM')
    .factory('AppFactory', function AppFactory(
      $http,
      API_URL,
      $state
    ){
      return {
        agentsInAgency: agentsInAgency,
        averageArray: averageArray,
        calcInsuranceGuaranty: calcInsuranceGuaranty,
        calcInsuranceValue: calcInsuranceValue,
        countiesInState: countiesInState,
        diffInDates: diffInDates,
        getDefaultDueDate: getDefaultDueDate,
        getFullSeason: getFullSeason,
        gtZero: gtZero,
        moveToNextNewLoanScreen: moveToNextNewLoanScreen,
        patchIt: patchIt,
        postIt: postIt,
        putIt: putIt,
        returnColor: returnColor
      };

      function agentsInAgency(id){
        return $http.get(API_URL + '/agencies/' + id + '/agents');
      }
      function averageArray(arr){
        var sum = arr.reduce(function(a,b) {return a+b;},0);
        var avg = sum / arr.length;
        return avg;
      }
      function calcInsuranceGuaranty(obj){
        return ((obj.aph*1 * obj.level/100 * obj.price) - obj.premium) * (obj.acres * obj.share/100);
      }
      function calcInsuranceValue(obj){
        return (obj.guaranty - obj.premium) * obj.share/100 * obj.acres;
      }
      function countiesInState(id){
        return $http.get(API_URL + '/states/' + id + '/counties');
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
        //debugger;
        $http.get(API_URL + '/loantypes/' + $stateParams.loantypeID + '/screens')
          .then(function success(response) {
            var screens = response.data.data;
            //find screenName in screens
            var cScreenId = _.findIndex(screens, function(i) {
              return i.screen == screenName;
            });
            if(screens[parseInt(cScreenId) + 1] !== undefined){
               var cScreen = screens[parseInt(cScreenId) + 1];
              var nextScr = screens[parseInt(cScreenId) + 1].screen;
              $state.go('new.' + nextScr, $stateParams)
            } else {
              $state.go('edit.summary', $stateParams);
            }
          });
      }
      function patchIt(end, id, data){
        return $http.patch(API_URL + end + id, data);
      }
      function postIt(end, data){
        return $http.post(API_URL + end, data);
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