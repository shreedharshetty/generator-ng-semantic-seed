/* global angular */
(function(angular){
    'use strict';
    var module = angular.module('Footer.Controller', []);
    module.controller('footerCtrl', ['$scope', 'appFactory', function($scope, appFactory){
        $scope.appFactory = appFactory();
        $scope.footerText = 'Footer text set from controller';
    }]);
})(angular);