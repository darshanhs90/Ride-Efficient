var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http,$window) {
$scope.username='';
$scope.pwd='';

    $scope.checklogin=function(){
        if($scope.username!='' && $scope.pwd!=''){
           $http({
            url: 'http://localhost:1337/login',
            method: "GET",
            params:{username:$scope.username,pwd:$scope.pwd}
        }).success(function(data, status, headers, config) {
            console.log(data);
            if(data=='1'){
            swal({   title: "Sweet!",   text: "Login Successful",   imageUrl: "images/yay.jpg" });
            window.location.replace('./events.html');
            }
            else{
                swal({   title: "Oops!",   text: "Invalid Credentials",   imageUrl: "images/what.jpg" });
            }
        }).error(function(data){
            swal({   title: "Oops!",   text: "Invalid Credentials",   imageUrl: "images/what.jpg" });
        });
    }
    else{
        swal({   title: "Oops!",   text: "All Fields are Mandatory",   imageUrl: "images/what.jpg" });
    }
}
});