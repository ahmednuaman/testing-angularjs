define(['config', 'angular'], function(cfg, A) {
  var MenuController = (function () {
    MenuController.$inject = ['$scope', 'MenuService'];

    function MenuController($scope, menuService) {
      this.$scope = $scope;
      this.menuService = menuService;
      this.init();
    }

    MenuController.prototype.init = function() {
      this.menuService.fetch().then(A.bind(this, this.handleResponse));
    };

    MenuController.prototype.handleResponse = function(response) {
      this.$scope.menuItems = response.content.navigationItems;
    };

    return MenuController;
  })();

  var app = A.module(cfg.ngApp);
  app.controller('MenuController', MenuController);
});