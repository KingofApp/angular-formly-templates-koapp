export default ngModule => {
  require('./checkbox')(ngModule);
  require('./colorPicker')(ngModule);
  require('./datePicker')(ngModule);
  require('./input')(ngModule);
  require('./multiCheckbox')(ngModule);
  require('./multiInput')(ngModule);
  require('./radio')(ngModule);
  require('./repeatSection')(ngModule);
  require('./select')(ngModule);
  require('./textarea')(ngModule);
  require('./wysiwyg')(ngModule);
};
