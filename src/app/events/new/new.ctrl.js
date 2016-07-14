export default class EventsNewCtrl {
  constructor (eventsStore, $uibModalInstance) {
    this._modalInstance = $uibModalInstance;
    this._eventsStore = eventsStore;
    this.event = {};
  }

  create (form) {
    if (form.$valid) {
      this.event.date = new Date();
      this._eventsStore.create(this.event);
      this.event = {};
      this._modalInstance.close();
    }
  }

  cancel() {
    this._modalInstance.dismiss();
  }
}
