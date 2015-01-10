adsApp.directive('publicAds', function () {
    return {
        controller: 'PublicAdsController',
        restrict: 'AE',
        templateUrl: 'templates/public/public-ads.html',
        replace: true,
    };
});