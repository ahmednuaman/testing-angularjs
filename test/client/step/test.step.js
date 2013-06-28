describe('The app', function() {
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should be on the home page', function() {
    expect(browser().window().path()).toBe('/home');
  });

  it('should load a menu', function() {
    expect(element('.menu-item').count()).toBeGreaterThan(0);
    expect(element('#menu').count()).toBe(1);
  });
});