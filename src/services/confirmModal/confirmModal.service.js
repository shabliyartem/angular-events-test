import angular from 'angular';
import _ from 'lodash';

class ConfirmModal {
  constructor ($uibModal) {
    this._uibModal = $uibModal;
  }

  show (options) {
    let modalInstance = this._uibModal.open({
      template: require('./confirmModal.html'),
      controller: ($scope) => {
        _.assign($scope, options);
      }
    });
    return modalInstance.result;
  }
}

export default angular.module('services.confirmModal', [])
  .service('confirmModal', ConfirmModal)
  .name;
