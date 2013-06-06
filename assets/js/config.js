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

define([], function () {
  return {
    ngApp: 'testing-angularjs'
  };
});