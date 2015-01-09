adsApp.controller('RegisterController', ['$scope', 'townsData', function ($scope, townsData) {
    $scope.pageTitle = 'Register';
    townsData.getTowns()
        .$promise
        .then(function (data) {
            $scope.towns = data;
            console.log(data);
        });
    
    $scope.register = function (user) { 
        console.log(user);
        //userData.register(user);
    }


		
}]);