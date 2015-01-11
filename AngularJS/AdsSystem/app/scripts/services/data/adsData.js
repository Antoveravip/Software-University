adsApp.factory('adsData', ['$resource', 'baseServiceUrl', 'authentication', function ($resource, baseServiceUrl, authentication) {
    var serviceUrl = 'ads';
    var userServiceUrl = 'user/ads'

    var adsResource = $resource(baseServiceUrl + serviceUrl, null, {
        "all": {
            method: "GET"
        }
    });
    
    var userAdsResource = $resource(baseServiceUrl + userServiceUrl + ":id", null, {
        "publish": {
            method: "POST",
            headers: authentication.getHeaders()
        },
        "userAds": {
            method: "GET",
            headers: authentication.getHeaders(),
        },
        "deactivate": {
            method: "PUT",
            url: baseServiceUrl + userServiceUrl + "deactivate/:id",
            params: { id: "@id" },
            headers: authentication.getHeaders()
        },
        "update": {
            method: "PUT",
            params: { id: "@id" },
            headers: authentication.getHeaders()
        },
        "delete": {
            method: "DELETE",
            params: { id: "@id" },
            headers: authentication.getHeaders()
        }
    });

    function getAllAds(params, success, error) {
        return adsResource.all(params, success, error);
    }
    
    function deactivateAdById(id, success, error) {
        return userAdsResource.deactivate({ id: id }, success, error);
    }
    
    function getUserAds(params, success, error) {
        return userAdsResource.userAds(params, success, error);
    }
    
    function addAd(ad, success, error) {
        return userAdsResource.publish(ad, success, error);
    }
    
    function updateAd(ad, success, error) {
        return userAdsResource.update(ad, success, error);
    }

    function deletAd(ad, success, error) {
        return userAdsResource.delete(ad, success, error);
    }
        
    return {
        add: addAd, // Create
        getAds: getAllAds, // Read
        getUserAds: getUserAds, // Read
        updateAd: updateAd, // Update
        deactivate: deactivateAdById, // Update
        deleteAd: deletAd // Delete
    };
}]);