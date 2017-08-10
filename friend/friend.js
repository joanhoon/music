(function(angular){
    angular
        .module('music.friend', [])
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/friend', {
                    templateUrl: "./friend/view.html",
                    controller: 'friend'
                })
        }])
        .controller('friend', ["$scope", function($scope){

        }])
})(angular)   