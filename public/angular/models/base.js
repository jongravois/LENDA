(function(){
    'use strict';
    angular
      .module('ARM')
      .factory('BaseModel',function($http){
        function BaseModel(data){}

        BaseModel.extend = function(child){
          return _.extend(child,BaseModel);
        };

        BaseModel.find = function(query){
          var Model = this;
          return $http.get(Model.endpoint || Model.name.toLowerCase())
            .then(function(res){
              return res.data.map(function(rec){
                return new Model(rec);
              });
            });
        };

        return BaseModel;
      });
})();