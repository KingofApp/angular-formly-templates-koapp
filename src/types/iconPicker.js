
export default ngModule => {
  ngModule.config(addIconPickerType);

  function addIconPickerType(formlyConfigProvider) {

    var ngModelAttrs = {};
    var attributes = [
      'upload',
      'url',
      'selector'
    ];

    angular.forEach(attributes, function(attr) {
      ngModelAttrs[camelize(attr)] = {attribute: attr};
    });

    formlyConfigProvider.setType({
      name: 'iconpicker',
      templateUrl:  'bower_components/angular-formly-templates-koapp/src/types/iconPicker.html',
      wrapper: ['koappLabel', 'koappHasError'],
      defaultOptions: {
        ngModelAttrs: ngModelAttrs
      },
      controller: iconPickerController
    });

    iconPickerController.$inject = ['$scope', 'ngDialog', 'ironIconsService'];
    function iconPickerController($scope, ngDialog, ironIconsService){
      $scope.changeIconModal = changeIconModal;
      $scope.icons           = ironIconsService.get();
      $scope.isUrl           = isUrl;
      $scope.selectIcon      = selectIcon;

      function changeIconModal() {
        ngDialog.open({
            template: 'bower_components/angular-formly-templates-koapp/src/types/iconPickerModal.html',
            scope: $scope,
            className: 'ngdialog-theme-plain ngDialogBig'
        });
      }

      function isUrl(s) {
         var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
         return regexp.test(s);
      }

      function selectIcon(iconSelected) {
        $scope.model[$scope.options.key] = iconSelected;
      }

    }


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
