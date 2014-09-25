'use strict';

angular.module('myApp').controller('homeCtrl', ['$scope','loginService', function($scope,loginService){
	$scope.txt='Page Home';
	$scope.logout=function(){
		loginService.logout();
	}
}])
