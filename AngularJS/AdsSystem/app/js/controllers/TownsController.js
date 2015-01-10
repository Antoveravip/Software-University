adsApp.controller('TownsController', ['$scope', 'townsData', function ($scope, townsData) {
    // $scope.towns = townsData.getTowns();
    townsData.getTowns()
        .$promise
        .then(function (data) {
                $scope.towns = data;
            }, function (error) {
                console.log(error);
        });
}]);