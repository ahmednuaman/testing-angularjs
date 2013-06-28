define([
  'config',
  'angular',
  'controller/app-controller'
], function(cfg, A) {
  var routes = function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/assets/partial/home-partial.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  };

  var app = A.module(cfg.ngApp);
  app.config(routes);

  A.bootstrap(document, [cfg.ngApp]);
});