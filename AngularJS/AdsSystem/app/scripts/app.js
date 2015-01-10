'use strict';
//var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule']);
var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

//adsApp.config(['$routeProvider', 'localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {
adsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController',
        pageName: "home",
        pageTitle: "Home"
    })
    .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController',
        pageName: "register",
        pageTitle: "Registration"
    })
    .when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        pageName: "login",
        pageTitle: "Login"
    })
    .when('/user/home', {
        templateUrl: 'templates/home.html',
        controller: 'UserHomeController',
        pageName: "userHome",
        pageTitle: "Home"
    })
    .otherwise({ redirectTo: '/' });
    
    // Web storage settings
    //localStorageServiceProvider.setStorageType('sessionStorage');
}]);