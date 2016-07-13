export default class EventsListCtrl {
  constructor ($scope, eventsStore) {
    this._eventsStore = eventsStore;
    $scope.$on('eventsList.needReload', () => this.reloadEvents());
    this.reloadEvents();
  }

  reloadEvents () {
    this.events = this._eventsStore.all();
  }

  destroyEvent (event) {
    this._eventsStore.destroy(event.id);
    this.reloadEvents();
  }
}
