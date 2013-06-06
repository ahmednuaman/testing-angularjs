define(['config', 'angular'], function(cfg, A) {
  var MenuController = (function () {
    MenuController.$inject = ['$scope'];

    function MenuController($scope) {
      this.$scope = $scope;
      this.init();
    }

    MenuController.prototype.init = function() {
      console.log(this.$scope);
    };

    return MenuController;
  })();

  var app = A.module(cfg.ngApp);
  app.controller('MenuController', MenuController);
});