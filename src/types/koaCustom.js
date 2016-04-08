export default ngModule => {
  ngModule.config(addKoacustomType);

  function addKoacustomType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'input',
      template: '<input class="form-control" ng-model="model[options.key]">',
      wrapper: ['koappLabel', 'koappHasError']
    });
  }
};
