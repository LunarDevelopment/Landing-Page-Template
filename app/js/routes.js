'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'menu.html'
        })
        .state('app.home', {
            url: '',
            controller: 'HomeCtrl as home',
            templateUrl: 'index.html',
            title: 'Home',
            activetab: 'projects',
            onEnter: function(){
              //console.log("enter home");
            }
        })
        .state('app.project', {
            url: '/project/',
            controller: 'ProjectCtrl as project',
            templateUrl: 'product.html',
            title: 'Project',
            activetab: 'projects',
            onEnter: function(){
              //console.log("enter project");
            }
        })
        .state('app.privacy', {
            url: '/privacy',
            templateUrl: 'privacy.html',
            controller: 'PrivacyCtrl as privacy',
            title: 'Privacy',
            activetab: 'privacy',
            onEnter: function(){
              //console.log("enter privacy");
            }
        })
        .state('app.about', {
            url: '/about',
            controller: 'AboutCtrl as about',
            templateUrl: 'about.html',
            title: 'About',
            activetab: 'about',
            onEnter: function(){
              //console.log("enter about");
            }
        });

    $urlRouterProvider.otherwise('/app');

}

module.exports = Routes;