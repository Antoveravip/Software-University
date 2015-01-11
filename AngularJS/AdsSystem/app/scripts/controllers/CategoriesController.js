adsApp.controller('CategoriesController', ['$scope', '$rootScope', 'categoriesData', 'filter', function ($scope, $rootScope, categoriesData, filter) {
    $scope.categoryId = null;
    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        }, function (error) {
            console.log(error);
        });

    $scope.categoryClicked = function categoryClicked(category) {
        if (category != null) {
            $scope.categoryId = category.id;
        } else { 
            $scope.categoryId = null;
        }
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    }
}]);