const ngModuleName = 'formlyKoapp';
const angular = require('./angular-fix');
const ngModule = angular.module(ngModuleName, [require('angular-formly')]);
ngModule.constant(
  'formlyKoappApiCheck',
  require('api-check')({
    output: {
      prefix: 'angular-formly-koapp'
    }
  })
);
ngModule.constant('formlyKoappVersion', VERSION);

require('./wrappers')(ngModule);
require('./types')(ngModule);
require('./run')(ngModule);

export default ngModuleName;
