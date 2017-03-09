app.service('utilService',['$location', '$window', '$sce', '$routeParams', 'modalService', function($location, $window, $sce, $routeParam, modal) {
	var self = this;
	self.user = null;

	//Set User Details
	self.setUser = function(user) {
		self.user = user;
	};
	//Get User Details
	self.getUser = function() {
		return self.user;
	};
	
	//Redirect
	self.redirect = function(url) {
		$location.path(url);
	};
	
	//Open
	self.open = function(url, target) {
		window.open(url, target);
	};
	
	//TrustAsResourceUrl
	self.getTrustAsResourceUrl = function(url) {
		return $sce.trustAsResourceUrl(url);
	};
	
	//getRouteParams
	self.getRouteParams = function() {
		return $routeParams;
	};
	
	//get URL
	self.getURL = function() {
		return $location.path();
	};
	
	//get Alert Modal Service
	self.modalAlert = function(params){
		return modal.modalAlert(params);
	};
	
	//get Custom Modal Service
	self.modalCustom = function(params){
		return modal.modalCustom(params);
	};
	
	self.createCookie = function(name, value) {
	  var cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
	  document.cookie = cookie;
	}
	
	self.readCookie = function(name) {
	 var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
	 result && (result = JSON.parse(result[1]));
	 return result;
	}
	
	self.deleteCookie = function(name) {
		document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
	}
	
	self.paymentFormSubmit = function(path, params, method, target) {
	    method = method || "post";
	    var form = document.createElement("form");
	    form.setAttribute("id", "paymentForm");
	    form.setAttribute("method", method);
	    form.setAttribute("action", path);
	    form.setAttribute("target", target);

	    var addField = function( key, value ){
	        var hiddenField = document.createElement("input");
	        hiddenField.setAttribute("type", "hidden");
	        hiddenField.setAttribute("name", key);
	        hiddenField.setAttribute("value", value );

	        form.appendChild(hiddenField);
	    }; 

	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            if( params[key] instanceof Array ){
	                for(var i = 0; i < params[key].length; i++){
	                    addField( key, params[key][i] )
	                }
	            }
	            else{
	                addField( key, params[key] ); 
	            }
	        }
	    }
	    
	    var submitButton = document.createElement("input");
	    submitButton.setAttribute("type", "submit");
	    submitButton.setAttribute("style", "visibility: hidden;");
	    submitButton.setAttribute("value", "Submit" );
	    form.appendChild(submitButton);
	    document.body.appendChild(form);
	    document.getElementById("paymentForm").submit();
	}

}]);