adsApp.directive('towns', function () {
    return {
        controller: 'TownsController',
        restrict: 'AE',
        templateUrl: 'templates/directives/towns.html',
        replace: true,
    };
});