adsApp.controller('RegisterController', ['$scope', 'townsData', 'userData', 'notification', 
    function ($scope, townsData, userData, notification) {
    //$scope.pageTitle = 'Register';
    townsData.getTowns()
        .$promise
        .then(function (data) {
                $scope.towns = data;
            }, function (error) { 
                console.log(error);
        });
    
    $scope.register = function (user) {
        if (user.password != user.confirmPassword) {
            notification.displayErrorMessage("The passwords do not match.");
            return;
        }
        
        userData.register(user, function (data) {
            //notification.displaySuccessMessage("Registration successful.");
            $location.path("/user/home");
        }, function (error) {
            //notification.displayErrorMessage("Registration unsuccessful", error);
        });
    }	
}]);