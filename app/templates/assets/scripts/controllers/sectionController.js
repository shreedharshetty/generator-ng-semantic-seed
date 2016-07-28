/* global angular */
'use strict';
(function(angular){
    var module = angular.module('Section.Controller', []);
    module.controller('sectionCtrl', ['$scope', 'appFactory', function($scope, appFactory){
        $scope.appFactory = appFactory();
        $scope.sectionHeading = 'section heading set from controller';
        $scope.icons = [
            { label: '<i class="home icon"></i> Home', click: onHome },
            { label: '<i class="block layout icon"></i> Topics', click: onTopics },
            { label: '<i class="smile icon"></i> Friends', click: onFriends }
        ];
        var onHome = function() {
            alert('Home');
        };
        var onTopics = function() {
            alert('Topics');
        };
        var onFriends = function() {
            alert('Friends');
        };
    }]);
})(angular);