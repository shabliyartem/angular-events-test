export default function routing ($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('events', {
      url: '/',
      template: require('../app/events/list/list.html'),
      controller: 'EventsListCtrl',
      controllerAs: 'scope'
    })
    .state('events.new', {
      url: 'new',
      onEnter: ($state, $rootScope, $uibModal) => {
        let modalInstance = $uibModal.open({
          template: require('../app/events/new/new.html'),
          controller: 'EventsNewCtrl',
          controllerAs: 'scope'
        });
        modalInstance.result
          .then(() => $rootScope.$broadcast('eventsList.needReload'))
          .finally(() => $state.go('events'))
      }
    })
    .state('events.edit', {
      url: 'edit/{id:int}',
      onEnter: ($state, $stateParams, $rootScope, $uibModal) => {
        let modalInstance = $uibModal.open({
          template: require('../app/events/edit/edit.html'),
          controller: 'EventsEditCtrl',
          controllerAs: 'scope',
          resolve: {
            eventId: () => $stateParams.id
          }
        });
        modalInstance.result
          .then(() => $rootScope.$broadcast('eventsList.needReload'))
          .finally(() => $state.go('events'))
      }
    });
}
