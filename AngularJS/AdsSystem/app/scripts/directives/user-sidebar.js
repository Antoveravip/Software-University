adsApp.directive('userSidebar', function () {
    return {
        controller: 'UserHomeController',
        restrict: 'AE',
        templateUrl: 'templates/directives/user-sidebar.html',
        replace: true,
    };
});