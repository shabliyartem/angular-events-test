import angular from 'angular';

function formField () {
  return {
    restrict: 'E',
    template: require('./form-field.html'),
    scope: {
      type: '@?',
      ngModel: '=',
      name: '@',
      form: '=',
      label: '@?',
      placeholder: '@?',
      required: '=?',
      disabled: '=?',
      min: '=?',
      max: '=?',
      minlength: '=?',
      maxlength: '=?',
      pattern: '@?'
    },
    link: function (scope) {
      scope.inputId = _.uniqueId(`form-field-${scope.name}-`);
    }
  }
}

export default angular.module('directives.formField', [])
  .directive('formField', formField)
  .name;
