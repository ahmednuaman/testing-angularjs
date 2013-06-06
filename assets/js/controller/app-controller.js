define(['config', 'angular'], function(cfg, A) {
  var AppController = (function () {
    AppController.$inject = ['$scope'];

    function AppController($scope) {
      this.$scope = $scope;
      this.init();
    }

    AppController.prototype.init = function() {
      console.log(this.$scope);
    };

    return AppController;
  })();

  var app = A.module(cfg.ngApp);
  app.controller('AppController', AppController);
});