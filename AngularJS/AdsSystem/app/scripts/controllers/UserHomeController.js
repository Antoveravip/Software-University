adsApp.controller('UserHomeController', ['$scope', '$location', 'adsData', 'userData', 'authentication', function ($scope, $location, adsData, userData, authentication) {
    //$scope.isLoggedIn = authentication.isLoggedIn();
    $scope.user = authentication.getUser();
    /*
    $scope.logout = function (user) {
        userData.logout(user)
            .$promise
            .then(function (data) {
                $location.path('/');
        });
    }*/
		
}]);