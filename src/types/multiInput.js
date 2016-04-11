export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'multiInput',
      templateUrl: 'bower_components/angular-formly-templates-koapp/src/types/multiInput.html',
      defaultOptions: {
        noFormControl: true,
        wrapper: ['koappLabel', 'koappHasError'],
        templateOptions: {
          inputOptions: {
            wrapper: null
          }
        }
      },
      controller: /* @ngInject */ function($scope) {
        $scope.copyItemOptions = copyItemOptions;

        function copyItemOptions() {
          return angular.copy($scope.to.inputOptions);
        }
      }
    });
  }
};
