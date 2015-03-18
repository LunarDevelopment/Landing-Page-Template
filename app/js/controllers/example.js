'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function ExampleCtrl() {

    // ViewModel
    var vm = this;

    vm.title = 'AngularJS, Gulp, and Browserify!';
    vm.number = 123;
    vm.angular = "images/angular.png";
    vm.gulp = "images/gulp.png";
    vm.browserify = "images/browserify.png";
    vm.lewis = "images/small.png";

}

controllersModule.controller('ExampleCtrl', ExampleCtrl);