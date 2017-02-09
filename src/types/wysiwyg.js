export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'wysiwyg',
      template: '<textarea ui-tinymce="tinymceOptions" ng-model="model[options.key]"></textarea>',
      wrapper: ['koappLabel', 'koappHasError']
    });
  }

};
