adsApp.controller('CategoriesController', ['$scope', '$rootScope', 'categoriesData', 'filter', function ($scope, $rootScope, categoriesData, filter) {
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        }, function (error) {
            console.log(error);
        });

    $scope.categoryClicked = function categoryClicked(category) {
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    }
}]);