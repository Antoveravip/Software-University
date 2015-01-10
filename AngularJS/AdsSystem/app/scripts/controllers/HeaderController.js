adsApp.controller('HeaderController', ['$scope', '$route', 'authentication', function ($scope, $route, authentication) {
    $scope.pageTitle = $route.current.pageTitle;
    $scope.isLoggedIn = authentication.isLoggedIn();
    $scope.user = authentication.getUser();


    /*categoriesData.getCategories()
        .$promise
        .then(function (data) {
        $scope.categories = data;
    }, function (error) {
        console.log(error);
    });
    
    $scope.categoryClicked = function categoryClicked(category) {
        filter.filterByCategory(category);
        $rootScope.$broadcast('categoryClicked', category);
    }*/
}]);