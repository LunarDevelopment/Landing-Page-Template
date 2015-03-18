'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function AboutCtrl($scope, $http, AboutService) {
    $scope.pageClass = 'page-about';
    $scope.additionalInfo = AboutService.getInfo();
    $scope.headInfo = AboutService.getHead();
}


controllersModule.controller('AboutCtrl', AboutCtrl);