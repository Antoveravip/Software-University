adsApp.controller('RegisterController', ['$scope', 'townsData', 'userData', function ($scope, townsData, userData) {
    $scope.pageTitle = 'Register';
    townsData.getTowns()
        .$promise
        .then(function (data) {
                $scope.towns = data;
            }, function (error) { 
                console.log(error);
        });
    
    $scope.register = function (user) {
        userData.register(user);
        $rootScope.isLoggedIn = authentication.isLoggedIn();
        $location.path('/user/home');
    }	
}]);