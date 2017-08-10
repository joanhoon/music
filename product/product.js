(function(angular){
	angular
		.module("music.product", [])
		.config(["$routeProvider", function($routeProvider){
			$routeProvider
				.when("/product", {
					templateUrl: "./product/view.html",
					controller: "product"
				})
		}])
		.controller('product', ['$scope', function($scope){
			
		}])

})(angular)