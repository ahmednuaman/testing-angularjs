define([
  'config',
  'angular',
  'controller/menu-controller'
], function(cfg, A) {
  var AppController = (function () {
    AppController.$inject = ['$scope'];

    function AppController($scope) {
      this.$scope = $scope;
      this.init();
    }

    AppController.prototype.init = function() {
      this.$scope.menuPartial = 'assets/partial/menu-partial.html';
    };

    return AppController;
  })();

  var app = A.module(cfg.ngApp);
  app.controller('AppController', AppController);
});