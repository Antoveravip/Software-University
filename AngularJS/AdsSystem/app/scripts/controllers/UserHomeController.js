adsApp.controller('UserHomeController', ['$scope', '$route', '$location', 'adsData', 'userData', 'authentication', function ($scope, $route, $location, adsData, userData, authentication) {
    $scope.$route = $route;
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