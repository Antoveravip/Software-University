adsApp.controller('TownsController', ['$scope', '$rootScope', 'townsData', 'filter', function ($scope, $rootScope, townsData, filter) {
    // $scope.towns = townsData.getTowns();
    $scope.townId = null;

    townsData.getTowns()
        .$promise
        .then(function (data) {
                $scope.towns = data;
            }, function (error) {
                console.log(error);
        });

    $scope.townClicked = function (town) {
        if (town != null) {
            $scope.townId = town.id;
        }
        filter.filterByTown(town);
        $rootScope.$broadcast('townClicked', town);
    }
}]);