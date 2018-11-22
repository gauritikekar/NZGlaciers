myApp.controller("DroneDataCtrl", ["$scope", "DroneDataService", function($scope, DroneDataService){

	// default values
	$scope.NECoord = "";
	$scope.droneDropCoord = "";
	$scope.directions = DroneDataService.directions;
	$scope.droneFinalPosition = "";
	$scope.dirSelected = DroneDataService.directions[0];

	$scope.validate = function(evt){
		// TODO - add validation
		
		// var xyPos = parseInt($scope.NECoord.splt(" "));
		// $scope.error = true;
		// if(xyPos.length == 2 )
		// {
		// 	Math.isNum(xyPos[0] && xyPos[1]) 
		// }
	}

	// function to set rectangle
	function setRect() {
		var xyPos = $scope.NECoord.split(" ");
		DroneDataService.rect.NEx = parseInt(xyPos[0]);
		DroneDataService.rect.NEy = parseInt(xyPos[1]);
		console.log(DroneDataService.rect);	
	}

	// function to get drone drop position
	function droneDropPos(){
		var xyPos = $scope.droneDropCoord.split(" ");
		DroneDataService.dronePosition.x = parseInt(xyPos[0]);
		DroneDataService.dronePosition.y = parseInt(xyPos[1]);
		DroneDataService.dronePosition.dir = $scope.dirSelected;
		console.log(DroneDataService.dronePosition);	
	}

	// move drone position
	function moveDrone(){
		for(var i=0; i<$scope.droneMoveDirection.length; ++i){
			// move ahead if within the rectangle
			if($scope.droneMoveDirection[i] == "M"){
				if(DroneDataService.dronePosition.dir == "North" && 
					DroneDataService.dronePosition.y < DroneDataService.rect.NEy) DroneDataService.dronePosition.y++;
				if(DroneDataService.dronePosition.dir == "South" && 
					DroneDataService.dronePosition.y > 0) DroneDataService.dronePosition.y--;
				if(DroneDataService.dronePosition.dir == "East" && 
					DroneDataService.dronePosition.x < DroneDataService.rect.NEx) DroneDataService.dronePosition.x++;	
				if(DroneDataService.dronePosition.dir == "West" && 
					DroneDataService.dronePosition.x > 0) DroneDataService.dronePosition.x--;
			}
			// move to right
			else if($scope.droneMoveDirection[i] == "R"){
				if(DroneDataService.dronePosition.dir == "North") DroneDataService.dronePosition.dir = "East";
				else if(DroneDataService.dronePosition.dir == "South") DroneDataService.dronePosition.dir = "West";
				else if(DroneDataService.dronePosition.dir == "East") DroneDataService.dronePosition.dir = "South";
				else if(DroneDataService.dronePosition.dir == "West") DroneDataService.dronePosition.dir = "North";
			}
			// move to left
			else if($scope.droneMoveDirection[i] == "L"){
				if(DroneDataService.dronePosition.dir == "North") DroneDataService.dronePosition.dir = "West";
				else if(DroneDataService.dronePosition.dir == "South") DroneDataService.dronePosition.dir = "East";
				else if(DroneDataService.dronePosition.dir == "East") DroneDataService.dronePosition.dir = "North";
				else if(DroneDataService.dronePosition.dir == "West") DroneDataService.dronePosition.dir = "South";
			}
		}

		$scope.droneFinalPosition = DroneDataService.dronePosition.x + " " + DroneDataService.dronePosition.y + " " + DroneDataService.dronePosition.dir;
	}


	$scope.onSubmit = function(){

		setRect();
		droneDropPos();
		moveDrone();
	}

	

}]);