describe("Restauranteur controllers", function() {
  beforeEach(module("restauranteur"));
  return describe("RestaurantIndexCtrl", function() {
    return it("should set restaurants to an empty array", inject(function($controller) {
      var ctrl, scope;
      scope = {};
      ctrl = $controller("RestaurantIndexCtrl", {
        $scope: scope
      });
      return expect(scope.restaurants.length).toBe(0);
    }));
  });
});
