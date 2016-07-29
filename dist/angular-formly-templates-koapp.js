//! angular-formly-templates-koapp version 1.0.21 built with ♥ by KingofApp <theking@kingofapp.com> (ó ì_í)=óò=(ì_í ò)

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
	ngModule.constant('formlyKoappVersion', ("1.0.21"));

	__webpack_require__(6)(ngModule);
	__webpack_require__(9)(ngModule);
	__webpack_require__(33)(ngModule);

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

	module.exports = "<div>\n  <label for=\"{{id}}\" class=\"control-label {{to.labelSrOnly ? 'sr-only' : ''}}\" ng-if=\"to.label\">\n    {{to.label}}\n    {{to.required ? '*' : ''}}\n  </label>\n  <formly-transclude></formly-transclude>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"form-group\" ng-class=\"{'has-error': showError}\">\n  <formly-transclude></formly-transclude>\n</div>\n"

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
	  __webpack_require__(17)(ngModule);
	  __webpack_require__(19)(ngModule);
	  __webpack_require__(21)(ngModule);
	  __webpack_require__(22)(ngModule);
	  __webpack_require__(24)(ngModule);
	  __webpack_require__(26)(ngModule);
	  __webpack_require__(28)(ngModule);
	  __webpack_require__(30)(ngModule);
	  __webpack_require__(31)(ngModule);
	  __webpack_require__(32)(ngModule);
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

	module.exports = "<div class=\"checkbox\">\n\t<label>\n\t\t{{to.label}}\n\t\t{{to.required ? '*' : ''}}\n\t</label>\n\t<input type=\"checkbox\"\n\tclass=\"formly-field-checkbox\"\n\tng-model=\"model[options.key]\">\n</div>\n"

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
	      template: '<color-picker ng-model="model[options.key]"></color-picker>',
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

	module.exports = "<div class=\"float\">\n  <div class=\"flex\">\n    <p class=\"input-group\">\n      <input  type=\"text\"\n              id=\"{{::id}}\"\n              name=\"{{::id}}\"\n              ng-model=\"model[options.key]\"\n              class=\"form-control\"\n              ng-click=\"datepicker.open($event)\"\n              uib-datepicker-popup=\"{{to.datepickerOptions.format}}\"\n              is-open=\"datepicker.opened\"\n              datepicker-options=\"to.datepickerOptions\" />\n    </p>\n    <span class=\"input-group-btn\">\n      <button class=\"btnCalen\" type=\"button\" class=\"btn btn-default\" ng-click=\"datepicker.open($event)\" ng-disabled=\"to.disabled\">\n        <iron-icon id=\"previewIcon\" icon=\"event\" class=\"x-scope iron-icon-0 x-scope iron-icon-0\">\n          <svg viewBox=\"0 0 24 24\" preserveAspectRatio=\"xMidYMid meet\" class=\"style-scope iron-icon\" style=\"pointer-events: none; display: block; width: 100%; height: 100%;\">\n            <g class=\"style-scope iron-icon\">\n              <path d=\"M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z\" class=\"style-scope iron-icon\"></path>\n            </g>\n          </svg>\n        </iron-icon>\n      </button>\n    </span>\n  </div>\n</div>\n"

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

	    frameController.$inject = ['$scope', 'ngDialog', 'widgetDataService'];
	    function frameController($scope, ngDialog, widgetDataService) {
	      $scope.openFrameModal = openFrameModal;
	      $scope.ngModelAttrs = ngModelAttrs;

	      $scope.iframe = {
	        src: widgetDataService.getPluginData($scope.to.fullApp, $scope.to.uniqueId, 'src'),
	        data: widgetDataService.getData($scope.to.fullApp, $scope.to.uniqueId),
	        close: function close() {
	          console.log("close signal");
	        }
	      };

	      function openFrameModal() {
	        ngDialog.open({
	          template: 'bower_components/angular-formly-templates-koapp/src/types/frameModal.html',
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

	module.exports = "<div>\n  <div id=\"{{::id}}\" class=\"btn-frame\" ng-click=\"openFrameModal()\">{{ to.buttonText }}</div>\n</div>\n"

/***/ },
/* 17 */
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
	      template: __webpack_require__(18),
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"iconPreview\" ng-if=\"isUrl(model[options.key])\"><img id=\"previewIcon\" src=\"{{ model[options.key] }}\" /></div>\n  <div class=\"iconPreview\" ng-if=\"!isUrl(model[options.key])\"><iron-icon id=\"previewIcon\" icon=\"{{ model[options.key] }}\"></iron-icon></div>\n  <div id=\"{{::id}}\" class=\"btn-gold demo\" ng-click=\"changeIconModal()\">{{ 'global.change'| translate }}</div>\n</div>\n"

/***/ },
/* 19 */
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
	      template: __webpack_require__(20),
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\">\n  <span class=\"input-group-btn\">\n    <span class=\"btn btn-primary btn-file\">\n      <input type=\"file\"\n             ng-model=\"model[options.key]\"\n             accept=\"image/*\"\n             name=\"files\"\n             maxsize=\"{{to.imageUploadOptions.max-size}}\"\n             base-sixty-four-input=\"base-sixty-four-input\"\n             />\n\n    </span>\n  </span>\n  <input type=\"text\" value=\"{{model[options.key].filename}}\" readonly=\"readonly\" class=\"form-control\"/>\n  <img ng-if=\"model[options.key].url\" src=\"{{model[options.key].url}}\" width=\"200px\" />\n</div>\n\n<!-- base-sixty-four-input=\"base-sixty-four-input\"  -->\n"

/***/ },
/* 21 */
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
/* 22 */
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
	      template: __webpack_require__(23),
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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" class=\"checkbox\">\n    <label>\n    {{option[to.labelProp || 'name']}}\n    </label>\n      <input type=\"checkbox\"\n             id=\"{{id + '_'+ $index}}\"\n             ng-model=\"multiCheckbox.checked[$index]\"\n             ng-change=\"multiCheckbox.change()\">\n  </div>\n</div>\n"

/***/ },
/* 24 */
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
	      template: __webpack_require__(25),
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
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <div class=\"clearfix\">\n    <div class=\"row\"\n         style=\"margin-bottom:14px\"\n         ng-repeat=\"item in model[options.key] track by $index\"\n         ng-init=\"itemOptions = copyItemOptions()\">\n\n       <formly-field class=\"no-padding col-xs-10\"\n                     options=\"itemOptions\"\n                     model=\"model[options.key]\"\n                     form=\"form\"\n                     index=\"$index\">\n       </formly-field>\n       <div class=\"col-xs-2\" style=\"margin-top:6px\">\n        <a ng-click=\"model[options.key].splice($index, 1)\">x {{ 'global.remove'| translate }}</a>\n      </div>\n    </div>\n  </div>\n  <div>\n    <button type=\"button\" class=\"btn-add btn btn-success btn-sm\" ng-click=\"model[options.key].push('')\">{{ 'global.add'| translate }}</button>\n  </div>\n</div>\n"

/***/ },
/* 26 */
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
	      template: __webpack_require__(27),
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
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\n  <div ng-repeat=\"(key, option) in to.options\" ng-class=\"{ 'radio': !to.inline, 'radio-inline': to.inline }\">\n    <label>\n      <input type=\"radio\"\n             id=\"{{id + '_'+ $index}}\"\n             tabindex=\"0\"\n             ng-value=\"option[to.valueProp || 'value']\"\n             ng-model=\"model[options.key]\">\n      {{option[to.labelProp || 'name']}}\n    </label>\n  </div>\n</div>\n"

/***/ },
/* 28 */
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
	      template: __webpack_require__(29),
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
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div>\n\t<!--loop through each element in model array-->\n\t<div class=\"{{hideRepeat}}\">\n    <div class=\"repeat\">\n      <label for=\"\">{{to.label}}</label>\n      <p class=\"AddNewButton\">\n        <button type=\"button\" class=\"btn_add btn-primary\" ng-click=\"addNew()\" >{{to.btnText}}</button>\n      </p>\n    </div>\n    <div class=\"repeatsection\" ng-repeat=\"element in model[options.key]\" ng-init=\"fields = copyFields(to.fields)\">\n      <formly-form fields=\"fields\"\n                   model=\"element\"\n                   form=\"form\">\n      </formly-form>\n      <div>\n        <button type=\"button\" class=\"btn_rem btn-danger\" ng-click=\"model[options.key].splice($index, 1)\">\n          {{ 'global.remove'| translate }}\n        </button>\n      </div>\n  </div>\n</div>\n"

/***/ },
/* 30 */
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
/* 31 */
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
/* 32 */
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
	      template: '<text-angular ng-model="model[options.key]"></div>',
	      wrapper: ['koappLabel', 'koappHasError']
	    });
	  }
	  addCheckboxType.$inject = ["formlyConfigProvider"];
	};

	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _addons = __webpack_require__(34);

	var _addons2 = _interopRequireDefault(_addons);

	var _description = __webpack_require__(36);

	var _description2 = _interopRequireDefault(_description);

	exports['default'] = function (ngModule) {
	  (0, _addons2['default'])(ngModule);
	  (0, _description2['default'])(ngModule);
	};

	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	exports['default'] = function (ngModule) {
	  ngModule.run(addAddonsManipulator);

	  function addAddonsManipulator(formlyConfig, formlyKoappApiCheck) {
	    var addonTemplate = __webpack_require__(35);
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
/* 35 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"{'input-group': to.addonLeft || to.addonRight}\">\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonLeft\"\n         ng-style=\"{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonLeft.onClick(options, this, $event)\">\n        <i class=\"{{to.addonLeft.class}}\" ng-if=\"to.addonLeft.class\"></i>\n        <span ng-if=\"to.addonLeft.text\">{{to.addonLeft.text}}</span>\n    </div>\n    <formly-transclude></formly-transclude>\n    <div class=\"input-group-addon\"\n         ng-if=\"to.addonRight\"\n         ng-style=\"{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}\"\n         ng-click=\"to.addonRight.onClick(options, this, $event)\">\n        <i class=\"{{to.addonRight.class}}\" ng-if=\"to.addonRight.class\"></i>\n        <span ng-if=\"to.addonRight.text\">{{to.addonRight.text}}</span>\n    </div>\n</div>\n"

/***/ },
/* 36 */
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