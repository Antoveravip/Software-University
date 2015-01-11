adsApp.controller('LoginController', 
    ['$scope', '$rootScope', '$location', 'userData', 'authentication', 'notification', 
        function ($scope, $rootScope, $location, userData, authentication, notification) {
    //$scope.pageTitle = 'Login';
    
    $scope.login = function (user) {
        userData.login(user, function (data) {
            //notification.displaySuccessMessage("Login successful.");
            $rootScope.isLoggedIn = authentication.isLoggedIn();
            $location.path('/user/home');
        }, function (error) {
            //notification.displayErrorMessage("Login unsuccessful", error);
        });
    };
}]);