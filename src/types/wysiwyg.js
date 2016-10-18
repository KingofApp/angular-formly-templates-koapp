export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'wysiwyg',
      template: '<form method="post"><textarea ui-tinymce></textarea></form>',
      //template: '<text-angular ng-model="model[options.key]"></text-angular>',
      wrapper: ['koappLabel', 'koappHasError']
    });
  }

};
