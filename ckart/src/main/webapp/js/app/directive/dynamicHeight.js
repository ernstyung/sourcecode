app.directive('dynamicHeight', [function () {
	return {
		restrict: "A",
		link: function (scope, element, attrs) {
			element.css('height','calc(100% - ' + attrs.reduce + 'px)');
		}
	}
}]);