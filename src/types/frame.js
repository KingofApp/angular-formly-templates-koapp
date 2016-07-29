
export default ngModule => {
  ngModule.config(addFrameType);

  function addFrameType(formlyConfigProvider) {

    var ngModelAttrs = {};
    var attributes = [
      'url',
      'label',
      'description',
      'width',
      'height'
    ];

    angular.forEach(attributes, function(attr) {
      ngModelAttrs[camelize(attr)] = {attribute: attr};
    });

    formlyConfigProvider.setType({
      name: 'frame',
      template: require('./frame.html'),
      wrapper: ['koappLabel', 'koappHasError'],
      defaultOptions: {
        ngModelAttrs: ngModelAttrs
      },
      controller: frameController
    });

    frameController.$inject = ['$scope', 'ngDialog', 'widgetDataService'];
    function frameController($scope, ngDialog, widgetDataService){
      $scope.openFrameModal  = openFrameModal;
      $scope.ngModelAttrs    = ngModelAttrs;


      function openFrameModal() {
        $scope.iframe = {
          src   : widgetDataService.getPluginData($scope.to.fullApp, $scope.to.uniqueId, 'src'),
          data  : widgetDataService.getData($scope.to.fullApp, $scope.to.uniqueId)
        }
        console.log("[I] Data ", $scope.iframe.data);
        ngDialog.open({
            template: 'bower_components/angular-formly-templates-koapp/src/types/frameModal.html',
            scope: $scope,
            className: 'ngdialog-theme-plain ngDialogBig custom-size'
        });
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
