'use strict';
var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

adsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .otherwise({redirectTo: '/'});
}]);