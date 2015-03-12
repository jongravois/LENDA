(function () {
    'use strict';
    angular
        .module('ARM')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('admin', {
                    abstract: true,
                    url: '/admin',
                    templateUrl: 'angular/admin/home.html',
                    controller: 'AdminController'
                })
                .state('admin.agents', {
                    abstract: true,
                    url: '/agents',
                    template: '<ui-view>',
                    controller: 'AdminAgentsController'
                })
                .state('admin.agents.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/feeders/agents/agents.html',
                    controller: 'AdminAgentsController'
                })
                .state('admin.agents.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/agents/agents_new.html',
                    controller: 'AdminAgentsController'
                })
                .state('admin.agents.edit', {
                    url: '/edit/:agentId',
                    templateUrl: 'angular/admin/feeders/agents/agents.html',
                    controller: 'AdminAgentsController'
                })
                .state('admin.applicants', {
                    abstract: true,
                    url: '/applicants',
                    template: '<ui-view>',
                    controller: 'AdminApplicantsController'
                })
                .state('admin.applicants.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/users/applicants/applicants.html',
                    controller: 'AdminApplicantsController'
                })
                .state('admin.committeespecs', {
                    abstract: true,
                    url: '/committeespecs',
                    template: '<ui-view>',
                    controller: 'AdminCommitteeSpecsController'
                })
                .state('admin.committeespecs.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/loans/committeespecs/committeespecs.html',
                    controller: 'AdminCommitteeSpecsController'
                })
                .state('admin.committeespecs.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/loans/committeespecs/committeespecs_new.html',
                    controller: 'AdminCommitteeSpecsController'
                })
                .state('admin.committeespecs.edit', {
                    url: '/edit/:committeespecsId',
                    templateUrl: 'angular/admin/loans/committeespecs/committeespecs.html',
                    controller: 'AdminCommitteeSpecsController'
                })
                .state('admin.crops', {
                    abstract: true,
                    url: '/crops',
                    template: '<ui-view>',
                    controller: 'AdminCropsController'
                })
                .state('admin.crops.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/feeders/crops/crops.html',
                    controller: 'AdminCropsController'
                })
                .state('admin.crops.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/crops/crop_new.html',
                    controller: 'AdminCropsController'
                })
                .state('admin.crops.edit', {
                    url: '/edit/:cropId',
                    templateUrl: 'angular/admin/feeders/crops/crops.html',
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
                    templateUrl: 'angular/admin/feeders/distributors/distributors.html',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.distributors.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/distributors/distributor_new.html',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.distributors.edit', {
                    url: '/edit/:distributorId',
                    templateUrl: 'angular/admin/feeders/distributors/distributor.html',
                    controller: 'AdminDistributorsController'
                })
                .state('admin.entitytypes', {
                    abstract: true,
                    url: '/entitytypes',
                    template: '<ui-view>',
                    controller: 'AdminEntityTypesController'
                })
                .state('admin.entitytypes.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/feeders/entity-types/entitytypes.html',
                    controller: 'AdminEntityTypesController'
                })
                .state('admin.entitytypes.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/entity-types/entitytype_new.html',
                    controller: 'AdminEntityTypesController'
                })
                .state('admin.entitytypes.edit', {
                    url: '/edit/:entitytypeId',
                    templateUrl: 'angular/admin/feeders/entity-types/entitytype.html',
                    controller: 'AdminEntityTypesController'
                })
                .state('admin.farmers', {
                    abstract: true,
                    url: '/farmers',
                    template: '<ui-view>',
                    controller: 'AdminFarmersController'
                })
                .state('admin.farmers.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/users/farmers/farmers.html',
                    controller: 'AdminFarmersController'
                })
                .state('admin.instypes', {
                    abstract: true,
                    url: '/instypes',
                    template: '<ui-view>',
                    controller: 'AdminInsTypesController'
                })
                .state('admin.instypes.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/feeders/ins-types/instypes.html',
                    controller: 'AdminInsTypesController'
                })
                .state('admin.instypes.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/ins-types/instype_new.html',
                    controller: 'AdminInsTypesController'
                })
                .state('admin.instypes.edit', {
                    url: '/edit/:instypeId',
                    templateUrl: 'angular/admin/feeders/ins-types/instype.html',
                    controller: 'AdminInsTypesController'
                })
                .state('admin.loantypes', {
                    abstract: true,
                    url: '/loantypes',
                    template: '<ui-view>',
                    controller: 'AdminLoanTypesController'
                })
                .state('admin.loantypes.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/feeders/loan-types/loantypes.html',
                    controller: 'AdminLoanTypesController'
                })
                .state('admin.loantypes.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/loan-types/loantype_new.html',
                    controller: 'AdminLoanTypesController'
                })
                .state('admin.loantypes.edit', {
                    url: '/edit/:loantypeId',
                    templateUrl: 'angular/admin/feeders/loan-types/loantype.html',
                    controller: 'AdminLoanTypesController'
                })
                .state('admin.locations', {
                    abstract: true,
                    url: '/locations',
                    template: '<ui-view>',
                    controller: 'AdminLocationsController'
                })
                .state('admin.locations.list', {
                    url: '/list',
                    templateUrl: 'angular/admin/feeders/locations/locations.html',
                    controller: 'AdminLocationsController'
                })
                .state('admin.v.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/locations/locations_new.html',
                    controller: 'AdminLocationsController'
                })
                .state('admin.locations.edit', {
                    url: '/edit/:locationId',
                    templateUrl: 'angular/admin/feeders/locations/location.html',
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
                    templateUrl: 'angular/admin/feeders/regions/regions.html',
                    controller: 'AdminRegionsController'
                })
                .state('admin.regions.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/regions/region_new.html',
                    controller: 'AdminRegionsController'
                })
                .state('admin.regions.edit', {
                    url: '/edit/:regionId',
                    templateUrl: 'angular/admin/feeders/regions/region.html',
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
                    templateUrl: 'angular/admin/reports/reports.html',
                    controller: 'AdminReportsController'
                })
                .state('admin.reports.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/reports/report_new.html',
                    controller: 'AdminReportsController'
                })
                .state('admin.reports.edit', {
                    url: '/edit/:reportId',
                    templateUrl: 'angular/admin/reports/report.html',
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
                    templateUrl: 'angular/admin/feeders/roles/roles.html',
                    controller: 'AdminRolesController'
                })
                .state('admin.roles.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/roles/role_new.html',
                    controller: 'AdminRolesController'
                })
                .state('admin.roles.edit', {
                    url: '/edit/:roleId',
                    templateUrl: 'angular/admin/feeders/roles/role.html',
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
                    templateUrl: 'angular/admin/feeders/units/units.html',
                    controller: 'AdminUnitsController'
                })
                .state('admin.units.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/feeders/units/unit_new.html',
                    controller: 'AdminUnitsController'
                })
                .state('admin.units.edit', {
                    url: '/edit/:unitId',
                    templateUrl: 'angular/admin/feeders/units/unit.html',
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
                    templateUrl: 'angular/admin/users/users.html',
                    controller: 'AdminUsersController'
                })
                .state('admin.users.new', {
                    url: '/new',
                    templateUrl: 'angular/admin/users/user_new.html',
                    controller: 'AdminUsersController'
                })
                .state('admin.users.edit', {
                    url: '/edit/:userId',
                    templateUrl: 'angular/admin/users/user.html',
                    controller: 'AdminUsersController'
                });
        });
})();
