adsApp.directive('categories', function () {
    return {
        controller: 'CategoriesController',
        restrict: 'AE',
        templateUrl: 'templates/public/categories.html',
        replace: true,
    };
});