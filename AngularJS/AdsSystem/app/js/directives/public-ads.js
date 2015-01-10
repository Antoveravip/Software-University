adsApp.directive('publicAds', function () {
    return {
        controller: 'PublicAdsController',
        restrict: 'AE',
        templateUrl: 'templates/directives/public-ads.html',
        replace: true,
    };
});