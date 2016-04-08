export default ngModule => {
  ngModule.run(addAddonsManipulator);

  function addAddonsManipulator(formlyConfig, formlyKoappApiCheck) {
    var addonTemplate = require('./addons.html');
    const addonChecker = formlyKoappApiCheck.shape({
      class: formlyKoappApiCheck.string.optional,
      text: formlyKoappApiCheck.string.optional,
      onClick: formlyKoappApiCheck.func.optional
    }).strict.optional;
    const api = formlyKoappApiCheck.shape({
      templateOptions: formlyKoappApiCheck.shape({
        addonLeft: addonChecker,
        addonRight: addonChecker
      })
    });
    formlyConfig.templateManipulators.preWrapper.push(function(template, options) {
      if (!options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
        return template;
      }
      formlyKoappApiCheck.warn([api], [options]);
      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
    });
  }
};
