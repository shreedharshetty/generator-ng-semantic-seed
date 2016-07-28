/* global angular */
(function(angular){
    'use strict';
    var module = angular.module('App.Controller', ['App.Factory', 'Header.Controller', 'Section.Controller', 'Footer.Controller']);
    module.controller('appCtrl', ['$scope', 'appFactory', function($scope, appFactory){
        $scope.appFactory = appFactory();
        $scope.appFactory.getStaticStrings();
    }]);
})(angular);