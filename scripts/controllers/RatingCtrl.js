
/* Define a module */
var ratingDemoModule = angular.module("ratingModule", ['ratingModule.directive']);

/* Defining a controller named - ShoppingCartCtrl on the module */
ratingDemoModule.controller("ratingCtrl", function ($scope) {
    $scope.ratingValue = 3;
    $scope.ratingValue1 = 5;
    $scope.ratingValue2 = 8;
    $scope.ratingValue3 = 12;
});