(function() {
	angular.module("modalAlert").service("modalService", ["$uibModal", function($uibModal) {
		var Service = {};
		Service.modalAlert = function(data) {//Info Alert
			data.templateUrl = "../js/app/modules/modalAlert/alert_template.html";
			return openModal(data);
		};
		Service.modalConfirm = function(data) {//Confirm Alert
			data.templateUrl = "../js/app/modules/modalAlert/confirm_template.html";
			return openModal(data);
		};
		Service.modalCustom = function(data) {//Custom Alert
			return openModal(data);
		};
		Service.modalDeleteConfirm = function(data){//Delete Token Confirmation Alert
			return openModal(data);
		};
		var openModal = function(data) {//Alert Options
			var modalInstance = $uibModal.open({
				templateUrl: data.templateUrl,
				controller: "modalController",
				size: data.size,
				backdrop: 'static',
				resolve: {
					data: function() {
						return data;
					}
				}
			});
			return modalInstance.result;
		};
		return Service;
	}]);
}());