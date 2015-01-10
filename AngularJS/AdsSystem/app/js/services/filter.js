adsApp.factory('filter', function () {
    var filterParams = {};
    
    function getFilterParams() { 
        return filterParams;
    }

    function filterByCategory(category) { 
        filterParams.categoryId = category.id;
    }
    
    function filterByTown(town) { 
        filterParams.townId = town.id;
    }

    return {
        getFilterParams: getFilterParams,
        filterByCategory: filterByCategory,
        filterByTown: filterByTown
    };
});