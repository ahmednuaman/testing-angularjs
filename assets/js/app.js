require.config({
  baseUrl: 'assets/js/',
  urlArgs: 'x=' +  (new Date()).getTime(),
  paths: {
    'angular': '../vendor/angular/angular'
  },
  shim: {
    'angular': {
      exports: 'angular'
    }
  }
});

require(['config', 'angular'], function(cfg, A) {
  A.module(cfg.ngApp, []);

  require(['routes']);
});