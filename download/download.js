(function(angular){
	angular
		.module("music.download", [])
		.config(["$routeProvider", function($routeProvider){
			$routeProvider
				.when("/download", {
					templateUrl: "./download/view.html",
					controller: "download"
				})
		}])
		.controller('download', ['$scope', function($scope){
			
		}])

})(angular)