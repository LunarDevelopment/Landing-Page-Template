'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ProjectCtrl($scope, $http, ProductsService, $state) {
    $scope.pageClass = 'page-project';
    $scope.product = ProductsService.getSelectedProd();
    if ($scope.product == '0') {
        $state.go('app.home');
    }
}

 
controllersModule.controller('ProjectCtrl', ProjectCtrl);