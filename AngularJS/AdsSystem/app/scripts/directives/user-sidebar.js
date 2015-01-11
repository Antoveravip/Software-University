adsApp.directive('userSidebar', function () {
    return {
        controller: 'UserController',
        restrict: 'AE',
        templateUrl: 'templates/directives/user-sidebar.html',
        replace: true,
    };
});