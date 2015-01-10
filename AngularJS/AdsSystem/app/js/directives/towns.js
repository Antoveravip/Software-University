adsApp.directive('towns', function () {
    return {
        controller: 'TownsController',
        restrict: 'AE',
        templateUrl: 'templates/public/towns.html',
        replace: true,
    };
});