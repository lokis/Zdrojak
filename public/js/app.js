'use strict';

var zdrojak = angular.module('zdrojak', ['zdrojakServices']);

zdrojak.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl: '/partials/index/index.html', controller: IndexIndexCtrl});
  $routeProvider.when('/pages', {templateUrl: '/partials/pages/index.html', controller: PagesIndexCtrl});
  $routeProvider.when('/pages/new/page', {templateUrl: '/partials/pages/new.html', controller: PagesNewCtrl});
  $routeProvider.when('/pages/:page', {templateUrl: '/partials/pages/show.html', controller: PagesShowCtrl});
  $routeProvider.otherwise({redirectTo: '/'});
});
    
zdrojak.config(function($locationProvider) {
  $locationProvider.html5Mode(true)
});