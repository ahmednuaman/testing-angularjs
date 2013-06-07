define([
  'config',
  'mock/menu-service.mock',
  'service/menu-service'
], function(cfg, mock) {
  var $httpBackend;
  var $injector;
  var menuService;

  beforeEach(module(cfg.ngApp));

  describe('MenuService should make a call to the API server and return response data', function() {
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      menuService = $injector.get('MenuService');

      $httpBackend.whenJSONP(mock.url)
        .respond(mock.response);
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a call to the API', function() {
      $httpBackend.expectJSONP(mock.url);

      menuService.fetch().then(function(data) {
        expect(data).toBeDefined();
        expect(data.content.navigationItems.length)
          .toBe(mock.response.content.navigationItems.length);
      }, this.fail);

      $httpBackend.flush();
    });
  });
});