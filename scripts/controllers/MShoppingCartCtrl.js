
/* Define a module */
var shoppingCartModule = angular.module("shoppingCartModule", []);

/* Defining a controller named - ShoppingCartCtrl on the module */
shoppingCartModule.controller("ShoppingCartCtrl", function ($scope, Items) {
    $scope.items = Items;

    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }

    $scope.calculateBill = function () {
        var total = 0;
        for (var i = 0, len = $scope.items.length; i < len; i++) {
            total += ($scope.items[i].quantity * $scope.items[i].price);
        }
        return total;
    }
});

/* Define a new service named Items on the module */
shoppingCartModule.factory("Items", function () {
    return [
        { title: 'Note Books', quantity: 3, price: 30 },
        { title: 'Pens', quantity: 5, price: 10 },
        { title: 'Pencils', quantity: 10, price: 5 }
    ];
});