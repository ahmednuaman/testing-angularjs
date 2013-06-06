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

      this.$http.jsonp('https://webapi-dev.acetrax.com/platform/navigation.json/A7FF7BF6-AF4E-40F9-94F5-F1A71C24D387?api_key=admin-p0wn3d&callback=JSON_CALLBACK').success(success).error(failure);

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