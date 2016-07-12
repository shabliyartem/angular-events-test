import angular from 'angular';
import uirouter from 'angular-ui-router';

import './list/style.scss';

import EventsListCtrl from './list/list.ctrl';

export default angular.module('app.events', [uirouter])
  .controller('EventsListCtrl', EventsListCtrl)
  .name;
