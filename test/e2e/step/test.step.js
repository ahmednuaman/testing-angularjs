describe('The app', function() {
  beforeEach(function() {
    browser().navigateTo('/index.html');
  });

  it('should load a menu', function() {
    expect(element('.menu-item').count()).toBeGreaterThan(0);
    expect(element('#menu').count()).toBe(1);
  });
});