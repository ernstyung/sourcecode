app.controller('loginController', ['$scope', '$http', '$rootScope', 'dataService', 'utilService', function($scope, $http, $rootScope, dataService, utilService) {
	$scope.loginCredentials = {
			username:'',
			password:''
	};
	$scope.users = [];
	$scope.loggedInUser = {};
	
	$scope.init = function() {
		$http.get('../data/consumerDetails.json').success(function (response) {
			$scope.users = response.users;
		});
		$scope.interval = 5000;
		$scope.pics = [{
			url: '../css/img/1.jpg',
			id:0
		},{
			url: '../css/img/2.jpg',
			id:1
		},{
			url: '../css/img/3.jpg',
			id:2
		},{
			url: '../css/img/4.jpg',
			id:3
		}];
		
    };
    
    
    $scope.login = function () {
    	utilService.deleteCookie('user');
    	angular.forEach($scope.users, function(value, key) {
    		if($scope.loginCredentials.username === value.username && $scope.loginCredentials.password === value.password){
    			$rootScope.isLoggedIn = true;
    			$rootScope.shoppingDetails.userDetails = {
					ipAddress : '10.5.115.25',
					userEmail: value.email,
					userId:parseInt("2354"),
					billingStreetAddress : value.address,
					billingCity : value.city,
					billingCompany : '',
					billingFirstName : value.firstName,
					billingLastName : value.lastName,
					billingEmail : value.email,
					billingMobile : value.mobile,
					billingPostcode : value.postalcode,
					billingCountryId : value.country,
					deliveryStreetAddress : value.address,
					deliveryCity : value.city,
					deliveryCompany : '',
					deliveryFirstName : value.firstName,
					deliveryLastName : value.lastName,
					deliveryEmail : value.email,
					deliveryMobile : value.mobile,
					deliveryPostcode : value.postalcode	
    			};
    			utilService.createCookie('user',$rootScope.shoppingDetails.userDetails);
    			utilService.redirect("/products");
        	}
    	});
    	if(!$rootScope.isLoggedIn){
    		$rootScope.isLoggedIn = false;
    		utilService.modalAlert({"title": 'Warning',"body": " Invalid Credentials! ", "size":"sm"});
    	}	
    };
    
    $scope.logout = function () {
    	$rootScope.isLoggedIn = false;
    	utilService.redirect("/login");
    };
    
	$scope.init();
}]);