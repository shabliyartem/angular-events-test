export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('events', {
      url: '/',
      template: require('../app/events/list/list.html'),
      controller: 'EventsListCtrl',
      controllerAs: 'scope'
    });
}
