(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('admin', {
                    abstract: true,
                    url: '/admin',
                    templateUrl: 'angular/admin/views/home.html',
                    controller: 'AdminController'
                })
                .state('admin.crops', {
                    abstract: true,
                    url: '/crops',
                    template: '<ui-view>',
                    controller: 'AdminCropsController'
                })
                .state('admin.crops.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/crops.html',
                    controller: 'AdminCropsController'
                })
                .state('admin.crops.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/crop_new.html',
                    controller: 'AdminCropsController'
                })
                .state('admin.crops.edit', {
                    url: '/edit/:cropId',
                    templateUrl: 'angular/admin/views/crops.html',
                    controller: 'AdminCropsController'
                })
                .state('admin.distributors', {
                    abstract: true,
                    url: '/distributors',
                    template: '<ui-view>',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.distributors.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/distributors.html',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.distributors.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/distributor_new.html',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.distributors.edit', {
                    url: '/edit/:distributorId',
                    templateUrl: 'angular/admin.views/distributor.html',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.entitytypes', {
                    abstract: true,
                    url: '/entitytypes',
                    template: '<ui-view>',
                    controller: 'AdminEntitytypesController'
                })
                .state('admin.entitytypes.list', {
                    url: '/list',
                    templateUrl: 'angular/admin.views/entitytypes.html',
                    controller: 'AdminEntitytypesController'
                })
                .state('admin.entitytypes.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/entitytype_new.html',
                    controller: 'AdminEntitytypesController'
                })
                .state('admin.entitytypes.edit', {
                    url: '/edit/:entitytypeId',
                    templateUrl: 'angular/admin/views/entitytype.html',
                    controller: 'AdminEntitytypesController'
                })
                .state('admin.instypes', {
                    abstract: true,
                    url: '/v',
                    template: '<ui-view>',
                    controller: 'AdminInstypesController'
                })
                .state('admin.instypes.list', {
                    url: '/list',
                    templateUrl: 'angular/admin.views/instypes.html',
                    controller: 'AdminInstypesController'
                })
                .state('admin.instypes.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/instype_new.html',
                    controller: 'AdminInstypesController'
                })
                .state('admin.instypes.edit', {
                    url: '/edit/:instypeId',
                    templateUrl: 'angular/admin/views/instype.html',
                    controller: 'AdminInstypesController'
                })
                .state('admin.loantypes', {
                    abstract: true,
                    url: '/loantypes',
                    template: '<ui-view>',
                    controller: 'AdminLoantypesController'
                })
                .state('admin.loantypes.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/loantypes.html',
                    controller: 'AdminLoantypesController'
                })
                .state('admin.v.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/loantype_new.html',
                    controller: 'AdminLoantypesController'
                })
                .state('admin.loantypes.edit', {
                    url: '/edit/:loantypeId',
                    templateUrl: 'angular/admin.views/loantype.html',
                    controller: 'AdminLoantypesController'
                })
                .state('admin.locations', {
                    abstract: true,
                    url: '/locations',
                    template: '<ui-view>',
                    controller: 'AdminLocationsController'
                })
                .state('admin.locations.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/locations.html',
                    controller: 'AdminLocationsController'
                })
                .state('admin.v.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/locations_new.html',
                    controller: 'AdminLocationsController'
                })
                .state('admin.locations.edit', {
                    url: '/edit/:locationId',
                    templateUrl: 'angular/admin/views/location.html',
                    controller: 'AdminLocationsController'
                })
                .state('admin.regions', {
                    abstract: true,
                    url: '/regions',
                    template: '<ui-view>',
                    controller: 'AdminRegionsController'
                })
                .state('admin.regions.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/regions.html',
                    controller: 'AdminRegionsController'
                })
                .state('admin.regions.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/region_new.html',
                    controller: 'AdminRegionsController'
                })
                .state('admin.regions.edit', {
                    url: '/edit/:regionId',
                    templateUrl: 'angular/admin/views/region.html',
                    controller: 'AdminRegionsController'
                })
                .state('admin.reports', {
                    abstract: true,
                    url: '/reports',
                    template: '<ui-view>',
                    controller: 'AdminReportsController'
                })
                .state('admin.reports.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/reports.html',
                    controller: 'AdminReportsController'
                })
                .state('admin.reports.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/report_new.html',
                    controller: 'AdminReportsController'
                })
                .state('admin.reports.edit', {
                    url: '/edit/:reportId',
                    templateUrl: 'angular/admin/views/report.html',
                    controller: 'AdminReportsController'
                })
                .state('admin.roles', {
                    abstract: true,
                    url: '/roles',
                    template: '<ui-view>',
                    controller: 'AdminRolesController'
                })
                .state('admin.roles.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/roles.html',
                    controller: 'AdminRolesController'
                })
                .state('admin.roles.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/role_new.html',
                    controller: 'AdminRolesController'
                })
                .state('admin.roles.edit', {
                    url: '/edit/:roleId',
                    templateUrl: 'angular/admin/views/role.html',
                    controller: 'AdminRolesController'
                })
                .state('admin.units', {
                    abstract: true,
                    url: '/units',
                    template: '<ui-view>',
                    controller: 'AdminUnitsController'
                })
                .state('admin.units.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/units.html',
                    controller: 'AdminUnitsController'
                })
                .state('admin.units.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/unit_new.html',
                    controller: 'AdminUnitsController'
                })
                .state('admin.units.edit', {
                    url: '/edit/:unitId',
                    templateUrl: 'angular/admin/views/unit.html',
                    controller: 'AdminUnitsController'
                })
                .state('admin.users', {
                    abstract: true,
                    url: '/users',
                    template: '<ui-view>',
                    controller: 'AdminUsersController'
                })
                .state('admin.users.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/views/users.html',
                    controller: 'AdminUsersController'
                })
                .state('admin.users.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/views/user_new.html',
                    controller: 'AdminUsersController'
                })
                .state('admin.users.edit', {
                    url: '/edit/:userId',
                    templateUrl: 'angular/admin/views/user.html',
                    controller: 'AdminUsersController'
                });
        });
})();
