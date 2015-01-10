adsApp.directive('categories', function () {
    return {
        controller: 'CategoriesController',
        restrict: 'AE',
        templateUrl: 'templates/directives/categories.html',
        replace: true,
    };
});