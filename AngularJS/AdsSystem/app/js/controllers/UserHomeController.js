adsApp.controller('UserHomeController', ['$scope', '$location', 'adsData', function ($scope, $location, adsData) {
    $scope.pageTitle = 'Home';
    $scope.username = 
    
    $scope.login = function (user) {
        userData.login(user)
            .$promise
            .then(function (data) {
            $location.path('/');
        });
    }
		
}]);