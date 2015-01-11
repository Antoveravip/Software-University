'use strict';
var adsApp = angular.module('adsApp', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

adsApp.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');
adsApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            pageName: 'home',
            pageTitle: 'Home'
        })
        .when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'RegisterController',
            pageName: 'register',
            pageTitle: 'Registration'
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'LoginController',
            pageName: 'login',
            pageTitle: 'Login'
        })
        .when('/user/home', {
            templateUrl: 'templates/home.html',
            controller: 'UserHomeController',
            pageName: 'userHome',
            pageTitle: 'Home'
        })
        .otherwise({ redirectTo: '/' });

    }])
    .run(["$rootScope", "$location", "authentication", 
        function ($rootScope, $location, authentication) {
            $rootScope.$on("$locationChangeStart", function (event) {
                // no logged user, redirect to /
                if ($location.path().indexOf("/user/") != -1 && !authentication.isLoggedIn()) {
                    $location.path("/");
                }
                // no admin user, redirect to /user
                if ($location.path().indexOf("/admin/") != -1 && !authentication.isAdmin()) {
                    $location.path("/");
                }
            });
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if ($rootScope.isLoggedIn == true) {
                    // is user, redirect to /user
                    if (next.templateUrl === "templates/home.html") {
                        $location.path("/user/home");
                    } else if (next.templateUrl === "templates/login.html") {
                        $location.path("//user/home");
                    } else if (next.templateUrl === "templates/register.html") {
                        $location.path("/user/home");
                    } else {
                    }
                }
            });
     }]);