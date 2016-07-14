import angular from 'angular';

class ConfirmModal {
  constructor ($uibModal) {
    this._uibModal = $uibModal;
  }

  show (options) {
    let modalInstance = this._uibModal.open({
      template: require('./confirmModal.html'),
      controller: function ($scope) {
        _.assign($scope, options);
      }
    });
    return modalInstance.result;
  }
}

export default angular.module('services.confirmModal', [])
  .service('confirmModal', ConfirmModal)
  .name;
