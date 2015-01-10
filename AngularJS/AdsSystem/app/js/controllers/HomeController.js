adsApp.controller('HomeController', ['$scope', 'adsData', 'authentication', function ($scope, adsData, authentication) {
    $scope.pageTitle = 'Home';
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