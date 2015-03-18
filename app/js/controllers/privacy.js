'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function PrivacyCtrl($scope, $http, PrivacyService) {
    $scope.pageClass = 'page-privacy';
    $scope.additionalInfo = PrivacyService.getInfo();
    $scope.headInfo = PrivacyService.getHead();
}


controllersModule.controller('PrivacyCtrl', PrivacyCtrl);