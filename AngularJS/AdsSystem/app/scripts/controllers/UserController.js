adsApp.controller('UserController', 
    ['$scope', '$route', '$routeParams', '$location', '$timeout', 'adsData', 'townsData', 'categoriesData', 'authentication', 'notification',
        function ($scope, $route, $routeParams, $location, $timeout, adsData, townsData, categoriesData, authentication, notification) {
    //$scope.$route = $route;
    $scope.user = authentication.getUser();

    $scope.newAd = {
        townId: null,
        categoryId: null
    };

    townsData.getTowns()
        .$promise
        .then(function (data) {
             $scope.towns = data;
        }, function (error) {
            console.log(error);
    });

    categoriesData.getCategories()
        .$promise
        .then(function (data) {
            $scope.categories = data;
        }, function (error) {
            console.log(error);
    });

    $scope.cancel = function () {
        $location.path("/user/ads");
    };

    $scope.publishAd = function () {
        adsData.add($scope.newAd, function (data) {
            notification.displaySuccessMessage("Advertisement submitted for approval. Once approved by an administrator, it will be published.");
            $timeout(function () {
                $location.path("/user/ads");
            }, 5000);
        }, function (error) {
            notification.displayErrorMessage("Advertisement could not be published", error);
        });
    };
    
    $scope.fileSelected = function (fileInputField, edit) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                if (edit) {
                    $scope.currentAd.changeImage = true;
                    $scope.currentAd.imageDataUrl = reader.result;
                }
                else {
                    $scope.newAd.imageDataUrl = reader.result;
                }
                
                $scope.$apply();
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };
    
    $scope.currentAd = {
        categoryId: null,
        townId: null
    };

    $scope.currentAdId = $routeParams.id;
    
    if ($scope.currentAdId) {
        adsData.getUserAds({ id: $scope.currentAdId }, function (data) {
            $scope.currentAd = data;
        });
    }

    $scope.removeImage = function () {
        $scope.currentAd.changeImage = true;
        $scope.currentAd.imageDataUrl = null;
        $(".image-box").html();
        notification.displaySuccessMessage("The image will be removed after the ad has been saved.");
    }

    $scope.updateAd = function (currentAd) {
        if (currentAd.imageDataUrl == "images/no-photo.png") {
            currentAd.imageDataUrl = null;
        }
        
        adsData.updateAd(currentAd, function (data) {
            notification.displaySuccessMessage("Ad edited successfully. Don't forget to submit it for publishing.");
            $timeout(function () {
                $location.path("/user/ads");
            }, 5000);
        }, function (error) {
            notification.displayErrorMessage("Ad could not be edited", error);
        });
    }

    $scope.deleteAd = function (ad) {
        adsData.deleteAd(ad, function (data) {
            notification.displaySuccessMessage("Ad deleted successfully.");
            $timeout(function () {
                $location.path("/user/ads");
            }, 5000);
        }, function (error) {
            notification.displayErrorMessage("Ad could not be deleted", error);
        });
    }

    $scope.getUserAds = function () {
        adsData.getUserAds($scope.parameters, function (data) {
            $scope.adsData = data;
        });
    }
    
    $scope.getUserAds();

    $scope.deactivateAd = function (id) {
        adsData.deactivate(id, function (data) {
            notification.displaySuccessMessage("Advertisement deactivated successfully.");
            $scope.getUserAds();
        }, function (error) {
            notification.displaySuccessMessage("Advertisement could not be deactivated.");
            $scope.getUserAds();
        });
    }
		
}]);