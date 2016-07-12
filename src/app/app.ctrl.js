export default class AppCtrl {
  constructor () {
    this.isCollapsed = true;
  }

  toggle () {
    this.isCollapsed = !this.isCollapsed;
  }
}
