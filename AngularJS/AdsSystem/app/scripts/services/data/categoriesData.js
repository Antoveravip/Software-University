adsApp.factory('categoriesData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var serviceUrl = 'categories';
    var resource = $resource(baseServiceUrl + serviceUrl);
    
    function getAllCategories() {
        return resource.query();
    }
    
    return {
        getCategories: getAllCategories
    };
}]);