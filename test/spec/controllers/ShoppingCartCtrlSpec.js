
// Describe the test suite
describe("Shopping Cart", function () {
    var ctrlr, scope;

    // Create mock items
    var mockItems;

    // Load the module - using angularJS module function
    beforeEach(module("shoppingCartModule"));

    // Load the mock items for each test
    beforeEach(function () {
        mockItems = [
                    { title: '1', quantity: 3, price: 30 },
                    { title: '2', quantity: 5, price: 10 },
                    { title: '3', quantity: 10, price: 5 }
        ];
    });

    // Load the controller and use angularJS' inject method to resolve the dependencies
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrlr = $controller("ShoppingCartCtrl", {
            $scope: scope,
            Items: mockItems
        });
    }));

    it("should have 3 items by default", function () {
        expect(scope.items.length).toEqual(3);
    });

    it("should have 2 items after removing one item", function () {
        scope.remove(2);
        expect(scope.items.length).toEqual(2);
    });

    it("should calculate the bill correctly", function () {
        var bill = scope.calculateBill();
        expect(bill).toEqual(190);
    });
});