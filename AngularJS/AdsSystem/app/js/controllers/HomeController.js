adsApp.controller('HomeController', function ($scope, adsData, $log) {
    $scope.pageTitle = 'Home';

    adsData.getAllAds(function (resp) { 
        $scope.data = resp;
    })
    adsData.getAllTowns(function (resp) {
        $scope.towns = resp;
    })
    adsData.getAllCategories(function (resp) {
        $scope.categories = resp;
    })
		
});