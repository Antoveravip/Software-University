adsApp.controller('PublicAdsController', ['$scope', 'adsData', function ($scope, adsData) {
    $scope.ready = false;
    adsData.getAds()
    .$promise
    .then(function (data) {
        $scope.adsData = data;
        $scope.ready = true;
    });		
}]);