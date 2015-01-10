﻿//adsApp.factory('authentication', ['localStorageService', function (localStorageService) {
adsApp.factory('authentication', function () {
    var key = 'user';
    
    function saveUserData(data) {
        localStorage.setItem(key, data);
        //localStorageService.set(key, data);
    }
    
    function getUserData() {
        return angular.fromJson(localStorage.getItem(key));
        //localStorageService.get(key);
    }
    
    function removeUserData() {
        localStorage.removeItem(key);
    }
    
    function removeUserData() {
        localStorage.removeItem(key);
    }
    
    function isUserRoleAdmin(user) {
        var isAdmin = getUserData().isAdmin;

        return isAdmin;
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        removeUser: removeUserData,
        getHeaders: getHeaders,
        isAdmin: isUserRoleAdmin
    };

});