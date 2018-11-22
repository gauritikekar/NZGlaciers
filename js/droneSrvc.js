myApp.service("DroneDataService", [function(){
	var droneDataSrvc = {};
	
	// directions
	droneDataSrvc.directions = ["North", "South", "East", "West"]
	
	// rectangle coordinates to default values
	 droneDataSrvc.rect = {
		SWx: 0,
		SWy: 0,
		NEx: 0,
		NEy: 0
	};

	// drone position
	droneDataSrvc.dronePosition = {
		x: 0,
		y: 0,
		dir: droneDataSrvc.directions[0]
	}

	return droneDataSrvc;
}]);