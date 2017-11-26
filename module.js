'use strict';

var app = angular.module('app', ['ui.router'])

app.config(
  ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      //$locationProvider.html5Mode(true);
      $stateProvider
          .state('app', {
              //abstract: true,
              url: '/app',
              templateUrl: 'tpl/app.html'
          })
          .state('app.home', {
              url: '/home',
              templateUrl: 'tpl/home.html'
          })
          .state('app.article', {
              url: '/article',
              templateUrl: 'tpl/article.html'
          })
          .state('access', {
              url: '/',
              templateUrl: 'tpl/welcome.html'
          })
      ;
      $urlRouterProvider.otherwise('/');
  }]);
  