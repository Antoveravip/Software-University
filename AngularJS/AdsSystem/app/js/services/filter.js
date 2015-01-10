adsApp.factory('filter', function () {
    var params = {};
    
    function getParams() { 
        return filterParams;
    }

    function filterByCategory(category) { 
        filterParams.categoryId = category.id;
    }
    
    function filterByTown(town) { 
        filterParams.townId = town.id;
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