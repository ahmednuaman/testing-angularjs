define([
  'config',
  'angular',
  'service/menu-service',
  'controller/app-controller',
  'controller/menu-controller'
], function(cfg, A) {
  var routes = function($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: '/assets/partial/home-partial.html'
      })
      .otherwise({
        redirectTo: '/home'
      });

    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  };

  var app = A.module(cfg.ngApp);
  app.config(routes);

  A.bootstrap(document, [cfg.ngApp]);
});