export default ngModule => {
  ngModule.config(addColorPickerType);

  function addColorPickerType(formlyConfigProvider) {

    var ngModelAttrs = {};

    function camelize(string) {
      string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
      // Ensure 1st char is always lowercase
      return string.replace(/^([A-Z])/, function(match, chr) {
        return chr ? chr.toLowerCase() : '';
      });
    }

    ngModelAttrs = {};

    // attributes
    angular.forEach([
      'color-picker-format',
      'color-picker-alpha',
      'color-picker-swatch',
      'color-picker-swatch-pos',
      'color-picker-swatch-only',
      'color-picker-pos',
      'color-picker-case'
    ], function(attr) {
      ngModelAttrs[camelize(attr)] = {attribute: attr};
    });

    formlyConfigProvider.setType({
      name: 'colorpicker',
      template: '<color-picker class="cpStyles" ng-model="model[options.key]"></color-picker>',
      wrapper: ['koappLabel', 'koappHasError'],
      defaultOptions: {
        ngModelAttrs: ngModelAttrs
      }
    });

  }

};
