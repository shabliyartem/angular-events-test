import angular from 'angular';

class EventFormModal {
  constructor ($rootScope, $uibModal) {
    this._rootScope = $rootScope;
    this._uibModal = $uibModal;
  }

  show (eventId) {
    let modalInstance = this._uibModal.open({
      template: require('../app/events/_form.html'),
      controller: eventId ? 'EventsEditCtrl' : 'EventsNewCtrl',
      controllerAs: 'scope',
      resolve: {
        eventId: () => eventId
      }
    });
    return modalInstance.result
      .then(() => this._rootScope.$broadcast('eventsList.needReload'))
  }
}


export default angular.module('services.eventFormModal', [])
  .service('eventFormModal', EventFormModal)
  .name;
