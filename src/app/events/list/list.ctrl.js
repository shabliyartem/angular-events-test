export default class EventsListCtrl {
  constructor ($scope, eventsStore) {
    this._eventsStore = eventsStore;
    this.currentPage = 1;
    this.currencyIcon = 'btc';

    $scope.$on('eventsList.needReload', () => this.reloadEvents());
    this.reloadEvents();
  }

  reloadEvents () {
    let response = this._eventsStore.all(this.currentPage);
    this.events = response.events;
    this.totalEventsCount = response.totalCount;
    this.totalEventsPrice = response.totalPrice;
  }

  destroyEvent (event) {
    this._eventsStore.destroy(event.id);
    this.reloadEvents();
  }
}
