var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.trips='';
    $scope.id=[];
    $scope.ms=[];
    $scope.fl=[];
    $scope.fe=[];
    
    $http({
        url: 'http://localhost:1337/trips',
        method: "GET"
    }).success(function(data, status, headers, config) {
        console.log(data);
        $scope.trips=data;
        for (var i = 0; i < data.length; i++) {
            $scope.id[i]=false;
          $scope.ms[i]=false;
            $scope.fe[i]=false;
            $scope.fl[i]=false;
              
        };
    });

    $scope.getvehicleID=function($val){
       alertify.success( $scope.trips[$val].VehicleId);
    }

    $scope.getFuelEfficiency=function($val){
        $scope.fe[$val]=true;
        alertify.set({ delay: 2000 });
        alertify.log("Check the Fuel efficiency Often", "", 0);
    }
        $scope.getFuelLevel=function($val){
            $scope.fl[$val]=true;
            var value=$scope.trips[$val].FuelLevel;
            if(value<50)
                    alertify.error('Fuel level is less than 50.Refuel the vehicle');
            else
                alertify.success('Sweet!!!.Fuel level is greater than 50.Enjoy your ride');

    }
    $scope.getSpeed=function($val){
        $scope.ms[$val]=true;
       var value=$scope.trips[$val].MaxSpeed;
                   if(value>60)
                    alertify.error('Speed is greater than 60.Avoid High speeds');
            else
                alertify.success('Sweet!!!.Maintain the speed');
    }

});