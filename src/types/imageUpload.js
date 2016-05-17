
export default ngModule => {
  ngModule.config(addImageUploadType);

  function addImageUploadType(formlyConfigProvider) {

    var ngModelAttrs = {};
    var attributes = [
      'max-size',
      'width',
      'height'
    ];

    angular.forEach(attributes, function(attr) {
      ngModelAttrs[camelize(attr)] = {attribute: attr};
    });

    formlyConfigProvider.setType({
      name: 'imageupload',
      template: require('./imageUpload.html'),
      wrapper: ['koappLabel', 'koappHasError'],
      defaultOptions: {
        ngModelAttrs: ngModelAttrs
      }
    });

    function camelize(string) {
      string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
      // Ensure 1st char is always lowercase
      return string.replace(/^([A-Z])/, function(match, chr) {
        return chr ? chr.toLowerCase() : '';
      });
    }


  }

};
