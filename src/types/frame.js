
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

    frameController.$inject = ['$scope', '$rootScope', 'ngDialog', 'widgetDataService'];
    function frameController($scope, $rootScope, ngDialog, widgetDataService){
      $scope.openFrameModal  = openFrameModal;
      $scope.ngModelAttrs    = ngModelAttrs;

      $scope.$watch('iframe.data.plugin.scope', function() {
        if($scope.iframe && $scope.iframe.data) $rootScope.iframeChange($scope.iframe.data.plugin);
      });

      function openFrameModal() {
        $scope.iframe = {
          src   : $scope.to.url || widgetDataService.getPluginData($scope.to.fullApp, $scope.to.uniqueId, 'src'),
          data  : widgetDataService.getData($scope.to.fullApp, $scope.to.uniqueId),
          close : ngDialog.close
        }
        console.log("[I] iframeData ", $scope.iframe);
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