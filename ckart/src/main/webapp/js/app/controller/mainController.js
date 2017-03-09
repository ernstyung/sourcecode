app.controller('mainController', ['$scope', '$rootScope', 'utilService', function($scope, $rootScope, utilService) {
	$scope.init = function() {
		$scope.pageDetails = {
			header: 'header.html',
			footer: 'footer.html'
		};
		$rootScope.isLoggedIn = false;
	};
	$rootScope.shoppingDetails = {
			merchantId : '',
			merchantName:'',
			responseUrl:'',
			orderId:'',
			userDetails:{
				ipAddress : '',
				userEmail:'',
				userId:'',
				billingStreetAddress : '',
				billingCity : '',
				billingCompany : '',
				billingFirstName : '',
				billingLastName : '',
				billingEmail:'',
				billingMobile:'',
				billingPostcode : '',
				billingCountryId : '',
				deliveryStreetAddress : '',
			    deliveryCity : '',
			    deliveryCompany : '',
			    deliveryFirstName : '',
			    deliveryLastName : '',
			    deliveryEmail : '',
			    deliveryMobile : '',
			    deliveryPostcode : ''
			},
			cart : {
				'cartData': [],
				'cartSummary': {
					itemCount : 0,
					total : 0
				},
				'isFirstOpen':true,
				'goToPay':true,
				'showPay':false,
			},
			userCardDetails:{
				channel : '',
				cardType : '',
				ccCvv : '',
				ccExpires : '',
				ccNumbers : '',
				ccOwner : ''
			},
			totalAmount : 0,
			isPaymentSuccess : false,
			orderDateFinished: ""

	};
	

	$scope.init();
}]);
