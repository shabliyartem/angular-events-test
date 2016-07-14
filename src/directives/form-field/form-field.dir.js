import angular from 'angular';
import _ from 'lodash';

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
    link: (scope) => {
      scope.inputId = _.uniqueId(`form-field-${scope.name}-`);
    }
  }
}

export default angular.module('directives.formField', [])
  .directive('formField', formField)
  .name;
