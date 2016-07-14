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
      onEnter: ($state, eventFormModal) => {
        eventFormModal.show()
          .finally(() => $state.go('events'))
      }
    })
    .state('events.edit', {
      url: 'edit/{id:int}',
      onEnter: ($state, $stateParams, eventFormModal) => {
        eventFormModal.show($stateParams.id)
          .finally(() => $state.go('events'))
      }
    });
}
