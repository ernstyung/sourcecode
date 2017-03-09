app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/products', {
      	templateUrl: 'products.html',
        controller: 'productController'
      })
      .when('/payment', {
      	templateUrl: 'checkout.html',
      	controller: 'paymentController'
      })
      .when('/orderResponse',{
    	templateUrl: 'orderReceived.html',
    	controller: 'productController'
      })
      .when('/login', {
      	templateUrl: 'login.html',
      	controller: 'loginController'
      })
      .when('/', {
      	templateUrl: 'login.html',
      })
	.otherwise({
		redirectTo: ''
	});
}]);

