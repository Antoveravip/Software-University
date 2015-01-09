var adsSystem = angular.module('adsSystemModule', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: MainControler
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: MainControler
    })
    .when('/ads', {
        templateUrl: 'templates/all-ads.html',
        controller: MainControler
    })
});


