export default class EventsEditCtrl {
  constructor (eventsStore, $uibModalInstance, eventId) {
    this._modalInstance = $uibModalInstance;
    this._eventsStore = eventsStore;
    this._eventId = eventId;
    this.event = eventsStore.find(eventId);
  }

  update (form) {
    if (form.$valid) {
      this._eventsStore.update(this._eventId, this.event);
      this._modalInstance.close();
    }
  }

  cancel() {
    this._modalInstance.dismiss();
  }
}
