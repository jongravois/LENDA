(function(){
  angular.module('ARM')
    .filter("asDate", function () {
      return function (input) {
        return new Date(input);
      }
    })
    .filter('dateFmt', function($filter)
    {
      return function(input)
      {
        if(input == null){ return ""; }
        var _date = $filter('date')(new Date(input), 'dd/MM/yyyy');
        return _date.toUpperCase();
      };
    })
    .filter('capitalize', function() {
      return function(input) {
        return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
      }
    })
    .filter('displayname', function(){
      return function(input){
        if(!input){ return ''; }
        if(input.indexOf(",") < 1){ return input; }
        return input.substring(input.indexOf(",")+1) + ' ' + input.substring(0,input.indexOf(","));
      };
    })
    .filter('displaynull', function(){
      return function(input){
        if(!input){ return ' - '; }
        if(parseFloat(input) != 0){
          return input;
        }
        return ' - ';
      };
    })
    .filter('displaynullpercent', function($filter){
      return function(input){
        if(!input){ return ' - '; }
        if(parseFloat(input) != 0){
          return $filter('number')(input,1) + '%';
        }
        return ' - ';
      };
    })
    .filter('displaynullcurrency', function($filter){
      return function(input){
        if(!input){ return ' - '; }
        if(parseFloat(input) != 0){
          return $filter('currency')(input);
        }
        return ' - ';
      };
    })
    .filter('displaypercent', function($filter){
      return function(input){
        return $filter('number')(input,0) + '%';
      };
    })
    .filter('boolean', function($filter){
      return function(input){
        if(input === 1 || input === true){
          return 'Yes';
        }
        return 'No';
      };
    })
    .filter('noCentsCurrency',
    [ '$filter', '$locale', function(filter, locale) {
      var currencyFilter = filter('currency');
      var formats = locale.NUMBER_FORMATS;
      return function(amount, currencySymbol) {
        var value = currencyFilter(amount, currencySymbol);
        var sep = value.indexOf(formats.DECIMAL_SEP);
        //console.log(amount, value);
        if(!amount){ return ' - '; }
        if(amount >= 0) {
          return value.substring(0, sep);
        }
        return value.substring(0, sep) + ')';
      };
    } ])
    .filter('phone', function(){
      return function(input){
        if(!input) { return ''; }
        if( input.length < 10 ){ return input; }
        return '(' + input.substr(0,3) + ') ' + input.substr(3,3) + '-' + input.substr(6,4);
      };
    })
    .filter('ssnum', function(){
      return function(input){
        if(!input){ return ''; }
        if(input.length != 9){ return input; }
        var ssn = input.substr(0, 3) + '-' + input.substr(3, 2) + '-' + input.substr(5, 4);
        return ssn;
      };
    })
    .filter('justtext', function(input){
      return function(input){
        return input;
      };
    });

}());