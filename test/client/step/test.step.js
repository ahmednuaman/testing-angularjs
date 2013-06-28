describe('The app', function() {
  it('should load a menu', function() {
    browser().navigateTo('/');
    sleep(2);

    expect(element('.menu-item').count()).toBeGreaterThan(0);
    expect(element('#menu').count()).toBe(1);
  });
});