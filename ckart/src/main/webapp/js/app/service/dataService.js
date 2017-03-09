app.service('dataService',['$http', function($http) {
	var self = this;
	//Web Service URLs
	self.webUrls = {
			baseUrl: "../rest/",
			currentUser: 'currentUser',
			user: "user",
			users: "users",
			updateUsers : "users/update",
			saveUsers : "users/save",
			getPaymentData:'https://sit.norprototype.com/paymentmethodsms/epaymentsparams/clothkart'
	};
	//Web Service Configuration
	self.ajaxCall = function(serviceObject) {
		$http({
			url: serviceObject.url,
			method: serviceObject.method,
			headers: {
				"Content-Type": "application/json"
			},
			data: angular.toJson(serviceObject.data)
		}).success(function(response) {
			if(response) {
				serviceObject.success(response);
			} else {
				window.location.href = window.location.href.split("views")[0] + "views/login.html";
			}
		}).error(function(error) {
			serviceObject.error(error);
		});
	};
	
	self.getPaymentData = function(params) {
		self.ajaxCall({
			url: self.webUrls.getPaymentData,
			method: "POST",
			data: params.data,
			success: params.successCallBack,
			error: params.errorCallBack
		});
	};
}]);