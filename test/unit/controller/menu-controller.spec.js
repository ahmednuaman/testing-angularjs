define([
  'config',
  'mock/menu-service.mock',
  'service/menu-service',
  'controller/menu-controller'
], function(cfg, mock) {
  var $controller;
  var $httpBackend;
  var $scope;
  var menuController;
  var menuService;

  beforeEach(module(cfg.ngApp));

  describe('MenuController should use MenuService to fetch the menu data and then build our menu items', function() {
    beforeEach(inject(function($injector) {
      $controller = $injector.get('$controller');
      $httpBackend = $injector.get('$httpBackend');
      $scope = $injector.get('$rootScope');
      menuService = $injector.get('MenuService');

      $httpBackend.whenJSONP(mock.url)
        .respond(mock.response);
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a call to the API', function() {
      var scope = $scope.$new();

      $httpBackend.expectJSONP(mock.url);

      menuController = $controller('MenuController', {
        $scope: scope
      });

      $httpBackend.flush();

      expect(scope.menuItems.length)
        .toBe(mock.response.content.navigationItems.length);
    });
  });
});