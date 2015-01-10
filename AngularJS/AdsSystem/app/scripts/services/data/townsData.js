adsApp.factory('townsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var serviceUrl = 'towns';
    var resource = $resource(baseServiceUrl + serviceUrl);

    function getAllTowns() { 
        return resource.query();
    }

    return {
        getTowns: getAllTowns
    };
}]);