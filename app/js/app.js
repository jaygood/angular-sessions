'use strict';
// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      })
      .when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .otherwise({redirectTo: '/login'});
  }])

  .run(function($rootScope, $location, loginService){
  	var routespermission=['/home'];  //route that require login
  	$rootScope.$on('$routeChangeStart', function(){
  		if( routespermission.indexOf($location.path()) !=-1){
  				if(!loginService.islogged()) {
            $location.path('/login');
            alert('you are prevented access');
          }
  		}
  	});
  });
