export default ngModule => {
  require('./checkbox')(ngModule);
  require('./multiCheckbox')(ngModule);
  require('./multiInput')(ngModule);
  require('./input')(ngModule);
  require('./datePicker')(ngModule);
  require('./radio')(ngModule);
  require('./select')(ngModule);
  require('./textarea')(ngModule);
  require('./wysiwyg')(ngModule);
};
