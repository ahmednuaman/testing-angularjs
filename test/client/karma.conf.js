basePath = '../../';
frameworks = [
  'ng-scenario'
];
files = [
  // ANGULAR_SCENARIO,
  'assets/vendor/angular-scenario/angular-scenario.js',
  ANGULAR_SCENARIO_ADAPTER,
  'test/client/**/*.step.js'
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
proxies = {
  '/': 'http://localhost:8000/'
};
urlRoot = '/karma/';
plugins = [
  'karma-ng-scenario',
  'karma-chrome-launcher',
  'karma-phantomjs-launcher',
  'karma-junit-reporter'
];