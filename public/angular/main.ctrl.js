(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$rootScope', '$state', '$stateParams', '$q', '$filter', 'toastr', 'APP_URL', 'FILE_URL', 'AppFactory', 'FeederFactory', 'GlobalsFactory', 'LendaFactory', 'LoansProcessor', 'FarmersFactory', 'LoansFactory', 'UsersFactory', 'orderByFilter'];

    function MainController($scope, $rootScope, $state, $stateParams, $q, $filter, toastr, APP_URL, FILE_URL, AppFactory, FeederFactory, GlobalsFactory, LendaFactory, LoansProcessor, FarmersFactory, LoansFactory, UsersFactory, orderByFilter) {
        $scope.AppFactory = AppFactory;
        
        activate();

        function activate() {
            $scope.user_id = $('#user_id').data('id');
            $scope.landing_view = 'settings';
            $scope.pending_view = 1;
            $scope.file_url = FILE_URL;

            UsersFactory.getUsers()
                .then(function success(rsp){
                    var users = rsp.data.data;
                    $scope.users = users;
                    //console.log('Users from Main', users);
                    toastr.success('Loaded All Users', 'Success!');
                    $scope.user = _.find(users, function(i) {
                        return i.id == $scope.user_id;
                    });
                });

            GlobalsFactory.getGlobals()
                .then(function success(rsp){
                    if(rsp.data[0]) {
                        $scope.globals = rsp.data[0];
                    } else {
                        $scope.globals = rsp.data;
                    }
                    toastr.success('Loaded Global Values', 'Success!');
                });

            FeederFactory.init();
            $scope.feeder = FeederFactory.getObject();

            LoansFactory.getLoans()
                .then(function(rsp){
                    var allLoans = [];
                    _.each(rsp, function(i){
                        i.need_vote = AppFactory.checkUserVoting(i, $scope.user.id);
                        i.has_comment = AppFactory.checkUserComments(i, $scope.user);
                        allLoans.push(i);
                    });
                    $scope.loans = allLoans;
                    console.log('Loans from Main', allLoans);
                    $scope.loanList = _.filter(allLoans, function(i) {
                        return (i.status_id === '1' || i.status_id === 1) && i.crop_year == $scope.globals.crop_year;
                    });
                   $scope.sortedLoanList = orderByFilter($scope.loanList, ['-need_vote', '-has_comment', '-is_stale', '-is_watched', '-disbursement_issue', '+farmer.farmer']);
                });

            FarmersFactory.getFarmers()
                .then(function(rsp){
                    $scope.farmers = rsp.data.data;
                    toastr.success('Loaded all farmers', 'Success!');
                });

            FarmersFactory.getApplicants()
                .then(function(rsp){
                    $scope.applicants = rsp.data.data;
                    toastr.success('Loaded all applicants', 'Success!');
                });
        }

        //SCOPE FUNCTIONS
        $scope.nextOrder = function(stat){
            if( Number(stat) === 1) {
                $scope.sortedLoanList = orderByFilter($scope.loanList, ['-need_vote', '-has_comment', '-is_stale', '-is_watched', '-disbursement_issue', '+farmer.farmer']);
            } else {
                $scope.sortedLoanList = orderByFilter($scope.loanList, '-app_date');
            }
        };

        $scope.newLoan = function createLoan(type_id) {
            var types = _.find($scope.feeder.loantypes, function(item){
                return item.id === type_id;
            });
            $rootScope.newlyCreated = {
                type_id: type_id,
                chosenLT: types.loantype,
                chosenLT_id: types.id
            };

            $state.go('new.farmer', {loantypeID: types.id, loanID: 0});
        }; // end newLoan fn
        $scope.getColor = AppFactory.returnColor;
        $scope.getReport = function (val) {
            var url = '';
            for (var r = 0; r < $scope.reports.length; r++) {
                if (val === $scope.reports.rptPath) {
                    url = 'reports.' + val;
                    $state.go(url);
                } // end if
            } // end for
        }; // end getReport fn
        $scope.gtZero = AppFactory.gtZero;
        $scope.clkNotificationBadge = function (id) {
            //TODO: Modal
            alert(id);
        };
        $scope.createLenda = function () {
            return LendaFactory.create({
                loan_id: 1,
                type: 'LENDA',
                user_id: 2,
                comment: 'This is a test LENDA comment generated in Main.js'
            });
        };

        $scope.toggled = function (open) {
            //$log.log('Dropdown is now: ', open);
        };
        $scope.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
        };
        $scope.status = { isopen: false };

        $scope.changeLandingView = function (val) {
            //alert(val);
            //console.log($scope.loans);
            switch (val) {
                case 'all':
                    $scope.loanList = $scope.loans;
                    break;
                case 'settings':
                    $scope.loanList = _.filter($scope.loans, function (i) {
                        return i.status_id === '1' && i.crop_year === $scope.globals.crop_year && i.season === 'F';
                    });
                    $scope.loanList = _.filter(_.filter($scope.loans,
                        function (i) {
                            return i.status_id === '1';
                        }
                    ), function (i) {
                        return i.season === 'F' || i.season === 'S';
                    });
                    break;
                case 'fall':
                    $scope.loanList = _.filter($scope.loans, function (i) {
                        return i.status_id === '1' && i.crop_year === $scope.globals.crop_year && i.season === 'F';
                    });
                    $scope.loanList = _.filter(_.filter($scope.loans,
                        function (i) {
                            return i.status_id === '1';
                        }
                    ), function (i) {
                        return i.season === 'F';
                    });
                    break;
                case 'spring':
                    $scope.loanList = _.filter($scope.loans, function (i) {
                        return i.status_id === '1' && i.crop_year === $scope.globals.crop_year && i.season === 'F';
                    });
                    $scope.loanList = _.filter(_.filter($scope.loans,
                        function (i) {
                            return i.status_id === '1';
                        }
                    ), function (i) {
                        return i.season === 'S';
                    });
                    break;
            } // end switch
            $scope.sortedLoanList = $scope.loanList;
        };

        /* METHODS */

    } // end controller
})();
