describe('The app', function() {
  beforeEach(function() {
    browser().navigateTo('/index.html');
  });

  it('should load a menu', function() {
    expect(element('.menu-item').count()).toBeGreaterThan(0);
  });
});