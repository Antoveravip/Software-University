/*adsApp.factory('adsData', function ($http, $log) {
    var base = 'http://softuni-ads.azurewebsites.net/api/';
    var pageSize = 10;
    var startPage = 1;
    
    function getAllAds(success) { 
        $http({
            method: 'GET',
            url: base + 'ads' + "?PageSize=" + pageSize + "&StartPage=" + startPage
        })
            .success(function (data, status, headers, config) {
            success(data);
        })
            .error(function (data, status, headers, config) {
            $log.warn(data);
        })
    }
    
    function getAllTowns(success) {
        $http({
            method: 'GET',
            url: base + 'towns'
        })
        .success(function (data, status, headers, config) {
            success(data);
        })
        .error(function (data, status, headers, config) {
            $log.warn(data);
        })
    }
    
    function getAllCategories(success) {
        $http({
            method: 'GET',
            url: base + 'categories'
        })
        .success(function (data, status, headers, config) {
            success(data);
        })
        .error(function (data, status, headers, config) {
            $log.warn(data);
        })
    }

    return {
        getAllAds: getAllAds,
        getAllTowns: getAllTowns,
        getAllCategories: getAllCategories,
    }
        
});*/