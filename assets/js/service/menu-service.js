define(['config', 'angular'], function(cfg, A) {
  var MenuService = (function(){
    MenuService.$inject = ['$q', '$http'];

    function MenuService($q, $http) {
      this.$q = $q;
      this.$http = $http;
    }

    MenuService.prototype.fetch = function() {
      var dfd = new this.$q.defer();
      var success = A.bind(this, this.handleSuccess, dfd);
      var failure = A.bind(this, this.handleFailure, dfd);

      this.$http.jsonp('https://gdata.youtube.com/feeds/api/videos?q=skateboarding+dog&v=2&alt=jsonc&callback=JSON_CALLBACK').success(success).error(failure);

      return dfd.promise;
    };

    MenuService.prototype.handleSuccess = function(dfd, response) {
      dfd.resolve(response);
    };

    MenuService.prototype.handleFailure = function(dfd) {
      dfd.reject();
    };

    return MenuService;
  })();

  var app = A.module(cfg.ngApp);
  app.service('MenuService', MenuService);
});