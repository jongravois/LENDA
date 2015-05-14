(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$state', '$stateParams', '$q', '$filter', 'toastr', 'FILE_URL', 'AppFactory', 'FeederFactory', 'GlobalsFactory', 'LendaFactory', 'LoansProcessor', 'ApplicantsFactory', 'FarmersFactory', 'LoansFactory', 'UsersProcessorService', 'orderByFilter'];

    function MainController($scope, $state, $stateParams, $q, $filter, toastr, FILE_URL, AppFactory, FeederFactory, GlobalsFactory, LendaFactory, LoansProcessor, ApplicantsFactory, FarmersFactory, LoansFactory, UsersProcessorService, orderByFilter) {
        $scope.AppFactory = AppFactory;
        
        activate();

        function activate() {
            $scope.user_id = $('#user_id').data('id');
            $scope.landing_view = 'settings';
            $scope.file_url = FILE_URL;

            UsersProcessorService.getUsersWithExtraData()
                .then(function success(rsp){
                    var users = rsp;
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

            LoansProcessor.getLoansWithExtraData()
                .then(function (allLoans) {
                    $scope.loans = allLoans;
                    console.log('Loans from Main', allLoans);
                    $scope.loanList = _.filter(allLoans, function(i) {
                        return (i.status_id === '1' || i.status_id === 1) && i.crop_year == $scope.globals.crop_year;
                    });
                    //TODO: Determine initial sort order
                    $scope.sortedLoanList = orderByFilter($scope.loanList, '+id');
                });
                toastr.success('Loaded all loans', 'Success!');

            FarmersFactory.getFarmers()
                .then(function(rsp){
                    $scope.farmers = rsp.data.data;
                    toastr.success('Loaded all farmers', 'Success!');
                });

            ApplicantsFactory.getApplicants()
                .then(function(rsp){
                    $scope.applicants = rsp.data.data;
                    toastr.success('Loaded all applicants', 'Success!');
                });
        }

        //SCOPE FUNCTIONS
        $scope.nextOrder = function(stat){
            if( Number(stat) === 1) {
                $scope.sortedLoanList = orderByFilter($scope.loanList, ['-need_vote', '-has_comment', '-is_stale', '-on_watch', '-disbursement_issue', '+farmer.farmer']);
            } else {
                $scope.sortedLoanList = orderByFilter($scope.loanList, '-app_date');
            }
        };

        $scope.newLoan = function createLoan(type_id) {
            var types = _.find($scope.feeder.loantypes, function(item){
                return item.id === type_id;
            });
            $scope.chosenLT = types.loantype;
            $scope.chosenLT_id = types.id;

            LoansFactory.getScreens(types.id)
                .then(function success(rsp) {
                    $scope.screens = rsp.data.data;
                    angular.forEach(rsp.data.data, function (res) {
                        if (res.screen === 'farmer') {
                            res.status = 1;
                        } else {
                            res.status = 0;
                        }
                    });
                    var obj = {
                        app_date: moment(new Date()).format('YYYY-MM-DD'),
                        due_date: moment(new Date(AppFactory.getDefaultDueDate(types.id, $scope.globals.crop_year))).format('YYYY-MM-DD'),
                        loan_type_id: types.id,
                        crop_year: $scope.globals.crop_year,
                        season: $scope.globals.season,
                        loc_id: $scope.user.loc_id,
                        region_id: $scope.user.region_id,
                        user_id: $scope.user.id
                    };

                    LoansFactory.insertLoan(obj)
                        .then(function success(response) {
                            $state.go('new.farmer', {loantypeID: types.id, loanID: response.data.message.id});
                        });
                });
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
        };

        /* METHODS */

    } // end controller
})();
