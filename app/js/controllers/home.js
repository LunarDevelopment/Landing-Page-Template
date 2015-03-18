'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function HomeCtrl($scope, $http, $state, ProductsService) {
    $scope.pageClass = 'page-home';
    $scope.products = ProductsService.getProducts();
    $scope.selectProduct = function (id) {
        ProductsService.setId(id);
        $state.go('app.project');
    };
}


controllersModule.controller('HomeCtrl', HomeCtrl);