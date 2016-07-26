# Formly templates for King of app

This is a set of templates for angular-formly using in king of app config forms.

### Demo http://angular-formly.com

## Documentation

See [angular-formly](http://docs.angular-formly.com) for formly core documentation.

### Common Properties

NOTE: All of these properties will be under the `templateOptions` property as of angular-formly 3.0.0

## Fields

### Form Fields

Below is a detailed description of each form fields and its custom properties.

#### Input form field
>The input uses the `<input>` element and allows you to specify it's type via the type property

[See demo](http://jsbin.com/qiwoxa/edit?html,css,js,output)

_Example text field_
```javascript
{
  "type": "input",
  "key": "firstName",
  "templateOptions": {
    "type": "email", // or url, or text, etc.
    "placeholder": "jane doe",
    "label": "First name"
  }
}
```

---
#### multiInput form field
>The multiInput field allows to have a set of inputs which will be bind to a provided model value.

[See demo](http://jsbin.com/zuqiba/edit?html,css,js,output)

_Example multiInput field_
```json
{
  "key": "kids",
  "type": "multiInput",
  "templateOptions": {
    "label": "Kids",
    "inputOptions": {
      "type": "input"
    }
  }
}
```

---
#### Textarea form field
>The textarea field creates multiline input with a textarea element.

[See demo](http://jsbin.com/bumilo/edit?html,css,js,output)

##### rows (number, optional)
>`rows` sets the rows attribute for the textarea element.

##### cols (number, optional)
>`cols` sets the cols attribute for the textarea element.

_Example textarea field_
```json
{
  "type": "textarea",
  "key": "about",
  "templateOptions": {
    "placeholder": "I like puppies",
    "label": "Tell me about yourself",
    "rows": 4,
    "cols": 15
  }
}
```

---
#### Wysiwyg form field
>The wysiwyg field creates a html editor with a textarea, html viewer and powrfull buttons, returns html format.

[See demo](http://jsbin.com/mufoyu/edit?html,css,js,output)

_Example wysiwyg field_
```json
{
  "key": "wysiwyg",
  "type": "wysiwyg",
  "className": "wysiwyg",
  "templateOptions": {
    "label": "Wysiwyg"
  }
}
```

---
#### Frame form field
>The frame field is a button that opens a modal with custom view to make it easy for the user to get the module's configuration data.

##### url (string)
>`url` sets the configuration view to see in iframe.

##### buttonText (string)
>`buttonText` sets button text.

##### width (number, optional)
>`width` sets iframe width.

##### height (number, optional)
>`height` sets iframe height.



_Example frame field_
```json
{
  "type": "frame",
  "templateOptions": {
    "label": "Easy configuration",
    "description": "Click here to configure module",
    "url": "/modules/moduleName/widget/configure.html",
    "buttonText": "Configure",
    "width": 450,
    "height": 700
  }
}
```

---
#### Checkbox form field
>The checkbox field allows checkbox input with a input element set to `type='checkbox'`. It doesn't have any custom properties.

[See demo](http://jsbin.com/dekegi/edit?html,css,js,output)

_Example checkbox field_
```json
{
  "type": "checkbox",
  "key": "checkThis",
  "templateOptions": {
    "label": "Check this box"
  }
}
```

---
#### multiCheckbox form field
>The multiCheckbox field allows to have a set of checkboxes which will be bind to a provided model value.

[See demo](http://jsbin.com/xirivup/edit?html,css,js,output)

##### options (array, required)
>`options` is an array of options for the multiCheckbox form field to display. Each option should be an object.

##### labelProp (string, optional)
>`labelProp` is what is used for what is shown to the user. Defaults to `name`

##### valueProp (string, optional)
>`valueProp` is what is used for the value assigned to the model. Defaults to `value`

_Example multiCheckbox field_
```json
{
  "key": "roles",
  "type": "multiCheckbox",
  "templateOptions": {
    "label": "Roles",
    "options": [{"id": 1, "title" : "Administrator"}, {"id": 2, "title" : "User"}],
    "valueProp": "id",
    "labelProp": "title"
  }
}
```
---

#### Radio form field
>The radio field allows multiple choice input with a series of linked inputs, with `type='radio'`.

[See demo](http://jsbin.com/vayalob/edit?html,css,js,output)

##### options (array, required)
>`options` is an array of options for the radio form field to display. Each option should be an object with a `name`(string) and `value`(string or number).

_Example radio field_
```json
{
  "key": "triedEmber",
  "type": "radio",
  "templateOptions": {
    "label": "Have you tried EmberJs yet?",
    "options": [
      {
        "name": "Yes, and I love it!",
        "value": "yesyes"
      },
      {
        "name": "Yes, but I'm not a fan...",
        "value": "yesno"
      },
      {
        "name": "Nope",
        "value": "no"
      }
    ]
  }
}
```

---
#### Select form field
>The select field allows selection via dropdown using the select element.

[See demo](http://jsbin.com/kinaxo/edit?html,css,js,output)

##### options (array, required)
>`options` is an array of options for the select form field to display. Each option should be an object with a `name`(string). You may optionally add a `group` to some or all of your options.

##### labelProp (string, optional)
>`labelProp` is what is used for what is shown to the user. Defaults to `name`

##### valueProp (string, optional)
>`valueProp` is what is used for the value assigned to the model. Defaults to `value`

##### groupProp (string, optional)
>`groupProp` is what is used to group the options

##### optionsAttr (string, optional)
>`optionsAttr` is what is used as the attribute ngOptions will be applied to. Defaults to `ng-options`

##### ngOptions (string, optional)
>If provided, this is used instead of the default `ng-options` giving you full control (and rendering the other options uncessisary.

_Example select field_
```json
{
  "key": "transportation",
  "type": "select",
  "templateOptions": {
    "label": "How do you get around in the city",
    "valueProp": "name",
    "options": [
      {
        "name": "Car"
      },
      {
        "name": "Helicopter"
      },
      {
        "name": "Sport Utility Vehicle"
      },
      {
        "name": "Bicycle",
        "group": "low emissions"
      },
      {
        "name": "Skateboard",
        "group": "low emissions"
      },
      {
        "name": "Walk",
        "group": "low emissions"
      },
      {
        "name": "Bus",
        "group": "low emissions"
      },
      {
        "name": "Scooter",
        "group": "low emissions"
      },
      {
        "name": "Train",
        "group": "low emissions"
      },
      {
        "name": "Hot Air Baloon",
        "group": "low emissions"
      }
    ]
  }
}
```

---
#### colorpicker
>The select field allows to select a color.

[See demo](http://jsbin.com/sikazuz/edit?html,css,js,output)

##### colorPickerFormat (string, optional)
>`hsl`, `hsv`, `rgb`, `hex`, `hex8`

##### colorPickerAlpha (boolean, optional)
>`true`, `false`

##### colorPickerSwatch (boolean, optional)
>`true`, `false`

##### colorPickerPos (string, optional)
>`bottom left`, `bottom right`, `top left`, `top right`

##### colorPickerSwatchBootstrap (boolean, optional)
>`true`, `false`

##### colorPickerSwatchPos (string, optional)
>`left`, `right`

##### colorPickerSwatchOnly (boolean, optional)
>`true`, `false`

##### colorPickerCase (string, optional)
>`upper`, `lower`

_Example select field_
```json
{
  "key": "mycolor",
  "type": "colorpicker",
  "templateOptions": {
    "label": "My Color",
    "colorPickerFormat": "'hex'",
    "colorPickerAlpha": true,
    "colorPickerPos": "'top left'",
    "colorPickerSwatchBootstrap": false
  }
}
```
---

#### datepicker
>The select field a formated date.

[See demo](http://jsbin.com/gupakib/edit?html,css,js,output)

_Example select field_
```json
{
  "type": "datepicker",
  "key": "day",
  "templateOptions": {
    "label": "day",
    "type": "text",
    "datepickerPopup": "dd-MM-yyyy",
    "datepickerOptions": {
      "format": "dd-MM-yyyy"
    }
  }
}
```
---

#### iconpicker
>The select field allows select an icon via selector, external url or upload file.

[See demo](http://jsbin.com/cujegi/edit?html,css,js,output)

_Example select field_
```json
{
  "key": "iconPicker",
  "type": "iconpicker",
  "templateOptions": {
    "label": "Icon Picker"
  }
}
```

---

#### imageUpload
>Allows to upload a image file.

[See demo](http://jsbin.com/renopo/edit?html,css,js,output)

##### maxSize (string, optional)
>Max file size + unit `Ej: 3MB`

##### width (integer, optional)
>width to resize the image

##### height (integer, optional)
>height to resize the image

_Example select field_
```json
{
  "key": "imageupload",
  "type": "imageupload",
  "templateOptions": {
    "label": "Image Upload",
    "maxSize": "3MB"
  }
}
```

---
#### repeatSection
>Allows to upload a image file.

[See demo](http://jsbin.com/faheja/edit?html,css,js,output)

##### maxSize (string, optional)
>Max file size + unit `Ej: 3MB`

##### width (integer, optional)
>width to resize the image

##### height (integer, optional)
>height to resize the image

_Example select field_
```json
{
  "type": "repeatSection",
  "key": "investments",
  "templateOptions": {
    "btnText": "Add another investment",
    "fields": [
      {
        "className": "row",
        "fieldGroup": [
          {
            "className": "col-xs-4",
            "type": "input",
            "key": "investmentName",
            "templateOptions": {
              "label": "Name of Investment:",
              "required": true
            }
          },
          {
            "type": "input",
            "key": "investmentDate",
            "className": "col-xs-4",
            "templateOptions": {
              "label": "Date of Investment:",
              "placeholder": "dd/mm/yyyy such as 20/05/2015",
              "dateFormat": "DD, d  MM, yy"
            }
          },
          {
            "type": "input",
            "key": "stockIdentifier",
            "className": "col-xs-4",
            "templateOptions": {
              "label": "Stock Identifier:"
            }
          }
        ]
      },
      {
        "type": "radio",
        "key": "type",
        "templateOptions": {
          "options": [
            {
              "name": "Text Field",
              "value": "input"
            },
            {
              "name": "TextArea Field",
              "value": "textarea"
            },
            {
              "name": "Radio Buttons",
              "value": "radio"
            },
            {
              "name": "Checkbox",
              "value": "checkbox"
            }
          ],
          "label": "Field Type",
          "required": true
        }
      },
      {
        "type": "input",
        "key": "investmentValue",
        "templateOptions": {
          "label": "Value:"
        },
        "expressionProperties": {
          "templateOptions.disabled": "!model.stockIdentifier"
        }
      },
      {
        "type": "checkbox",
        "model": "formState",
        "key": "selfExecuting",
        "templateOptions": {
          "label": "Are you executing this trade?"
        }
      },
      {
        "hideExpression": "!formState.selfExecuting",
        "fieldGroup": [
          {
            "type": "input",
            "key": "relationshipName",
            "templateOptions": {
              "label": "Name:"
            }
          },
          {
            "type": "select",
            "key": "complianceApprover",
            "templateOptions": {
              "label": "Compliance Approver:",
              "options": [
                {
                  "name": "approver 1",
                  "value": "some one 1"
                },
                {
                  "name": "approver 2",
                  "value": "some one 2"
                }
              ]
            }
          },
          {
            "type": "textarea",
            "key": "requestorComment",
            "templateOptions": {
              "label": "Requestor Comment",
              "rows": 4
            }
          }
        ]
      }
    ]
  }
}
```
---
