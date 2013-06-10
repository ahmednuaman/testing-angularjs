basePath = '../../';
frameworks = [
  'ng-scenario'
];
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.step.js'
];
reporters = [
  'progress',
  'junit'
];
junitReporter = {
  outputFile: 'test/report/e2e-results.xml'
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
plugins = [
  'karma-ng-scenario',
  'karma-chrome-launcher',
  'karma-phantomjs-launcher',
  'karma-junit-reporter'
];