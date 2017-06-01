
var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider){
  $routeProvider
    .when('/',{
        templateUrl: 'partials/login.html',
        controller: 'UsersController as UC'
    })
    .when('/welcome',{
        templateUrl: 'partials/welcome.html',
        controller: 'UsersController as UC'
    })
    .when('/postSurvey',{
        templateUrl: 'partials/postSurvey.html',
        controller: 'UsersController as UC'
    })
    .when('/view/:id',{
        templateUrl: 'partials/voteSurvey.html',
        controller: 'UsersController as UC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
