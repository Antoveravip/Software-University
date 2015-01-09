adsApp.directive('leftPublicSidebar', function () {
    return {
        controller: 'HomeController',
        restrict: 'AE',
        templateUrl: 'templates/public/left-sidebar.html',
        replace: true,
    };
});