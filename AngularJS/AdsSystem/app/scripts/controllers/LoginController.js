adsApp.controller('LoginController', ['$scope', '$rootScope', '$location', 'userData', 'authentication', function ($scope, $rootScope, $location, userData, authentication) {
    //$scope.pageTitle = 'Login';
    
    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function (data) {
                $rootScope.isLoggedIn = authentication.isLoggedIn();
                $location.path('/user/home');
        });
    }
		
}]);