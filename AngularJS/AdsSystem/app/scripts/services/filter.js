adsApp.factory('filter', function () {
    var params = {
        startPage: 1,
        pageSize: 10
    };
    
    function getParams() { 
        return params;
    }

    function filterByCategory(category) {
        if (category == null) {
            params.categoryId = null;
            params.startPage = 1;
        } else {
            params.categoryId = category.id;
            params.startPage = 1;
        }        
    }
    
    function filterByTown(town) {
        if (town == null) {
            params.townId = null;
            params.startPage = 1;
        } else {
            params.townId = town.id;
            params.startPage = 1;
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