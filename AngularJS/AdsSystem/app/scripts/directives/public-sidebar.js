adsApp.directive('publicSidebar', function () {
    return {
        controller: 'HomeController',
        restrict: 'AE',
        templateUrl: 'templates/directives/public-sidebar.html',
        replace: true,
    };
});