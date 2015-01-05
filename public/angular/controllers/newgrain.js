(function(){
    'use strict';
    angular
      .module('ARM')
      .controller('NewGrainController', function(
        $scope, $state, $stateParams
      ){
        var curr = $state.current.url;
        var currScreen = curr.substring(1,curr.length);
        //alert(currScreen);
      });
})();