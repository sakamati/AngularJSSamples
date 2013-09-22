
/* Defining a controller named - ShoppingCartCtrl */
function ShoppingCartCtrl($scope) {
    $scope.items = [
        { title: 'Note Books', quantity: 3, price: 30 },
        { title: 'Pens', quantity: 5, price: 10 },
        { title: 'Pencils', quantity: 10, price: 5 }
    ];

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
}