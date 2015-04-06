this.restauranteur.controller('RestaurantIndexCtrl', [
  '$scope', '$location', '$http', function($scope, $location, $http) {
    $scope.restaurants = [];
    return $http.get('./restaurants.json').success(function(data){
      return $scope.restaurants = data;
    });
    return $scope.viewRestaurant = function(id) {
      return $location.url("/restaurants/" + id);
    };
  }
]);
