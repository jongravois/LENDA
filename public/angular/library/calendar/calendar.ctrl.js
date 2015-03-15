(function () {
    'use strict';
    angular
        .module('ARM')
        .controller('CalendarController', CalendarController);
    
        CalendarController.$inject = ['$scope', 'InitialData'];
    
        /* @ngInject */
        function CalendarController($scope, InitialData){
            /* jshint validthis: true */
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

            var calEvents = InitialData.data.data;

            vm.eventSources = [calEvents];

            function dayClick(){
                $scope.eventCalendar.fullCalendar('changeView', 'agendaDay');
                $scope.eventCalendar.fullCalendar('gotoDate', date);
            }
        } // end function
})();
