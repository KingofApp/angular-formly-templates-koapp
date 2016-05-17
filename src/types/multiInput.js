export default ngModule => {
  ngModule.config(addMultiInputType);

  function addMultiInputType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'multiInput',
      template: require('./multiInput.html'),
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
