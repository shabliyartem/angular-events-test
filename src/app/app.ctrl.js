export default class AppCtrl {
  constructor ($rootScope, eventsStore) {
    this._eventsStore = eventsStore;
    this._rootScope = $rootScope;
    this.isCollapsed = true;
  }

  toggle () {
    this.isCollapsed = !this.isCollapsed;
  }

  resetData () {
    this._eventsStore.destroyAll();
    this._rootScope.$broadcast('eventsList.needReload');
  }
}
