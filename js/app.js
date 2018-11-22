var myApp = angular.module('DroneApp',["ngRoute"]);

myApp.config(function($routeProvider){

	$routeProvider
	.when("/", {
		templateUrl: "views/dronePosition.html",
		controller: "DroneDataCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
});