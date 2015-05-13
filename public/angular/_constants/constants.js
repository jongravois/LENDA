(function () {
    'use strict';
    angular
        .module('ARM')
        .constant('_', window._)
        .constant('API_URL', 'http://www.lenda.local/api')
        .constant('FILE_URL', 'http://www.lenda.local/files_loans/')
        .constant('LEGAL_NAME', 'Ag Resource Management');
})();
