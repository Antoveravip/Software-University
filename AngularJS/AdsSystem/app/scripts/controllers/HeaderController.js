adsApp.controller('HeaderController', ['$scope', '$rootScope', '$route', '$location', 'userData', 'authentication', function ($scope, $rootScope, $route, $location, userData, authentication) {
    $scope.pageTitle = $route.current.pageTitle;
    $scope.pageName = $route.current.pageName;
    $scope.isLoggedIn = authentication.isLoggedIn();
    $scope.user = authentication.getUser();

    $scope.logout = function () {
        userData.logout();
        $scope.isLoggedIn = authentication.isLoggedIn();
        $rootScope.isLoggedIn = authentication.isLoggedIn();
        $location.path("/");
    }

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