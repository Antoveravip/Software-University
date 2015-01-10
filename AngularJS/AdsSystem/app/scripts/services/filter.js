adsApp.factory('filter', function () {
    var params = {};
    
    function getParams() { 
        return params;
    }

    function filterByCategory(category) {
        if (category == null) { 
            params.categoryId = null;
        } else { 
            params.categoryId = category.id;
        }        
    }
    
    function filterByTown(town) {
        if (town == null) {
            params.townId = null;
        } else {
            params.townId = town.id;
        }        
    }
    
    function setPageParams() {
        // TODO;
    }

    return {
        getParams: getParams,
        setPageParams: setPageParams,
        filterByCategory: filterByCategory,
        filterByTown: filterByTown
    };
});