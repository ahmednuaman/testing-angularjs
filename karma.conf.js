basePath = '.';
frameworks = [
  'jasmine'
];
files = [
  JASMINE,
  JASMINE_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  'assets/vendor/angular/angular.js',
  'assets/vendor/angular-mocks/angular-mocks.js',
  { pattern: 'assets/js/**/*.js', included: false },
  { pattern: 'test/client/**/*.mock.js', included: false },
  { pattern: 'test/client/**/*.spec.js', included: false },
  'test/client/test-main.js'
];
exclude = [
  'assets/js/app.js',
  'assets/js/routes.js'
];
reporters = [
  'progress',
  'junit'
];
junitReporter = {
  outputFile: 'test/report/client-results.xml'
};
port = 9876;
runnerPort = 9100;
colors = true;
logLevel = LOG_INFO;
autoWatch = true;
browsers = [
  'Chrome'
];
captureTimeout = 5000;
singleRun = false;
reportSlowerThan = 500;
preprocessors = {
  // '**/*.coffee': 'coffee'
};
plugins = [
  'karma-jasmine',
  'karma-chrome-launcher',
  'karma-phantomjs-launcher',
  'karma-junit-reporter'
];