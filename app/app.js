'use strict';
const app = angular.module("AstroApp", ['ngRoute', 'ngAnimate', 'slick'])
.constant('FirebaseURL', 'https://astroapp-e14f8.firebaseio.com');

app.config(['$routeProvider', function ($routeProvider) {
  // routing here
  $routeProvider
    .when('/splash', {
      templateUrl: '/partials/defaultView.html',
      controller: 'defaultCtrl'
    })
    .when('/welcome', {
      templateUrl: '/partials/welcome.html'
    })
    .when('/weather', {
      templateUrl: '/partials/weather.html',
      controller: 'weatherCtrl'
    })
    .when('/locate', {
      templateUrl: '/partials/locateFromSpace.html',
      controller: 'locateFromSpaceCtrl'
    })
    .when('/pictures', {
      templateUrl: 'partials/picturesView.html',
      controller: 'picturesCtrl'
    })
    .when('/profile', {
      templateUrl: 'partials/profileView.html',
      controller: 'profileCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/loginView.html',
      controller: 'loginCtrl'
    })

}]);
