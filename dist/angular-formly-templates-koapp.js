//! angular-formly-templates-koapp version 1.0.39 built with ♥ by KingofApp <theking@kingofapp.com> (ó ì_í)=óò=(ì_í ò)

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("angular-formly"), require("api-check"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "angular-formly", "api-check"], factory);
	else if(typeof exports === 'object')
		exports["ngFormlyTemplatesKoapp"] = factory(require("angular"), require("angular-formly"), require("api-check"));
	else
		root["ngFormlyTemplatesKoapp"] = factory(root["angular"], root["ngFormly"], root["apiCheck"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var ngModuleName = 'formlyKoapp';
	var angular = __webpack_require__(2);
	var ngModule = angular.module(ngModuleName, [__webpack_require__(4)]);
	ngModule.constant('formlyKoappApiCheck', __webpack_require__(5)({
	  output: {
	    prefix: 'angular-formly-koapp'
	  }
	}));
	ngModule.constant('formlyKoappVersion', ("1.0.39"));

	__webpack_require__(6)(ngModule);
	__webpack_require__(9)(ngModule);
	__webpack_require__(34)(ngModule);

	exports['default'] = ngModuleName;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// some versions of angular don't export the angular module properly,
	// so we get it from window in this case.
	'use strict';

	var angular = __webpack_require__(3);
	if (!angular.version) {
	  angular = window.angular;
	}
	module.exports = angular;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addWrappers);

	  function addWrappers(formlyConfigProvider) {
	    formlyConfigProvider.setWrapper([{
	      name: 'koappLabel',
	      template: __webpack_require__(7),
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string.optional,
	            required: check.bool.optional,
	            labelSrOnly: check.bool.optional
	          }
	        };
	      }
	    }, { name: 'koappHasError', template: __webpack_require__(8) }]);
	  }
	  addWrappers.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n  <label for=\"{{id}}\" class=\"control-label {{to.labelSrOnly ? 'sr-only' : ''}}\" ng-if=\"to.label\">\r\n    {{to.label}}\r\n    {{to.required ? '*' : ''}}\r\n  </label>\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\r\n  <formly-transclude></formly-transclude>\r\n</div>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  __webpack_require__(10)(ngModule);
	  __webpack_require__(12)(ngModule);
	  __webpack_require__(13)(ngModule);
	  __webpack_require__(15)(ngModule);
	  __webpack_require__(18)(ngModule);
	  __webpack_require__(20)(ngModule);
	  __webpack_require__(22)(ngModule);
	  __webpack_require__(23)(ngModule);
	  __webpack_require__(25)(ngModule);
	  __webpack_require__(27)(ngModule);
	  __webpack_require__(29)(ngModule);
	  __webpack_require__(31)(ngModule);
	  __webpack_require__(32)(ngModule);
	  __webpack_require__(33)(ngModule);
	};

	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);

	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'checkbox',
	      template: __webpack_require__(11),
	      wrapper: ['koappHasError'],
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            label: check.string
	          }
	        };
	      }
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"checkbox\">\r\n\t<label>\r\n\t\t{{to.label}}\r\n\t\t{{to.required ? '*' : ''}}\r\n\t</label>\r\n\t<input type=\"checkbox\"\r\n\tclass=\"formly-field-checkbox\"\r\n\tng-model=\"model[options.key]\">\r\n</div>\r\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addColorPickerType);

	  function addColorPickerType(formlyConfigProvider) {

	    var ngModelAttrs = {};

	    function camelize(string) {
	      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	        return chr ? chr.toUpperCase() : '';
	      });
	      // Ensure 1st char is always lowercase
	      return string.replace(/^([A-Z])/, function (match, chr) {
	        return chr ? chr.toLowerCase() : '';
	      });
	    }

	    ngModelAttrs = {};

	    // attributes
	    angular.forEach(['color-picker-format', 'color-picker-alpha', 'color-picker-swatch', 'color-picker-swatch-pos', 'color-picker-swatch-only', 'color-picker-pos', 'color-picker-case'], function (attr) {
	      ngModelAttrs[camelize(attr)] = { attribute: attr };
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
	  addColorPickerType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addDatePickerType);

	  function addDatePickerType(formlyConfigProvider) {
	    var attributes = ['date-disabled', 'custom-class', 'show-weeks', 'starting-day', 'init-date', 'min-mode', 'max-mode', 'format-day', 'format-month', 'format-year', 'format-day-header', 'format-day-title', 'format-month-title', 'year-range', 'shortcut-propagation', 'datepicker-popup', 'show-button-bar', 'current-text', 'clear-text', 'close-text', 'close-on-date-selection', 'datepicker-append-to-body'];

	    var bindings = ['datepicker-mode', 'min-date', 'max-date'];

	    var ngModelAttrs = {};

	    angular.forEach(attributes, function (attr) {
	      ngModelAttrs[camelize(attr)] = { attribute: attr };
	    });

	    angular.forEach(bindings, function (binding) {
	      ngModelAttrs[camelize(binding)] = { bound: binding };
	    });

	    formlyConfigProvider.setType({
	      name: 'datepicker',
	      template: __webpack_require__(14),
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: {
	        ngModelAttrs: ngModelAttrs,
	        templateOptions: {
	          datepickerOptions: {
	            format: 'MM.dd.yyyy',
	            initDate: new Date()
	          }
	        }
	      },
	      controller: ['$scope', function ($scope) {
	        $scope.datepicker = {};

	        $scope.datepicker.opened = false;

	        $scope.datepicker.open = function () {
	          $scope.datepicker.opened = !$scope.datepicker.opened;
	        };
	      }]
	    });

	    function camelize(string) {
	      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	        return chr ? chr.toUpperCase() : '';
	      });
	      // Ensure 1st char is always lowercase
	      return string.replace(/^([A-Z])/, function (match, chr) {
	        return chr ? chr.toLowerCase() : '';
	      });
	    }
	  }
	  addDatePickerType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"float\">\r\n  <div class=\"flex\">\r\n    <p class=\"input-group\">\r\n      <input  type=\"text\"\r\n              id=\"{{::id}}\"\r\n              name=\"{{::id}}\"\r\n              ng-model=\"model[options.key]\"\r\n              class=\"form-control\"\r\n              ng-click=\"datepicker.open($event)\"\r\n              uib-datepicker-popup=\"{{to.datepickerOptions.format}}\"\r\n              is-open=\"datepicker.opened\"\r\n              datepicker-options=\"to.datepickerOptions\" />\r\n    </p>\r\n    <span class=\"input-group-btn\">\r\n      <button class=\"btnCalen\" type=\"button\" class=\"btn btn-default\" ng-click=\"datepicker.open($event)\" ng-disabled=\"to.disabled\">\r\n        <iron-icon id=\"previewIcon\" icon=\"event\" class=\"x-scope iron-icon-0 x-scope iron-icon-0\">\r\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" class=\"style-scope iron-icon\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\r\n            <g class=\"style-scope iron-icon\">\r\n              <path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\" class=\"style-scope iron-icon\"></path>\r\n            </g>\r\n          </svg>\r\n        </iron-icon>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addFrameType);

	  function addFrameType(formlyConfigProvider) {

	    var ngModelAttrs = {};
	    var attributes = ['url', 'label', 'description', 'width', 'height'];

	    angular.forEach(attributes, function (attr) {
	      ngModelAttrs[camelize(attr)] = { attribute: attr };
	    });

	    formlyConfigProvider.setType({
	      name: 'frame',
	      template: __webpack_require__(16),
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: {
	        ngModelAttrs: ngModelAttrs
	      },
	      controller: frameController
	    });

	    frameController.$inject = ['$scope', '$rootScope', 'ngDialog', 'widgetDataService'];
	    function frameController($scope, $rootScope, ngDialog, widgetDataService) {
	      $scope.openFrameModal = openFrameModal;
	      $scope.ngModelAttrs = ngModelAttrs;

	      $scope.$watch('iframe.data.plugin.scope', function () {
	        if ($scope.iframe && $scope.iframe.data) $rootScope.iframeChange($scope.iframe.data.plugin);
	      });

	      function openFrameModal() {
	        $scope.iframe = {
	          src: $scope.to.url || widgetDataService.getPluginData($scope.to.originalApp, $scope.to.uniqueId, 'src'),
	          data: widgetDataService.getData($scope.to.originalApp, $scope.to.uniqueId),
	          close: ngDialog.close
	        };
	        console.log("[I] iframeData ", $scope.iframe);
	        ngDialog.open({
	          template: __webpack_require__(17),
	          plain: true,
	          scope: $scope,
	          className: 'ngdialog-theme-plain ngDialogBig custom-size'
	        });
	      }
	    }

	    function camelize(string) {
	      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	        return chr ? chr.toUpperCase() : '';
	      });
	      // Ensure 1st char is always lowercase
	      return string.replace(/^([A-Z])/, function (match, chr) {
	        return chr ? chr.toLowerCase() : '';
	      });
	    }
	  }
	  addFrameType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n  <div id=\"{{::id}}\" class=\"btn-frame\" ng-click=\"openFrameModal()\">{{ to.buttonText }}</div>\r\n</div>\r\n"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"maker big\" style=\"height: 100%;\">\r\n  <style ng-if=\"to.width\">.custom-size .ngdialog-content { width: {{to.width}}px !important; }</style>\r\n  <style ng-if=\"to.height\">.custom-size .ngdialog-content { height: {{to.height}}px !important; }</style>\r\n  <style ng-if=\"!to.height\">.custom-size .ngdialog-content { height: 100% !important; }</style>\r\n  <koapp-widget src=\"iframe.src\" data=\"iframe.data\" on-close=\"iframe.close()\"></koapp-widget>\r\n</div>\r\n"

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addIconPickerType);

	  function addIconPickerType(formlyConfigProvider) {

	    var ngModelAttrs = {};
	    var attributes = ['upload', 'url', 'selector'];

	    angular.forEach(attributes, function (attr) {
	      ngModelAttrs[camelize(attr)] = { attribute: attr };
	    });

	    formlyConfigProvider.setType({
	      name: 'iconpicker',
	      template: __webpack_require__(19),
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: {
	        ngModelAttrs: ngModelAttrs
	      },
	      controller: iconPickerController
	    });

	    iconPickerController.$inject = ['$scope', 'ngDialog', 'ironIconsService'];
	    function iconPickerController($scope, ngDialog, ironIconsService) {
	      $scope.changeIconModal = changeIconModal;
	      $scope.icons = ironIconsService.get();
	      $scope.isUrl = isUrl;
	      $scope.selectIcon = selectIcon;

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
	      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	        return chr ? chr.toUpperCase() : '';
	      });
	      // Ensure 1st char is always lowercase
	      return string.replace(/^([A-Z])/, function (match, chr) {
	        return chr ? chr.toLowerCase() : '';
	      });
	    }
	  }
	  addIconPickerType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n  <div class=\"iconPreview\" ng-if=\"isUrl(model[options.key])\"><img id=\"previewIcon\" src=\"{{ model[options.key] }}\" /></div>\r\n  <div class=\"iconPreview\" ng-if=\"!isUrl(model[options.key])\"><iron-icon id=\"previewIcon\" icon=\"{{ model[options.key] }}\"></iron-icon></div>\r\n  <div id=\"{{::id}}\" class=\"btn-gold demo\" ng-click=\"changeIconModal()\">{{ 'global.change'| translate }}</div>\r\n</div>\r\n"

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addImageUploadType);

	  function addImageUploadType(formlyConfigProvider) {

	    var ngModelAttrs = {};
	    var attributes = ['max-size', 'width', 'height'];

	    angular.forEach(attributes, function (attr) {
	      ngModelAttrs[camelize(attr)] = { attribute: attr };
	    });

	    formlyConfigProvider.setType({
	      name: 'imageupload',
	      template: __webpack_require__(21),
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: {
	        ngModelAttrs: ngModelAttrs
	      }
	    });

	    function camelize(string) {
	      string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
	        return chr ? chr.toUpperCase() : '';
	      });
	      // Ensure 1st char is always lowercase
	      return string.replace(/^([A-Z])/, function (match, chr) {
	        return chr ? chr.toLowerCase() : '';
	      });
	    }
	  }
	  addImageUploadType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\">\r\n  <span class=\"input-group-btn\">\r\n    <span class=\"btn btn-primary btn-file\">\r\n      <input type=\"file\"\r\n             ng-model=\"model[options.key]\"\r\n             accept=\"image/*\"\r\n             name=\"files\"\r\n             maxsize=\"{{to.imageUploadOptions.max-size}}\"\r\n             base-sixty-four-input=\"base-sixty-four-input\"\r\n             />\r\n\r\n    </span>\r\n  </span>\r\n  <input type=\"text\" value=\"{{model[options.key].filename}}\" readonly=\"readonly\" class=\"form-control\"/>\r\n  <img ng-if=\"model[options.key].url\" src=\"{{model[options.key].url}}\" width=\"200px\" />\r\n</div>\r\n\r\n<!-- base-sixty-four-input=\"base-sixty-four-input\"  -->\r\n"

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addInputType);

	  function addInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'input',
	      template: '<input class="form-control" ng-model="model[options.key]">',
	      wrapper: ['koappLabel', 'koappHasError']
	    });
	  }
	  addInputType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);

	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'multiCheckbox',
	      template: __webpack_require__(24),
	      wrapper: ['koappLabel', 'koappHasError'],
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            options: check.arrayOf(check.object),
	            labelProp: check.string.optional,
	            valueProp: check.string.optional
	          }
	        };
	      },
	      defaultOptions: {
	        noFormControl: false,
	        ngModelAttrs: {
	          required: {
	            attribute: '',
	            bound: ''
	          }
	        }
	      },
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        var to = $scope.to;
	        var opts = $scope.options;
	        $scope.multiCheckbox = {
	          checked: [],
	          change: setModel
	        };

	        // initialize the checkboxes check property
	        $scope.$watch('model', function modelWatcher(newModelValue) {
	          var modelValue, valueProp;

	          if (Object.keys(newModelValue).length) {
	            modelValue = newModelValue[opts.key];

	            $scope.$watch('to.options', function optionsWatcher(newOptionsValues) {
	              if (newOptionsValues && Array.isArray(newOptionsValues) && Array.isArray(modelValue)) {
	                valueProp = to.valueProp || 'value';
	                for (var index = 0; index < newOptionsValues.length; index++) {
	                  $scope.multiCheckbox.checked[index] = modelValue.indexOf(newOptionsValues[index][valueProp]) !== -1;
	                }
	              }
	            });
	          }
	        }, true);

	        function checkValidity(expressionValue) {
	          var valid;

	          if ($scope.to.required) {
	            valid = angular.isArray($scope.model[opts.key]) && $scope.model[opts.key].length > 0 && expressionValue;

	            $scope.fc.$setValidity('required', valid);
	          }
	        }

	        function setModel() {
	          $scope.model[opts.key] = [];
	          angular.forEach($scope.multiCheckbox.checked, function (checkbox, index) {
	            if (checkbox) {
	              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
	            }
	          });

	          // Must make sure we mark as touched because only the last checkbox due to a bug in angular.
	          $scope.fc.$setTouched();
	          checkValidity(true);

	          if ($scope.to.onChange) {
	            $scope.to.onChange();
	          }
	        }

	        if (opts.expressionProperties && opts.expressionProperties['templateOptions.required']) {
	          $scope.$watch(function () {
	            return $scope.to.required;
	          }, function (newValue) {
	            checkValidity(newValue);
	          });
	        }

	        if ($scope.to.required) {
	          var unwatchFormControl = $scope.$watch('fc', function (newValue) {
	            if (!newValue) {
	              return;
	            }
	            checkValidity(true);
	            unwatchFormControl();
	          });
	        }
	      }]
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\r\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\r\n    <label>\r\n    {{option[to.labelProp || 'name']}}\r\n    </label>\r\n      <input type=\"checkbox\"\r\n             id=\"{{id + '_'+ $index}}\"\r\n             ng-model=\"multiCheckbox.checked[$index]\"\r\n             ng-change=\"multiCheckbox.change()\">\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addMultiInputType);

	  function addMultiInputType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'multiInput',
	      template: __webpack_require__(26),
	      defaultOptions: {
	        noFormControl: true,
	        wrapper: ['koappLabel', 'koappHasError'],
	        templateOptions: {
	          inputOptions: {
	            wrapper: null
	          }
	        }
	      },
	      controller: /* @ngInject */["$scope", function controller($scope) {
	        $scope.copyItemOptions = copyItemOptions;

	        function copyItemOptions() {
	          return angular.copy($scope.to.inputOptions);
	        }
	      }]
	    });
	  }
	  addMultiInputType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n  <div class=\"clearfix\">\r\n    <div class=\"row\"\r\n         style=\"margin-bottom:14px\"\r\n         ng-repeat=\"item in model[options.key] track by $index\"\r\n         ng-init=\"itemOptions = copyItemOptions()\">\r\n\r\n       <formly-field class=\"no-padding col-xs-10\"\r\n                     options=\"itemOptions\"\r\n                     model=\"model[options.key]\"\r\n                     form=\"form\"\r\n                     index=\"$index\">\r\n       </formly-field>\r\n       <div class=\"col-xs-2\" style=\"margin-top:6px\">\r\n        <a ng-click=\"model[options.key].splice($index, 1)\">x {{ 'global.remove'| translate }}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <button type=\"button\" class=\"btn-add btn btn-success btn-sm\" ng-click=\"model[options.key].push('')\">{{ 'global.add'| translate }}</button>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addRadioType);

	  function addRadioType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'radio',
	      template: __webpack_require__(28),
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: {
	        noFormControl: false
	      },
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            options: check.arrayOf(check.object),
	            labelProp: check.string.optional,
	            valueProp: check.string.optional,
	            inline: check.bool.optional
	          }
	        };
	      }
	    });
	  }
	  addRadioType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\r\n  <div ng-repeat=\"(key, option) in to.options\" ng-class=\"{ 'radio': !to.inline, 'radio-inline': to.inline }\">\r\n    <label>\r\n      <input type=\"radio\"\r\n             id=\"{{id + '_'+ $index}}\"\r\n             tabindex=\"0\"\r\n             ng-value=\"option[to.valueProp || 'value']\"\r\n             ng-model=\"model[options.key]\">\r\n      {{option[to.labelProp || 'name']}}\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addRepeatSectionType);

	  function addRepeatSectionType(formlyConfigProvider) {
	    var unique = 1;
	    formlyConfigProvider.setType({
	      name: 'repeatSection',
	      template: __webpack_require__(30),
	      controller: function controller($scope) {
	        $scope.formOptions = { formState: $scope.formState };
	        $scope.addNew = addNew;

	        $scope.copyFields = copyFields;

	        function copyFields(fields) {
	          fields = angular.copy(fields);
	          addRandomIds(fields);
	          return fields;
	        }

	        function addNew() {
	          $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
	          var repeatsection = $scope.model[$scope.options.key];
	          var lastSection = repeatsection[repeatsection.length - 1];
	          var newsection = {};
	          if (lastSection) {
	            newsection = angular.copy(lastSection);
	          }
	          repeatsection.push(newsection);
	        }

	        function addRandomIds(fields) {
	          unique++;
	          angular.forEach(fields, function (field, index) {
	            if (field.fieldGroup) {
	              addRandomIds(field.fieldGroup);
	              return; // fieldGroups don't need an ID
	            }

	            if (field.templateOptions && field.templateOptions.fields) {
	              addRandomIds(field.templateOptions.fields);
	            }

	            field.id = field.id || field.key + '_' + index + '_' + unique + getRandomInt(0, 9999);
	          });
	        }

	        function getRandomInt(min, max) {
	          return Math.floor(Math.random() * (max - min)) + min;
	        }
	      }
	    });
	  }
	  addRepeatSectionType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<!--loop through each element in model array-->\r\n\t<div class=\"{{hideRepeat}}\">\r\n    <div class=\"repeat\">\r\n      <label for=\"\">{{to.label}}</label>\r\n      <p class=\"AddNewButton\">\r\n        <button type=\"button\" class=\"btn_add btn-primary\" ng-click=\"addNew()\" >{{to.btnText}}</button>\r\n      </p>\r\n    </div>\r\n    <div class=\"repeatsection\" ng-repeat=\"element in model[options.key]\" ng-init=\"fields = copyFields(to.fields)\">\r\n      <formly-form fields=\"fields\"\r\n                   model=\"element\"\r\n                   form=\"form\">\r\n      </formly-form>\r\n      <div>\r\n        <button type=\"button\" class=\"btn_rem btn-danger\" ng-click=\"model[options.key].splice($index, 1)\">\r\n          {{ 'global.remove'| translate }}\r\n        </button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports['default'] = function (ngModule) {
	  ngModule.config(addSelectType);

	  var template = '<select class="form-control" ng-model="model[options.key]"></select>';

	  function addSelectType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'select',
	      template: template,
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: function defaultOptions(options) {
	        /* jshint maxlen:195 */
	        var ngOptions = options.templateOptions.ngOptions || 'option[to.valueProp || \'value\'] as option[to.labelProp || \'name\'] group by option[to.groupProp || \'group\'] for option in to.options';
	        return {
	          ngModelAttrs: _defineProperty({}, ngOptions, {
	            value: options.templateOptions.optionsAttr || 'ng-options'
	          })
	        };
	      },
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            options: check.arrayOf(check.object),
	            optionsAttr: check.string.optional,
	            labelProp: check.string.optional,
	            valueProp: check.string.optional,
	            groupProp: check.string.optional
	          }
	        };
	      }
	    });
	  }
	  addSelectType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addTextareaType);

	  function addTextareaType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'textarea',
	      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
	      wrapper: ['koappLabel', 'koappHasError'],
	      defaultOptions: {
	        ngModelAttrs: {
	          rows: { attribute: 'rows' },
	          cols: { attribute: 'cols' }
	        }
	      },
	      apiCheck: function apiCheck(check) {
	        return {
	          templateOptions: {
	            rows: check.number.optional,
	            cols: check.number.optional
	          }
	        };
	      }
	    });
	  }
	  addTextareaType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.config(addCheckboxType);

	  function addCheckboxType(formlyConfigProvider) {
	    formlyConfigProvider.setType({
	      name: 'wysiwyg',
	      template: '<textarea ui-tinymce="tinymceOptions" ng-controller="marketConfigController" ng-model="model[options.key]"></textarea>',
	      wrapper: ['koappLabel', 'koappHasError']
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addons = __webpack_require__(35);

	var _addons2 = _interopRequireDefault(_addons);

	var _description = __webpack_require__(37);

	var _description2 = _interopRequireDefault(_description);

	exports['default'] = function (ngModule) {
	  (0, _addons2['default'])(ngModule);
	  (0, _description2['default'])(ngModule);
	};

	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.run(addAddonsManipulator);

	  function addAddonsManipulator(formlyConfig, formlyKoappApiCheck) {
	    var addonTemplate = __webpack_require__(36);
	    var addonChecker = formlyKoappApiCheck.shape({
	      'class': formlyKoappApiCheck.string.optional,
	      text: formlyKoappApiCheck.string.optional,
	      onClick: formlyKoappApiCheck.func.optional
	    }).strict.optional;
	    var api = formlyKoappApiCheck.shape({
	      templateOptions: formlyKoappApiCheck.shape({
	        addonLeft: addonChecker,
	        addonRight: addonChecker
	      })
	    });
	    formlyConfig.templateManipulators.preWrapper.push(function (template, options) {
	      if (!options.templateOptions.addonLeft && !options.templateOptions.addonRight) {
	        return template;
	      }
	      formlyKoappApiCheck.warn([api], [options]);
	      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
	    });
	  }
	  addAddonsManipulator.$inject = ["formlyConfig", "formlyKoappApiCheck"];
	};

	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\r\n    <div class=\"input-group-addon\"\r\n         ng-if=\"to.addonLeft\"\r\n         ng-style=\"{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}\"\r\n         ng-click=\"to.addonLeft.onClick(options, this, $event)\">\r\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\r\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\r\n    </div>\r\n    <formly-transclude></formly-transclude>\r\n    <div class=\"input-group-addon\"\r\n         ng-if=\"to.addonRight\"\r\n         ng-style=\"{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}\"\r\n         ng-click=\"to.addonRight.onClick(options, this, $event)\">\r\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\r\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.run(addDescriptionManipulator);

	  function addDescriptionManipulator(formlyConfig) {
	    formlyConfig.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
	      if (angular.isDefined(options.templateOptions.description)) {
	        var el = document.createElement('div');
	        el.appendChild(angular.element(template)[0]);
	        el.appendChild(angular.element('<p id="' + scope.id + '_description"' + 'class="help-block"' + 'ng-if="to.description">' + '{{to.description}}' + '</p>')[0]);
	        var modelEls = angular.element(el.querySelectorAll('[ng-model]'));
	        if (modelEls) {
	          modelEls.attr('aria-describedby', scope.id + '_description');
	        }
	        return el.innerHTML;
	      } else {
	        return template;
	      }
	    });
	  }
	  addDescriptionManipulator.$inject = ["formlyConfig"];
	};

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
