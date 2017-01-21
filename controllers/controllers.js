var app = angular.module('theNetwork', ["ngRoute"]);
//configuring routes : 
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	
	.when("/offers",{
		templateUrl : "/views/offers.html"
	})
	.when("/requests",{
		templateUrl : "/views/requests.html"
	})
	
}])
//Requests Controller : 

app.controller('reqCtrl', ['$scope', function($scope){
	$scope.requests = [
  {
  "id":1,
  "description": "it's for bmw",
  "avatar": "images/thumbnails/html5.gif",
  "views":"50",
  "offers": "30",
  "requester": "Hello World"
  }
  ,
  {
  "id":2,
  "description": "it's for renault",
  "avatar": "images/thumbnails/sun.gif",
  "views":"13",
  "offers": "10",
  "requester": "Hello World"
  }
  ];	
}])