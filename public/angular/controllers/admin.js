(function(){
  angular.module('ARM')
    .controller('AdminController', function($scope){
      $scope.today = new Date();
    })
    .controller('AdminCropsController',function($scope, $http, $state, $stateParams, AppFactory){
      $scope.adminUpdateCrop = function(o){
        AppFactory.putIt('/crops/', o.id, o).then(function success(response){});
      };
    })
    .controller('AdminDistributorsController', function($scope, $http, $state, $stateParams, AppFactory){
      $scope.distributor_id = $stateParams.distributorId;
      $scope.distributor = _.find($scope.distributors, function(i) {
        return i.id == $scope.distributor_id;
      });

      // edit distributor
      $scope.updateDistributor = function(o) {
        AppFactory.putIt('/distributors/', o.id, o).then(function success(response){});
      };

      // remove distributor
      $scope.removeDistributor = function(index, id) {
        $http.delete('/api/distributors/' + id);
        $scope.distributors.splice(index, 1);
      };

      // add distributor
      $scope.addDistributor = function() {
        $scope.inserted = {
          id: $scope.distributors.length+1,
          distributor: null,
          path: null,
          is_required: false
        };
        $scope.distributors.push($scope.inserted);
        $state.go("admin.distributors.edit",{distributorId: $scope.inserted.id});
      };
    })
    .controller('AdminEntitytypesController', function($scope, $http, $state, $stateParams){
      $scope.entitytype_id = $stateParams.entitytypeId;
      $scope.entitytype = _.find($scope.entitytypes, function(i) {
        return i.id == $scope.entitytype_id;
      });

      // edit entitytype
      $scope.saveEntitytype = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/entitytypes/' + id, data);
      };

      // remove entitytype
      $scope.removeEntitytype = function(index, id) {
        $http.delete('/api/entitytypes/' + id);
        $scope.entitytypes.splice(index, 1);
      };

      // add entitytype
      $scope.addEntitytype = function() {
        $scope.inserted = {
          id: $scope.entitytypes.length+1,
          entitytype: null,
          path: null,
          is_required: false
        };
        $scope.entitytypes.push($scope.inserted);
        $state.go("admin.entitytypes.edit",{entitytypeId: $scope.inserted.id});
      };
    })
    .controller('AdminInstypesController', function($scope, $http, $state, $stateParams){
      $scope.instype_id = $stateParams.instypeId;
      $scope.instype = _.find($scope.instypes, function(i) {
        return i.id == $scope.instype_id;
      });

      // edit instype
      $scope.saveInstype = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/instypes/' + id, data);
      };

      // remove instype
      $scope.removeInstype = function(index, id) {
        $http.delete('/api/instypes/' + id);
        $scope.instypes.splice(index, 1);
      };

      // add instype
      $scope.addInstype = function() {
        $scope.inserted = {
          id: $scope.instypes.length+1,
          instype: null,
          path: null,
          is_required: false
        };
        $scope.instypes.push($scope.inserted);
        $state.go("admin.instypes.edit",{instypeId: $scope.inserted.id});
      };
    })
    .controller('AdminLoantypesController', function($scope, $http, $state, $stateParams){
      $scope.loantype_id = $stateParams.loantypeId;
      $scope.loantype = _.find($scope.loantypes, function(i) {
        return i.id == $scope.loantype_id;
      });

      // edit loantype
      $scope.saveLoantype = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/loantypes/' + id, data);
      };

      // remove loantype
      $scope.removeLoantype = function(index, id) {
        $http.delete('/api/loantypes/' + id);
        $scope.loantypes.splice(index, 1);
      };

      // add loantype
      $scope.addLoantype = function() {
        $scope.inserted = {
          id: $scope.loantypes.length+1,
          loantype: null,
          path: null,
          is_required: false
        };
        $scope.loantypes.push($scope.inserted);
        $state.go("admin.loantypes.edit",{loantypeId: $scope.inserted.id});
      };
    })
    .controller('AdminLocationsController', function($scope, $http, $state, $stateParams){
      $scope.location_id = $stateParams.locationId;
      $scope.location = _.find($scope.locations, function(i) {
        return i.id == $scope.location_id;
      });

      // edit location
      $scope.saveLocation = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/locations/' + id, data);
      };

      // remove location
      $scope.removeLocation = function(index, id) {
        $http.delete('/api/locations/' + id);
        $scope.locations.splice(index, 1);
      };

      // add location
      $scope.addLocation = function() {
        $scope.inserted = {
          id: $scope.locations.length+1,
          location: null,
          path: null,
          is_required: false
        };
        $scope.locations.push($scope.inserted);
        $state.go("admin.locations.edit",{locationId: $scope.inserted.id});
      };
    })
    .controller('AdminRegionsController', function($scope, $http, $state, $stateParams){
      $scope.region_id = $stateParams.regionId;
      $scope.region = _.find($scope.regions, function(i) {
        return i.id == $scope.region_id;
      });

      // edit region
      $scope.saveRegion = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/regions/' + id, data);
      };

      // remove region
      $scope.removeRegion = function(index, id) {
        $http.delete('/api/regions/' + id);
        $scope.regions.splice(index, 1);
      };

      // add region
      $scope.addRegion = function() {
        $scope.inserted = {
          id: $scope.regions.length+1,
          region: null,
          path: null,
          is_required: false
        };
        $scope.regions.push($scope.inserted);
        $state.go("admin.regions.edit",{regionId: $scope.inserted.id});
      };
    })
    .controller('AdminReportsController', function($scope, $http, $state, $stateParams){
      $scope.report_id = $stateParams.reportId;
      $scope.report = _.find($scope.reports, function(i) {
        return i.id == $scope.report_id;
      });

      // edit report
      $scope.saveReport = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/reports/' + id, data);
      };

      // remove report
      $scope.removeReport = function(index, id) {
        $http.delete('/api/reports/' + id);
        $scope.reports.splice(index, 1);
      };

      // add report
      $scope.addReport = function() {
        $scope.inserted = {
          id: $scope.reports.length+1,
          report: null,
          path: null,
          is_required: false
        };
        $scope.reports.push($scope.inserted);
        $state.go("admin.reports.edit",{reportId: $scope.inserted.id});
      };
    })
    .controller('AdminRolesController', function($scope, $http, $state, $stateParams){
      $scope.role_id = $stateParams.roleId;
      $scope.role = _.find($scope.roles, function(i) {
        return i.id == $scope.role_id;
      });

      // edit role
      $scope.saveRole = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/roles/' + id, data);
      };

      // remove role
      $scope.removeRole = function(index, id) {
        $http.delete('/api/roles/' + id);
        $scope.roles.splice(index, 1);
      };

      // add role
      $scope.addRole = function() {
        $scope.inserted = {
          id: $scope.roles.length+1,
          role: null,
          abr: null
        };
        $scope.roles.push($scope.inserted);
        $state.go("admin.roles.edit",{roleId: $scope.inserted.id});
      };
    })
    .controller('AdminUnitsController', function($scope, $http, $state, $stateParams){
      $scope.unit_id = $stateParams.unitId;
      $scope.unit = _.find($scope.units, function(i) {
        return i.id == $scope.unit_id;
      });

      // edit unit
      $scope.saveUnit = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/units/' + id, data);
      };

      // remove unit
      $scope.removeUnit = function(index, id) {
        $http.delete('/api/units/' + id);
        $scope.units.splice(index, 1);
      };

      // add unit
      $scope.addUnit = function() {
        $scope.inserted = {
          id: $scope.units.length+1,
          unit: null,
          abr: null
        };
        $scope.units.push($scope.inserted);
        $state.go("admin.units.edit",{unitId: $scope.inserted.id});
      };
    })
    .controller('AdminUsersController', function($scope, $http, $state, $stateParams){
      $scope.user_id = $stateParams.userId;
      $scope.user = _.find($scope.users, function(i) {
        return i.id == $scope.user_id;
      });

      // edit user
      $scope.saveUser = function(id, data) {
        angular.extend(data, {id: id});
        return $http.put('/api/users/' + id, data);
      };

      // remove user
      $scope.removeUser = function(index, id) {
        $http.delete('/api/users/' + id);
        $scope.users.splice(index, 1);
      };

      // add user
      $scope.addUser = function() {
        $scope.inserted = {
          id: $scope.users.length+1,
          username: null,
          abr: null,
          email: null,
          role: null,
          loc_id: null,
          manager_id: null,
          is_admin: false,
          is_approver: false,
          is_manager: false
        };
        $scope.users.push($scope.inserted);
        $state.go("admin.users.edit",{userId: $scope.inserted.id});
      };
    });
}());