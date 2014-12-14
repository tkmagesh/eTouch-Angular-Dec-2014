'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.service("taskService", function(){
	this.getAll = function(){};
})
.controller('View2Ctrl', function($scope, taskService) {
	$scope.message = "Welcome";

	taskService.getAll($scope.message);
	
	$scope.setMessage = function(msg){
		$scope.message = msg;
	}
});