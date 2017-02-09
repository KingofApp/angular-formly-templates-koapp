export default ngModule => {
  ngModule.config(addWysiwyg);

  function addWysiwyg(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'wysiwyg',
      template: '<textarea ui-tinymce="tinymceOptions" ng-model="model[options.key]"></textarea>',
      wrapper: ['koappLabel', 'koappHasError']
    });
  }

};
