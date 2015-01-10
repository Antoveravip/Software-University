adsApp.controller('PublicAdsController', ['$scope', 'adsData', function ($scope, adsData) {
    
    $scope.login = function (user) {
        userData.login(user);
    }
		
}]);