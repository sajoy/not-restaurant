this.restauranteur = angular.module('restauranteur', []);

this.restauranteur.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/restaurants', {
      templateUrl: '../templates/restaurants/index.html',
      controller: 'RestaurantIndexCtrl'
    }).otherwise({
      templateUrl: '../templates/home.html',
      controller: 'HomeCtrl'
    });
  }
]);
