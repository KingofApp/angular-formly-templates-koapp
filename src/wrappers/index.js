export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {
        name: 'KoappLabel',
        template: require('./label.html'),
        apiCheck: check => ({
          templateOptions: {
            label: check.string.optional,
            required: check.bool.optional,
            labelSrOnly: check.bool.optional,
          }
        })
      },
      {name: 'KoappHasError', template: require('./has-error.html')}
    ]);
  }
};
