var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.users='';
    $http({
        url: 'http://localhost:1337/users',
        method: "GET"
    }).success(function(data, status, headers, config) {
        console.log(data);  
         $scope.users = data;
    });

});