'use strict';

angular.module('uiApp', []).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/myhome', {
      templateUrl: 'views/myhome.html',
      controller: 'MyhomeCtrl'
    })
    .when('/templ', {
      templateUrl: 'views/templ.html',
      controller: 'TemplCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
