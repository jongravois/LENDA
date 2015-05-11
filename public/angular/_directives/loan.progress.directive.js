(function () {
    'use strict';

    angular.module('ARM')
        .directive('loanProgressIcon', LoanProgressIconDirective);

    LoanProgressIconDirective.$inject = ['$compile', '$timeout'];

    function LoanProgressIconDirective($compile, $timeout) {
        var progressMarkers = [{
            'id': 1,
            'cat': 'its_list',
            'glyph': 'list-alt',
            'tip': 'ITS List Verfified'
        }, {
            'id': 2,
            'cat': 'fsa_compliant',
            'glyph': 'home',
            'tip': 'FSA Eligibility'

        }, {
            'id': 3,
            'cat': 'has_liens',
            'glyph': 'star',
            'tip': 'Prior Lien Verfied'
        }, {
            'id': 4,
            'cat': 'valid_leases',
            'glyph': 'leaf',
            'tip': 'Leases Valid'
        },
            {
                'id': 5,
                'cat': 'bankruptcy_order_received',
                'glyph': 'fire',
                'tip': 'Bankruptcy Order Received'
            },
            {
                'id': 6,
                'cat': 'received_3party',
                'glyph': 'stats',
                'tip': 'Third Party Credit Verified'
            },
            {
                'id': 7,
                'cat': 'recommended',
                'glyph': 'share-alt',
                'tip': 'Recommended'
            },
            {
                'id': 8,
                'cat': 'arm_approved',
                'glyph': 'thumbs-up',
                'tip': 'ARM Approved'
            },
            {
                'id': 9,
                'cat': 'dist_approved',
                'glyph': 'hand-up',
                'tip': 'Distributor Approved'
            },
            {
                'id': 10,
                'cat': 'loan_closed',
                'glyph': 'folder-close',
                'tip': 'Loan Closed'
            },
            {
                'id': 11,
                'cat': 'added_land_verified',
                'glyph': 'flag',
                'tip': 'Added Land Verified'
            },
            {
                'id': 12,
                'cat': 'arm_ucc_received',
                'glyph': 'log-in',
                'tip': 'ARM UCC Received'
            },
            {
                'id': 13,
                'cat': 'dist_ucc_received',
                'glyph': 'log-in',
                'tip': 'Distributor UCC Received'
            },
            {
                'id': 14,
                'cat': 'aoi_received',
                'glyph': 'arrow-right',
                'tip': 'AOI Received'
            },
            {
                'id': 15,
                'cat': 'ccc_received',
                'glyph': 'subtitles',
                'tip': 'CCC Received'
            },
            {
                'id': 16,
                'cat': 'rebate_assignment',
                'glyph': 'cog',
                'tip': 'Rebate Assignment'
            },
            {
                'id': 17,
                'cat': 'crop_inspection',
                'glyph': 'grain',
                'tip': 'Crop Inspection'
            },
            {
                'id': 18,
                'cat': 'limit_warning',
                'glyph': 'warning-sign',
                'tip': 'Limit Warning'
            },
            {
                'id': 19,
                'cat': 'reconciliation',
                'glyph': 'retweet',
                'tip': 'Reconciliation'
            },
            {
                'id': 20,
                'cat': 'account_classification',
                'glyph': 'sort-by-order-alt',
                'tip': 'Account Classification'
            }];

        var statusColors = [{
            val: 0,
            color: '#CCC',
            class: 'pending'
        }, {
            val: 1,
            color: '#006837',
            class: 'completed'
        }, {
            val: 2,
            color: '#900',
            class: 'overdue'
        }];

        return {
            restrict: 'A',
            require: 'ngModel',
            link: linker,
            template: '<span sglclick="progClicked()" ng-dblclick="progDblClicked()" class="progicon glyphicon glyphicon-{{loan.glyphicon}}" tooltip="{{loan.tooltip}}" style="font-size:18px;color:{{loan.style}};cursor:pointer;"></span>',
            scope: {
                cat: '@',
                ngModel: '='
            }
        };

        function linker(scope, element, attrs, ctrl) {
            scope.loan = {
                id: progressMarkers[scope.cat]['id'],
                glyphicon: progressMarkers[scope.cat]['glyph'],
                tooltip: progressMarkers[scope.cat]['tip']
            };

            var styleChange = function () {
                scope.loan.style = statusColors[scope.ngModel]['color'];
            };

            styleChange();

            var setter = ctrl.$setViewValue;

            ctrl.$setViewValue = function () {
                setter.apply(this, arguments);
                $timeout(styleChange);
            };

            scope.progClicked = function () {

                if (parseInt(scope.ngModel) === 0) {
                    ctrl.$setViewValue(1);
                } else if (parseInt(scope.ngModel) === 1) {
                    ctrl.$setViewValue(2);
                } else if (parseInt(scope.ngModel) === 2) {
                    ctrl.$setViewValue(1);
                }
            };

            scope.progDblClicked = function () {
                alert('Icon ' + scope.ngModel + ' was double clicked.');
            };
        }
    }

})();
