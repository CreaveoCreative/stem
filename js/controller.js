//////////////////////////////////////////////////////////////

var stemHub = angular.module('stem', ['ngRoute']);

stemHub.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/steming', {
                templateUrl: 'views/steming.html'
            })
            .when('/donate', {
                templateUrl: 'views/donate.html'
            })
            .when('/stemstars', {
                templateUrl: 'views/stemstars.html'
            })
            .when('/program', {
                templateUrl: 'views/programs.html'
            })
            .when('/stemspire', {
                templateUrl: 'views/stemspire.html'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html'
            })
            .when('/volunteer', {
                templateUrl: 'views/volunteer.html'
            })
            .when('/event', {
                templateUrl: 'views/event.html'
            })
            .when('/stemscholar', {
                templateUrl: 'views/stemscholar.html'
            })
            .when('/contributor', {
                templateUrl: 'views/contributor.html'
            })
            .otherwise({ redirectTo: '/' });

            $locationProvider.html5Mode(true).hashPrefix('!');
    }]);

stemHub.controller('stemController', function ($scope) {
        var self = this;

});