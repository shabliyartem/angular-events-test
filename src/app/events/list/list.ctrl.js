export default class EventsListCtrl {
  constructor (eventsStore) {
    this.events = eventsStore.get();
    this._eventsStore = eventsStore;
    this.event = {};
  }

  saveEvent () {
    this.event.date = new Date();
    this._eventsStore.add(this.event);
    this.event = {};
  }
}
