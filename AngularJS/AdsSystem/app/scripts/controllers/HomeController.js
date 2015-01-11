adsApp.controller('HomeController', ['$scope', '$route', 'adsData', 'authentication', function ($scope, $route, adsData, authentication) {
    $scope.$route = $route;
    $scope.isLoggedIn = authentication.isLoggedIn();
    /*adsData.getAllAds(function (resp) { 
        $scope.data = resp;
    })
    /*adsData.getAllTowns(function (resp) {
        $scope.towns = resp;
    })
    adsData.getAllCategories(function (resp) {
        $scope.categories = resp;
    })
		*/
}]);