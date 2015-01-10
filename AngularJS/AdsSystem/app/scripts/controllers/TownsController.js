adsApp.controller('TownsController', ['$scope', '$rootScope', 'townsData', 'filter', function ($scope, $rootScope, townsData, filter) {
    // $scope.towns = townsData.getTowns();
    townsData.getTowns()
        .$promise
        .then(function (data) {
                $scope.towns = data;
            }, function (error) {
                console.log(error);
        });

    $scope.townClicked = function (town) {
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked', town);
    }
}]);