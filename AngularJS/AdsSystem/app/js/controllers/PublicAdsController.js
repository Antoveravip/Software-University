﻿adsApp.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function ($scope, adsData, filter) {
    $scope.ready = false;
    
    $scope.currentPage = 1;
    $scope.startPage = 1;
    $scope.pageSize = 10;

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

    $scope.$on('townClicked', function (event, town) {
        loadAds(filter.getFilterParams());
    });
}]);