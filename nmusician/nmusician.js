(function(angular){
	angular
		.module("music.nmusician", [])
		.config(["$routeProvider", function($routeProvider){
			$routeProvider
				.when("/nmusician", {
					templateUrl: "./nmusician/view.html",
					controller: "nmusician"
				})
		}])
		.controller('nmusician', ['$scope', function($scope){
			
		}])

})(angular)