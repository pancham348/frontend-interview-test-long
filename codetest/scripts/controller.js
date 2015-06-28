'use strict';

/* Controllers */

var postControllers = angular.module('postControllers', []);



networkApp.controller('PostListCtrl', function ($scope, $http) {
  $http.get('data/posts.json').success(function(data) {
    $scope.posts = data;
  });
  
	$scope.Math = window.Math;
  // $scope.orderProp = 'age';
});

var userControllers = angular.module('userControllers', []);

networkApp.controller('UserCtrl', function ($scope, $http) {
  $http.get('data/users.json').success(function(data) {
    $scope.users = data;
  });

  $scope.calcId = function(id){
  	$scope.adjustedId = id - 1;
  };
});