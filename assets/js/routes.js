define([
  'config',
  'angular',
  'service/menu-service',
  'controller/app-controller',
  'controller/menu-controller'
], function(cfg, A) {
  var routes = function($routeProvider, $locationProvider) {
    // $routeProvider.when('/home', {
    //   templateUrl: cfg.paths.partial + 'home-partial.html'
    // });
  };

  var app = A.module(cfg.ngApp);
  app.config(routes);

  A.bootstrap(document, [cfg.ngApp]);
});