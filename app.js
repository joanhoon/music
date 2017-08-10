(function (angular) {
	angular
		.module("music", [
				"ngRoute",
				"common.jsonp",
				"music.homepage",
				// "music.home",
				"music.my",
				"music.friend",
				"music.product",
				"music.nmusician",
				"music.download",
				"music.directives",
			])
		.config(["$locationProvider", function($locationProvider){
			$locationProvider.hashPrefix("")
		}])
		.controller("search", ["$scope", "$location", "$route", function($scope, $location, $route){
			$scope.search = function(){
				var keyword = $scope.keyword;
			}
		}])
})(angular);