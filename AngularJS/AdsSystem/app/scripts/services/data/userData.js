adsApp.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {
    var serviceUrl = 'user';
    
    function registerUser(user) {
        return $resource(baseServiceUrl + serviceUrl + "/register")
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(angular.toJson(data));
             });
    }
    
    function loginUser(user) {
        var resource = $resource(baseServiceUrl + serviceUrl + "/login")
            .save(user);

        resource.$promise
            .then(function (data) {
                authentication.saveUser(angular.toJson(data));
        });

        return resource;
    }
    
    function logoutUser(user) {
        var resource = $resource(baseServiceUrl + serviceUrl + "/logout")
            .save(user);
        resource.$promise
            .then(function (data) {
                authentication.removeUser();
        });

        return resource;
    }

    function getAllUsers() {
        return resource.query();
    }
    
    return {
        register: registerUser,
        login: loginUser,
        logout: logoutUser,
        getUsers: getAllUsers
    };
}]);