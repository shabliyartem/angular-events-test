export default class AppCtrl {
  constructor ($rootScope, eventsStore, confirmModal) {
    this._eventsStore = eventsStore;
    this._rootScope = $rootScope;
    this._confirmModal = confirmModal;
    this.isCollapsed = true;
  }

  toggle () {
    this.isCollapsed = !this.isCollapsed;
  }

  resetData () {
    this._confirmModal.show({
      title: 'Reset Events Data',
      message: 'Are you sure to delete all events?',
      okText: 'Delete All',
      okClass: 'btn-danger'
    })
      .then(() => {
        this._eventsStore.destroyAll();
        this._rootScope.$broadcast('eventsList.needReload');
      });
  }
}
