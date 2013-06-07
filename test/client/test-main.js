var tests = Object.keys(window.__karma__.files).filter(function(file) {
  return /(mock|spec)\.js$/.test(file);
});

requirejs.config({
  baseUrl: '/base/assets/js/',
  paths: {
    angular: '../vendor/angular/angular',
    mock: '../../test/client/mock'
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  },
  deps: tests,
  callback: window.__karma__.start
});

require(['config', 'angular'], function(cfg, A) {
  A.module(cfg.ngApp, []);
  A.bootstrap(document, [cfg.ngApp]);
});