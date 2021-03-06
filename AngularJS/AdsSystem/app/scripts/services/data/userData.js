﻿adsApp.factory('userData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {
    var serviceUrl = 'user';
    
    function registerUser(user, success, error) {
        return $resource(baseServiceUrl + serviceUrl + "/register")
            .save(user)
            .$promise
            .then(function (data) {
                authentication.saveUser(angular.toJson(data));
             });
    }
    
    function loginUser(user, success, error) {
        var resource = $resource(baseServiceUrl + serviceUrl + "/login")
            .save(user);

        resource.$promise
            .then(function (data) {
                authentication.saveUser(angular.toJson(data));
        });

        return resource;
    }
    
    function logoutUser() {
        authentication.removeUser();
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