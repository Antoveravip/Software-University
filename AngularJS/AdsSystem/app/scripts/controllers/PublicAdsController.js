adsApp.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function ($scope, adsData, filter) {
    $scope.parameters = filter.getParams();

    $scope.ready = false;
    
    $scope.loadAds = function() {
        adsData.getAds($scope.parameters)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });
    }
    
    $scope.loadAds();

    $scope.$on('categoryClicked', function (event, category) {
        $scope.parameters = filter.getParams();
        $scope.loadAds();
    });

    $scope.$on('townClicked', function (event, town) {
        $scope.parameters = filter.getParams();
        $scope.loadAds();
    });
}]);