(function(angular){
    angular
        .module("music.my", [])
        .config(["$routeProvider", function($routeProvider){
            $routeProvider
                .when("/my", {
                    templateUrl: "./my/view.html",
                    controller: "my"
                })
        }])
        .controller("my", ["$scope", function($scope){
            
        }])
})(angular)