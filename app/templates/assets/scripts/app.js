/* global angular, $ */
(function(angular){
    'use strict';
    var app = angular.module('ng-semantic-sample-app', ['ui.router', 'semantic-ui', 'App.Controller']);
    app.config(['$stateProvider', '$urlRouterProvider', function ( $stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: '/app',
            templateUrl: 'assets/templates/app.html',
            controller: 'appCtrl'
        });
      //add other states here
        $urlRouterProvider
            .when('/', 'app/')
            .otherwise('/app');
    }]);
    app.run([function(){
        $('.dimmer-block').hide();
    }]);
})(angular);