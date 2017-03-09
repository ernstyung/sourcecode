
app.controller('productController', ['$scope', '$http', '$rootScope', 'dataService', 'utilService', '$timeout', function($scope, $http, $rootScope, dataService, utilService, $timeout) {
	$scope.paymentGatewayUrl = 'http://www.norprototype.com/payment_gateway/views/index.html';
	$scope.cart = $rootScope.shoppingDetails.cart.cartData;
	$scope.toggleCart = false;
	$scope.ip = '';
	$scope.cartSummary = {
			itemCount : $rootScope.shoppingDetails.cart.cartSummary.itemCount,
			total : $rootScope.shoppingDetails.cart.cartSummary.total
	};
	$scope.init = function() {
		
		$http.get('../data/products.json').success(function (response) {
			$scope.products = response.products;
		});
		$rootScope.isLoggedIn = true;
		if($rootScope.shoppingDetails.userDetails.userEmail === '' || $rootScope.shoppingDetails.userDetails.userEmail === undefined) {
			$rootScope.shoppingDetails.userDetails = utilService.readCookie('user');
		}
	};
	
	$scope.toggleShowCart = function(){
		$scope.toggleCart = !$scope.toggleCart;
	};
	
	$scope.removeProduct = function(index) {
		$scope.cart.splice(index, 1);
	};

	$scope.addToCart = function (product) {
		var found = false;
		$scope.cart.forEach(function (item) {
			if (item.id === product.id) {
				item.quantity = item.quantity + 1;
				found = true;
			}
		});
		if (!found) {
			$scope.cart.push(angular.extend({quantity: 1}, product));
		}
	};

	$scope.getCartSummary = function () {
		var cartSummary = {
				total : 0,
				itemCount : 0
		};
		$scope.cart.forEach(function (product) {
			cartSummary.total += product.price * product.quantity;
			cartSummary.itemCount += product.quantity;
		});
		return cartSummary;
	};

	$scope.checkout = function () {
			$rootScope.shoppingDetails.cart = {
				'cartData': $scope.cart,
				'cartSummary': $scope.getCartSummary(),
				'isFirstOpen':true,
				'goToPay':true,
				'showPay':false,
			};
			utilService.redirect("/payment");
	};		
	
	$scope.continueShopping = function(){
		utilService.redirect("/products");
	};
	
	$scope.init();
}]);
