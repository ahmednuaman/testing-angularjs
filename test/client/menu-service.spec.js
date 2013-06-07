define([
  'config',
  'service/menu-service'
], function(cfg) {
  var response = {"content":{"navigationItems":[{"label":"Most Popular","links":[{"rel":"top","href":"https://webapi-qa.acetrax.com/catalog/top.json/30c2f14f-40ea-48e7-92ad-3e2e624b8cd3/most-popular","method":"GET","needsAuthentication":false}]},{"label":"Family","links":[{"rel":"category","href":"https://webapi-qa.acetrax.com/catalog/category.json/7a9740e4-d7f2-425a-a426-a7353e87e751/family","method":"GET","needsAuthentication":false}]},{"label":"Comedy","links":[{"rel":"category","href":"https://webapi-qa.acetrax.com/catalog/category.json/8d1b8c5b-1a69-4929-9845-9c8dce6b5c39/comedy","method":"GET","needsAuthentication":false}]}]},"meta":{"httpCode":200}};
  var url = 'https://webapi-dev.acetrax.com/platform/navigation.json/A7FF7BF6-AF4E-40F9-94F5-F1A71C24D387?api_key=admin-p0wn3d&callback=JSON_CALLBACK';
  var $httpBackend;
  var $injector;
  var menuService;

  beforeEach(module(cfg.ngApp));

  describe('MenuService should make a call to the API server and return response data', function() {
    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      menuService = $injector.get('MenuService');

      $httpBackend.whenJSONP(url)
        .respond(response);
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make a call to the API', function() {
      var data;

      runs(function() {
        $httpBackend.expectJSONP(url);

        menuService.fetch().then(function(responseData) {
          data = responseData;
        }, this.fail);

        $httpBackend.flush();
      });

      waits(250);

      runs(function() {
        expect(data).toBeDefined();
        expect(data.content.navigationItems.length)
          .toBe(response.content.navigationItems.length);
      });
    });
  });
});