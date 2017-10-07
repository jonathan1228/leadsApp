angular.module('leadsApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landingPage.html',
        controller: 'landingPageCtrl'
      })
      .when('/leadsList', {
        templateUrl: 'views/leadsList.html',
        controller: 'leadsListCtrl'
      })
      .when('/leadsDetail/:id', {
        templateUrl: 'views/leadsDetail.html',
        controller: 'leadsDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
