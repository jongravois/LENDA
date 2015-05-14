/**
 * @name ui-router-confirm
 * UI-Router Confirmation: Utility for transition confirmation.
 * @version v0.0.1
 * @link https://github.com/bogdanalexe90/ui-router-confirm
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function (window, angular, undefined) {
'use strict';

angular
/**
 * @ngdoc module
 * @name ui.router.confirm
 * @description
 * Ui Router Confirm module definition
 */
    .module('ui.router.confirm', [
        'ui.router'
    ])
/**
 * @ngdoc constant
 * @kind object
 * @name uiRouterConfirmConfig
 * @description
 * Configuration constant that can be overridden
 */
    .constant('uiRouterConfirmConfig', {
        property: 'confirmOnExit',
        title: 'Are you sure?',
        message: 'Do you want to navigate away?',
        sync: true
    });


angular
    .module('ui.router.confirm')
    .run([
        '$window',
        '$rootScope',
        'uiRouterConfirmConfig',
        runBlock
    ]);
///////////////


/**
 * @description
 * Module Run block - Intercepts routes events
 *
 * @requires $window
 * @requires $rootScope
 * @requires uiRouterConfirmConfig
 */
function runBlock($window, $rootScope, CONFIG) {
    $rootScope.$on('$stateChangeStart', interceptRouteChange);
    ///////////////


    /**
     * @kind function
     * @description
     * Handler for $stateChangeStart event.
     * Intercepts all route transition and checks for confirmOnExit flag.
     *  -   If is true will display a confirmation popup for the transition
     *
     * @param {Object} event Event object.
     * @param {State} toState The state being transitioned to.
     * @param {Object} toParams The params supplied to the `toState`.
     * @param {State} fromState The current state, pre-transition.
     * @param {Object} fromParams The params supplied to the `fromState`.
     *
     * @returns {undefined}
     */
    function interceptRouteChange(event, toState, toParams, fromState, fromParams) {
        //Check for the confirmation flag in current state
        if (fromState.hasOwnProperty(CONFIG.property) && fromState[CONFIG.property] === true) {
            if(CONFIG.sync === true){
                //Sync version of confirmation
                //Freeze everything
                if(!$window.confirm(CONFIG.message)){
                    event.preventDefault();
                }
            }else if(CONFIG.sync === false){
                //Async version of confirmation
                //Don't freeze anything
                //TODO: Implement async confirmation
                event.preventDefault();
            }else{
                throw new TypeError('`sync` must have a boolean value');
            }
        }
    }
}
})(window, window.angular);