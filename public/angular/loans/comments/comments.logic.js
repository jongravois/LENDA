(function () {
    'use strict';
    angular
        .module('ARM')
        .factory('CommentsLogic', CommentsLogic);

    CommentsLogic.$inject = [];

    /* @ngInject */
    function CommentsLogic() {
        function checkItemStatus(user_id) {
            return function (item) {
                var userStatus = item.status.filter(function (status) {
                    return status.user_id === user_id;
                });
                //this is the only thing that actually matters...
                item.status = userStatus.length ? userStatus[0].status : 'pending';
                return item;
            };
        }

        function mapItems(user_id) {
            return function (items) {
                return items.map(checkItemStatus(user_id));
            };
        }

        return mapItems;
    }
})();
