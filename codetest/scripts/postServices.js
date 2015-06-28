'use strict';

/* Services */

var postServices = angular.module('postServices', ['ngResource']);

postServices.factory('Post', ['$resource',
  function($resource){
    return $resource('../data/posts.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);