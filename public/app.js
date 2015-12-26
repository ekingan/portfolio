/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'myApp.controllers'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('/home', {
        url: "/home", 
        templateUrl: 'templates/home',
        controller: 'HomeCtrl'
        })
      .state('/about', {
        url: "/about", 
        templateUrl: 'templates/about',
        controller: 'MainCtrl'
        })
      .state('/resume', {
        url: "/resume", 
        templateUrl: 'templates/resume',
        controller: 'MainCtrl'
        })
       .state('/contact', {
        url: "/contact", 
        templateUrl: 'templates/contact',
        controller: 'MainCtrl'
        })
      .state('posts', {
        url: "/posts",
        templateUrl: 'templates/posts-index',
        controller: 'PostsIndexCtrl'
      });

    $urlRouterProvider.otherwise("/home");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
