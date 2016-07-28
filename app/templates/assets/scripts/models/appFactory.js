/* global angular */
(function(angular){
    'use strict';
    var module = angular.module('App.Factory', []);
    module.factory('appFactory', [function(){
        var currentInstance = '';
        function AppFactory() {
            this.appWideStrings = '';
        }
        AppFactory.prototype = (function () {
            function getStaticStrings(){
                this.appWideStrings = {name: 'app', author:'shreedhar'};
            }
            return {
                getStaticStrings: getStaticStrings
            };
        })();
        return function () {
            return (function(){
                if(!currentInstance) {
                    return new AppFactory();    
                }
                return currentInstance;
            })();
        };
    }]);
})(angular);