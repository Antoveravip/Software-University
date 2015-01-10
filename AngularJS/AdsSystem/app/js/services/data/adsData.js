adsApp.factory('adsData', ['$resource', 'baseServiceUrl', function ($resource, baseServiceUrl) {
    var serviceUrl = 'ads';
    var resource = $resource(baseServiceUrl + serviceUrl + ':adId', { adId: '@id' }, {
        update: { method: 'PUT' }
    });
    
    function getAllAds(filterParams) {
        return resource.get(filterParams);
    }
    
    function editAd(adId, ad) {
        return resource.update({ id: adId }, ad);
    }
    
    function getAdById(adId) {
        return resource.get({ id: adId });
    }
    
    function addAd(ad) { 
        return resource.save(ad);
    }
    
    function deletAd(adId) { 
        return resource.delete({ id: adId });
    }
    
    return {
        add: addAd, // Create
        getAds: getAllAds, // Read
        getAdById: getAdById, // Read
        edit: editAd, // Update
        delete: deletAd // Delete
    };
}]);