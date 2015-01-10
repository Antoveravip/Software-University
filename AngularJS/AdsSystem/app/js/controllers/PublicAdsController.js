adsApp.controller('PublicAdsController', ['$scope', 'adsData', function ($scope, adsData) {
    adsData.getAds()
    .$promise
    .then(function (data) {
        $scope.ads = data;
    });		
}]);