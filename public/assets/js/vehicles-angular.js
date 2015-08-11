var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http,$window) {
	$scope.vehicles='';
	$scope.fe=[];
	$scope.fl=[];
	
	$http({
		url: 'http://rideefficient.mybluemix.net/vehicles',
		method: "GET"
	}).success(function(data, status, headers, config) {
		console.log(data);
		$scope.vehicles=data;
		for (var i = 0; i < data.length; i++) {
			$scope.fe[i]=false;
			$scope.fl[i]=false;	
		};
		swal({   title: "Sweet!",   text: "Data Load successful",   imageUrl: "images/yay.jpg" });
	});
	$scope.getLocation=function($index){
		var link="http://maps.google.com/?q="+$scope.vehicles[$index].LastLocation.Lat+','+$scope.vehicles[$index].LastLocation.Lng;
		$window.open(link);
	};

	$scope.getFuelLevel=function($val){
		$scope.fl[$val]=true;
		if($scope.vehicles[$val].FuelLevel>60)
			swal({   title: "Sweet!",   text: "Maintain the fuel level",   imageUrl: "images/yay.jpg" });
		else
			swal({   title: "Oops!",   text: "Refuel ASAP",   imageUrl: "images/what.jpg" });

	}
	$scope.getFuelEfficiency=function($val){
		$scope.fe[$val]=true;
		if($scope.vehicles[$val].FuelEfficiency>60)
			swal({   title: "Sweet!",   text: "Maintain the fuel Efficiency",   imageUrl: "images/yay.jpg" });
		else
			swal({   title: "Oops!",   text: "Efficiency deteriorating.Service the car ASAP",   imageUrl: "images/what.jpg" });

	}


});