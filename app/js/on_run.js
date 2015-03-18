'use strict';

/**
 * @ngInject
 */
function OnRun($rootScope, AppSettings, $http) {

    // change page title based on state
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        $rootScope.pageTitle = '';
        $rootScope.part = toState.activetab;
        if (toState.title) {
            $rootScope.pageTitle += toState.title;
            $rootScope.pageTitle += ' \u2014 ';
        }
        $rootScope.pageTitle += AppSettings.appTitle;
    });

    $rootScope.company = AppSettings;

    $rootScope.contact_form = false;
    
    // save the 'Contact Us' form
    $rootScope.save = function () {
        $rootScope.loaded = true;
        $rootScope.process = true;
        $http.post('sendemail.php', $rootScope.message).success(function () {
            $rootScope.success = true;
            $rootScope.process = false;
        }).error(function() { alert("It done broke Son!")});
    };
}

module.exports = OnRun;