'use strict';
var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
adsApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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

    }])
    .run(function ($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.isLoggedIn == null || $rootScope.isLoggedIn == false) {
            // no logged user, redirect to /login
            if (next.templateUrl === "templates/home.html") {
                $location.path("/");
            } else if(next.templateUrl === "templates/login.html") {
                $location.path("/login");
            } else if (next.templateUrl === "templates/register.html") {
                $location.path("/register");
            } else {
                $location.path("/");
            }
        } else {
            if (next.templateUrl === "templates/home.html") {
                $location.path("/user/home");
            } else {
                $location.path("/user/home");
            }
        }
    });
});