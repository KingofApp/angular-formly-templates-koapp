export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'wysiwyg',
      template: '<text-angular ng-model="model[options.key]"></div>',
      wrapper: ['koappLabel', 'koappHasError']
    });
  }
  
};
