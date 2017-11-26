'use strict';

var app = angular.module('app', ['ui.router'])

app.config(
  ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      //$locationProvider.html5Mode(true);
      $stateProvider
          .state('app', {
              //abstract: true,
              url: '/app',
              templateUrl: 'app.html'
          })
          .state('app.home', {
              url: '/home',
              templateUrl: 'home.html'
          })
          .state('app.article', {
              url: '/article',
              templateUrl: 'article.html'
          })
          .state('access', {
              url: '/',
              templateUrl: 'welcome.html'
          })
      ;
      $urlRouterProvider.otherwise('/');
  }]);
  