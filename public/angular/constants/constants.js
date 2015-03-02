(function () {
    'use strict';
    angular
        .module('ARM')
        .constant('_', window._)
        .constant('API_URL', 'http://lenda.app/api')
        .constant('FILE_URL', 'http://lenda.app/files_loans/')
        .constant('LEGAL_NAME', 'Ag Resource Management');
})();
