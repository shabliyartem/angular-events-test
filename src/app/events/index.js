import angular from 'angular';
import uirouter from 'angular-ui-router';

import './list/style.scss';

import EventsListCtrl from './list/list.ctrl';
import eventsStore from '../../services/eventsStore.service';

export default angular.module('app.events', [uirouter, eventsStore])
  .controller('EventsListCtrl', EventsListCtrl)
  .name;
