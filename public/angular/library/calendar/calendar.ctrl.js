(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CalendarController', CalendarController);
    
        CalendarController.$inject = ['$scope', 'InitialData'];
    
        /* @ngInject */
        function CalendarController($scope, InitialData){
            /* jshint validthis: true */
            console.log('InitialData ', InitialData);
            var vm = this;
            var date;
            
            vm.calendarConfig = {
                height: 550,
                header: {
                    left: 'month agendaWeek agendaDay',
                    center: 'title',
                    right: 'prev,next'
                },
                firstHour: 8,
                dayClick: dayClick,
                editable: true
            };

            var calEvents = [
                {
                    id: 1,
                    start: '2015-03-13 10:00:00',
                    title: 'Board Meeting',
                    allDay: false,
                    durationEditable: false,
                    end: '2015-03-13 11:00:00'
                },
                {
                    id: 2,
                    start: '2015-03-10 00:00:00',
                    title: 'ACC Tournament',
                    allDay: true,
                    durationEditable: false,
                    end: '2015-03-14 00:00:00'
                },
                {
                    id: 3,
                    start: '2015-03-13 14:00:00',
                    title: 'Analyst Review',
                    allDay: false,
                    durationEditable: false,
                    end: '2015-03-13 16:00:00'
                },
                {
                    id: 4,
                    start: '2015-03-24 9:00:00',
                    title: 'Banker Policies (Regions Bank w/ Reggie Jackson)',
                    allDay: false,
                    durationEditable: false,
                    end: '2015-03-24 17:00:00'
                },
                {
                    id: 5,
                    start: '2015-03-19 10:00:00',
                    title: 'JSI w/ Katniss Everdeen',
                    allDay: false,
                    durationEditable: false,
                    end: '2015-03-19 11:00:00'
                },
                {
                    id: 6,
                    start: '2015-03-17 00:00:00',
                    title: 'ARM Workday',
                    allDay: true,
                    durationEditable: false,
                    end: '2015-03-18 00:00:00'
                }
            ];

            vm.eventSources = [calEvents];

            function dayClick(){
                $scope.eventCalendar.fullCalendar('changeView', 'agendaDay');
                $scope.eventCalendar.fullCalendar('gotoDate', date);
            }
        } // end function
})();
