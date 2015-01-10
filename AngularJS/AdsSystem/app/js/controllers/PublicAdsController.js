adsApp.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function ($scope, adsData, filter) {
    $scope.ready = false;
	
    function loadAds(filterParams) {
        filterParams = filterParams || {};

        adsData.getAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });	    
    }

    loadAds();

    $scope.$on('categoryClicked', function (event, category) { 
        loadAds(filter.getFilterParams());
    });
}]);