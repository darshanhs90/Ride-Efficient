var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http,$window) {
	$scope.vehicles='';
	$scope.fe=[];
	$scope.fl=[];
	
	$http({
		url: 'http://localhost:1337/vehicles',
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


	//swal({   title: "Sweet!",   text: "Here's a custom image.",   imageUrl: "images/yay.jpg" });
	//swal({   title: "Sweet!",   text: "Here's a custom image.",   imageUrl: "images/what.jpg" });

});