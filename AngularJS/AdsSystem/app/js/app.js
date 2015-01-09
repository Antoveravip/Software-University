'use strict';
var adsApp = angular.module('adsApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    })
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'HomeController'
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'HomeController'
    })
    .otherwise({redirectTo: '/'});
}]);