require(['config'], function(cfg) {
  require(['angular'], function(A) {
    A.module(cfg.ngApp, []);

    require(['routes']);
  });
});