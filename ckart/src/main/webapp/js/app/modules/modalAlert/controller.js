(function(){
	angular.module("modalAlert").controller('modalController',["$scope", "$uibModalInstance", "data", function ($scope, $uibModalInstance, data) {
		$scope.init = function() {
			$scope.data = data;
		};

		$scope.cancel = function(reason){
			$uibModalInstance.dismiss(reason);
		};

		$scope.close = function(result){
			$uibModalInstance.close(result);
		};

		$scope.ok = function (result) {
			$uibModalInstance.close(result);
		};

		$scope.yes = function (data) {
			$uibModalInstance.dismiss(data);
			if(angular.isFunction($scope.data.yes)){
				$scope.data.yes(data);
			}
		};

		$scope.no = function (reason) {
			$uibModalInstance.dismiss(reason);
			if(angular.isFunction($scope.data.cancel)){
				$scope.data.cancel();
			}
		};
		
		$scope.save = function(data){
			$uibModalInstance.dismiss(data);
			if(angular.isFunction($scope.data.save)){
				$scope.data.save(data);
			}
		};
		
		$scope.goToPayment = function(data){
			if(angular.isFunction($scope.data.goToPayment)){
				$scope.data.goToPayment(data);
			}
		};
		
		$scope.goToePayment = function(data){
			if(angular.isFunction($scope.data.goToePayment)){
				$scope.data.goToePayment(data);
			}
		};

		$scope.init();
	}]);
}());