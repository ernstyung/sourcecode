app.controller('paymentController', ['$scope', '$http', '$rootScope', 'dataService', 'utilService', '$timeout', function($scope, $http, $rootScope, dataService, utilService, $timeout) {

	$scope.init = function(){
		$scope.status = {
				open1 :false,
				open2 :false
		};
		$scope.nordeaWindow = '';
		$scope.showMessage = false;
		$rootScope.isLoggedIn = true;
		$scope.isLoading = false;
	};

	$scope.payCheckOut = function() {
		$scope.status.open1 = false;
		$scope.status.open2 = true;
		$rootScope.shoppingDetails.orderId =  (Math.floor(Math.random() * (10000001 - 1000001 + 1)) + 1000001);
		$rootScope.shoppingDetails.cart.goToPay = false;
		$rootScope.shoppingDetails.cart.showPay = true;
		$rootScope.shoppingDetails.merchantName = 'clothingkart';
		$rootScope.shoppingDetails.merchantId = 'clothingkart';
		$rootScope.shoppingDetails.merchantAgreementCode = 'merchant-b-test';
		$rootScope.shoppingDetails.responseUrl ='http://www.norprototype.com/clothkart/views/index.html#/checkout';
		$rootScope.shoppingDetails.currency = 'EUR';
		$rootScope.shoppingDetails.totalAmount = parseInt($rootScope.shoppingDetails.cart.cartSummary.total, 10)*100;
		$rootScope.shoppingDetails.totalItem = $rootScope.shoppingDetails.cart.cartSummary.itemCount;
		
		 $('<div id="overlay"/>').css({
			 	"position": "absolute", 
			    "width": $(document).width(), 
			    "height": $(document).height(),
			    "z-index": 99999, 
			    "top":0,
			    "left":0,
		        "background": 'white url(../css/img/loader.gif) no-repeat center'
		    }).hide().appendTo('body');
		$('#overlay').show();
		
		var paymentData = {
			'orderGrossAmount': $rootScope.shoppingDetails.totalAmount,
			'orderNetAmount': $rootScope.shoppingDetails.totalAmount,
			'orderVatAmount': $rootScope.shoppingDetails.totalAmount,
			'orderNumber': $rootScope.shoppingDetails.orderId,
			'buyerEmailAddress': $rootScope.shoppingDetails.userDetails.billingEmail,
			'buyerFirstName': $rootScope.shoppingDetails.userDetails.billingFirstName,
			'buyerLastName': $rootScope.shoppingDetails.userDetails.billingLastName,
			'merchantAgreementCode': $rootScope.shoppingDetails.merchantAgreementCode,
			'buyerPhoneNumber': $rootScope.shoppingDetails.userDetails.billingMobile,
			'deliveryAddressPostalCode': $rootScope.shoppingDetails.userDetails.billingPostcode,
			'buyerCity': $rootScope.shoppingDetails.userDetails.billingCity,
			'deliveryAddressLineOne':$rootScope.shoppingDetails.userDetails.billingStreetAddress
		};
		
		dataService.getPaymentData({
			data: paymentData,
			successCallBack: function(data) {
				utilService.paymentFormSubmit(data.ePaymentUrl,data.parameters,'post','_self'); 
			},
			errorCallBack: function(response) {
			}
		});
	};
	
	$scope.continueShopping = function(){
		utilService.redirect("/products");
	};
	
	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

	// Listen to message from child window
	eventer(messageEvent,function(e) {
		$scope.nordeaWindow.close();
		$scope.responseMessage = e.data;
		$scope.$apply(function() {
		  $rootScope.shoppingDetails = {};
	      $rootScope.shoppingDetails.orderId = '';
	      $rootScope.shoppingDetails.cart.cardData = [];
	      $rootScope.shoppingDetails.cart.cartSummary =  {};
	      $rootScope.shoppingDetails.cart.isFirstOpen = true;
	      $rootScope.shoppingDetails.cart.goToPay = true;
	      $rootScope.shoppingDetails.cart.showPay = false;
	      $rootScope.shoppingDetails.totalAmount = 0;
	      $rootScope.shoppingDetails.isPaymentSuccess = false;
	      $rootScope.shoppingDetails.orderDateFinished = "";
	      $scope.showMessage = true;
	      $scope.cart = [];
	      $scope.cartSummary = {};
		});
	},false);
	
	$scope.init();
}]);
