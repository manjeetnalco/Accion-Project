var app = angular.module('userTable', []);

app.controller('listdata',function($scope, $http){
    $scope.users = [];
    $http.get("http://jsonplaceholder.typicode.com/posts").success(function(response){ 
        $scope.users = response;
    });
	
	$scope.sort = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    }
});