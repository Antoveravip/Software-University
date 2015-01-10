adsApp.directive('mainHeader', function () {
    return {
        controller: 'HeaderController',
        restrict: 'AE',
        templateUrl: 'templates/directives/header.html',
        replace: true,
    };
});