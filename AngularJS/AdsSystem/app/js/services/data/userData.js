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
    
    }
    
    function logoutUser(user) { 
    
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